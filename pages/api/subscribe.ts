import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const email = req.body.email

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    // TODO: Implement your email subscription logic here
    // Example: await addSubscriberToDatabase(email)
    
    // For now, just return success
    return res.status(200).json({ message: 'Subscription successful' })
  } catch (error) {
    console.error('Subscription error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
} 