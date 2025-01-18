import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.POSTGRES_URL!)

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ message: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    )
  }

  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ message: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    try {
      await sql`
        INSERT INTO subscribers (email)
        VALUES (${email})
        ON CONFLICT (email) DO NOTHING
      `
    } catch (dbError) {
      if ((dbError as Error).message.includes('relation "subscribers" does not exist')) {
        await sql`
          CREATE TABLE IF NOT EXISTS subscribers (
            email TEXT PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          )
        `
        await sql`
          INSERT INTO subscribers (email)
          VALUES (${email})
          ON CONFLICT (email) DO NOTHING
        `
      } else {
        throw dbError
      }
    }

    return new Response(
      JSON.stringify({ message: 'Subscription successful' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return new Response(
      JSON.stringify({ 
        message: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
} 