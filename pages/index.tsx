import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster, toast } from 'sonner'

export default function Home() {
  // Client-side form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submission started')
    
    const form = e.currentTarget
    const email = new FormData(form).get('email')
    console.log('Email to submit:', email)

    try {
      const res = await fetch('https://project-empyrean.vercel.app/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      console.log('Response status:', res.status)
      
      const data = await res.json()
      console.log('Response data:', data)

      if (!res.ok) throw new Error(data.message || 'Subscription failed')
      
      toast.success('Thank you for subscribing!')
      form.reset()
    } catch (error) {
      console.error('Submission error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Project Empyrean</title>
        <meta name="description" content="Project Empyrean - Addressing the fundamental problem of subjective experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Toaster position="top-center" />
      
      {/* Logo - adjusted top margin */}
      <Image
        src="/Logo@3x.png"
        alt="Project Empyrean Logo"
        width={213}
        height={213}
        className="mx-auto mt-12 md:mt-16"
        priority
        unoptimized
      />
      <main className="min-h-screen px-10 md:px-8 lg:px-16 py-12 md:py-16 max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-12 md:space-y-16 w-full">
          {/* Main Content */}
          <article className="space-y-8 text-gray-800 leading-relaxed text-sm md:text-base text-justify w-full">
            <p>
              The fundamental problem of existence is discontentment, that subjective phenomenon typically underlying all states of mental distress spanning from the subtlest of boredom to the most abject of suffering. It arises due to craving -- personal attraction and aversion to objects of experience -- and is resolved by its attenuation assisted by the experience of the desired object.
            </p>

            <p>
              Insofar as the tendency of craving and the experience of the desired is governed by causality, there lies the potential for the minimization and extinction of discontentment through skillful volitional action.
            </p>

            <p>
              Project Empyrean seeks epistemically certain solutions to this fundemental problem of discontentment in the form of true knowledge by which volition may be constrained in such a manner leading to the highest possible attainment of happiness and contentment.
            </p>
          </article>

          {/* Separator Line
          <hr className="w-full border-t border-gray-200 my-12 md:my-16" /> */}

          {/* Email Form - minimal design */}
          <div className="w-full">
            <form 
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={handleSubmit}
              action="/api/subscribe"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-1.5 text-sm border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent transition-colors placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="sm:ml-2 px-6 py-1.5 text-sm text-gray-800 border border-gray-300 hover:border-gray-800 hover:text-gray-900 transition-all duration-200"
              >
                Get updates
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
} 