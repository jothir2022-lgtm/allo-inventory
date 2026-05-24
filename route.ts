import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  // Verify cron secret
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Find all expired PENDING reservations
  const expired = await prisma.reservation.findMany({
    where: { status: 'PENDING', expiresAt: { lt: new Date() } }
  })

  if (expired.length === 0) return NextResponse.json({ released: 0 })

  // Release each one in a transaction
  await prisma.$transaction(
    expired.map(res =>
      prisma.stockLevel.update({
        where: {
          productId_warehouseId: {
            productId: res.productId,
            warehouseId: res.warehouseId,
          }
        },
        data: { reserved: { decrement: res.quantity } }
      })
    )
  )

  await prisma.reservation.updateMany({
    where: { id: { in: expired.map(r => r.id) } },
    data: { status: 'RELEASED' }
  })

  return NextResponse.json({ released: expired.length })
}


