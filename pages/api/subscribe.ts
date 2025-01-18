import type { NextApiRequest, NextApiResponse } from 'next'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.POSTGRES_URL!)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route hit:', req.method)
  
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method)
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const email = req.body.email
    console.log('Received email:', email)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Invalid email:', email)
      return res.status(400).json({ message: 'Invalid email address' })
    }

    try {
      console.log('Attempting database insert')
      await sql`
        INSERT INTO subscribers (email)
        VALUES (${email})
        ON CONFLICT (email) DO NOTHING
      `
      console.log('Insert successful')
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Check if table doesn't exist
      if ((dbError as Error).message.includes('relation "subscribers" does not exist')) {
        // Create table and retry
        await sql`
          CREATE TABLE IF NOT EXISTS subscribers (
            email TEXT PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          )
        `
        // Retry insert
        await sql`
          INSERT INTO subscribers (email)
          VALUES (${email})
          ON CONFLICT (email) DO NOTHING
        `
      } else {
        throw dbError
      }
    }

    return res.status(200).json({ message: 'Subscription successful' })
  } catch (error) {
    console.error('Subscription error:', error)
    // Send more detailed error message
    return res.status(500).json({ 
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    })
  }
} 