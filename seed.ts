import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const warehouses = await Promise.all([
    prisma.warehouse.create({ data: { name: 'Mumbai Central', location: 'Mumbai, MH' } }),
    prisma.warehouse.create({ data: { name: 'Delhi Distribution Hub', location: 'Delhi, DL' } }),
    prisma.warehouse.create({ data: { name: 'Bangalore Fulfillment', location: 'Bangalore, KA' } }),
  ])

  const products = await Promise.all([
    prisma.product.create({ data: { name: 'Wireless Headphones', sku: 'SKU-WNC-001' } }),
    prisma.product.create({ data: { name: 'Mechanical Keyboard TKL', sku: 'SKU-MKB-087' } }),
    prisma.product.create({ data: { name: '4K Webcam Pro', sku: 'SKU-4KW-200' } }),
  ])

  // Seed stock levels
  for (const product of products) {
    for (const warehouse of warehouses) {
      await prisma.stockLevel.create({
        data: {
          productId: product.id,
          warehouseId: warehouse.id,
          total: Math.floor(Math.random() * 80) + 20,
          reserved: 0,
        }
      })
    }
  }

  console.log('✅ Seed complete')
}

main().finally(() => prisma.$disconnect())
