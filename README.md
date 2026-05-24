# Allo Inventory Reservation System

## ■ Live Demo
■ [Click here to run live](http://localhost:8000/allo_inventory.html)

A race-condition-safe inventory reservation system built with Next.js, Prisma, PostgreSQL, and Redis.
---
# 🚀 Local Setup

## Clone the repository

```bash
git clone https://github.com/jothir2022-lgtm/allo-inventory
cd allo-inventory
npm install
```

## Create `.env.local`

```env
DATABASE_URL="postgresql://user:pass@host/allo?sslmode=require"
DIRECT_URL="postgresql://user:pass@host/allo?sslmode=require"
REDIS_URL="rediss://default:token@host:6380"
CRON_SECRET="your-random-secret"
```

## Run Prisma migration and seed

```bash
npx prisma migrate dev
npx prisma db seed
```

## Start development server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:3000
```

---

# ⏱ Expiry Mechanism

Reservations automatically expire after **10 minutes**.

In production, a **Vercel Cron Job** runs every minute and calls:

```text
GET /api/cron/release-expired
```

This endpoint:

- Finds all `PENDING` reservations where:

```text
expiresAt < now()
```

- Updates reservation status to:

```text
RELEASED
```

- Decrements:

```text
StockLevel.reserved
```

accordingly.

## Vercel Cron Configuration

```json
{
  "crons": [
    {
      "path": "/api/cron/release-expired",
      "schedule": "* * * * *"
    }
  ]
}
```

The endpoint is protected using:

```text
Authorization: Bearer <CRON_SECRET>
```

so only trusted cron jobs can trigger it.

---

# 🔒 Concurrency — Race Condition Fix

The reservation endpoint uses a PostgreSQL row-level lock inside a transaction.

```ts
await prisma.$transaction(async (tx) => {
  const [stock] = await tx.$queryRaw`
    SELECT * FROM "StockLevel"
    WHERE "productId" = ${productId}
      AND "warehouseId" = ${warehouseId}
    FOR UPDATE
  `

  const available = stock.total - stock.reserved

  if (available < quantity) {
    throw new Error('INSUFFICIENT_STOCK')
  }

  await tx.stockLevel.update({
    where: {
      productId_warehouseId: {
        productId,
        warehouseId
      }
    },
    data: {
      reserved: {
        increment: quantity
      }
    }
  })

  return tx.reservation.create({
    data: {
      productId,
      warehouseId,
      quantity,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000)
    }
  })
})
```

## Why `FOR UPDATE`?

If two reservation requests arrive simultaneously:

1. The first transaction locks the stock row.
2. The second transaction waits.
3. After the first commits, the second re-checks stock.
4. If stock is unavailable, it returns:

```text
409 CONFLICT
```

This guarantees safe inventory reservations without overselling.

---

# ⭐ Bonus — Idempotency

The API supports an `Idempotency-Key` header.

If the same request is retried, Redis returns the cached response instead of creating a duplicate reservation.

```ts
const cached = await redis.get(`idempotency:${key}`)

if (cached) {
  return Response.json(JSON.parse(cached))
}

await redis.set(
  `idempotency:${key}`,
  JSON.stringify(result),
  { ex: 86400 }
)
```

Benefits:

- Prevents duplicate reservations
- Handles network retries safely
- Improves API reliability

---

# ⚖️ Trade-offs & Improvements

## Redis Distributed Lock

For multi-region deployments, Redis Redlock would be safer than PostgreSQL row locking.

PostgreSQL locks are sufficient for this single-region implementation.

## Lazy Expiry

Instead of cron-based cleanup, expired reservations could be released during reads.

Trade-off:

- Simpler implementation
- But stale reserved counts remain until accessed

## Real-time Updates

With more time, WebSockets or Supabase Realtime could provide live inventory updates.

## Authentication

This demo does not include authentication.

Production systems should use:

- JWT authentication
- Session management
- User-based reservation ownership

## Testing

Future improvements:

- Vitest unit tests
- Playwright end-to-end tests
- API integration tests

---

# 📦 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- Upstash Redis
- Zod Validation
- Tailwind CSS
- shadcn/ui
- Vercel Hosting + Cron Jobs

---

# 📌 API Endpoints

## Products

```text
GET /api/products
```

## Warehouses

```text
GET /api/warehouses
```

## Create Reservation

```text
POST /api/reservations
```

## Confirm Reservation

```text
POST /api/reservations/[id]/confirm
```

## Release Reservation

```text
POST /api/reservations/[id]/release
```

---

# 👩‍💻 Author

Developed by Jothi
