import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.POSTGRES_URL!)

type Subscriber = {
  email: string
  subscribedAt: Date
}

export async function getSubscribers(): Promise<Subscriber[]> {
  const rows = await sql`
    SELECT email, created_at as "subscribedAt"
    FROM subscribers
    ORDER BY created_at DESC
  `
  return rows as Subscriber[]
} 