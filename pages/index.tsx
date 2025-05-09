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
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      console.log('Response status:', res.status)
      
      const data = await res.json()
      console.log('Response data:', data)

      if (!res.ok) throw new Error(data.message || 'Subscription failed')
      
      toast.success('Sign up success. Stay tuned for updates.', {
        duration: 2000,
        dismissible: false
      })
      form.reset()
    } catch (error) {
      console.error('Submission error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.', {
        duration: 2000,
        dismissible: false
      })
    }
  }

  return (
    <>
      {/* Fixed overlay for notifications */}
      <div className="fixed top-5 left-0 right-0 z-50 pointer-events-none">
        <Toaster position="top-center" />
      </div>

      <div className="animate-fade-in">
        <Head>
          <title>Project Empyrean</title>
          <meta name="description" content="Project Empyrean - Seeking epistemically certain solutions to the fundamental problem of existence." />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="text-size-adjust" content="100%" />
          <meta name="color-scheme" content="light dark" />
          <meta name="theme-color" content="#F8FFFF" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        
        {/* Logo with animation */}
        <Image
          src="/Logo@3x.png"
          alt="Project Empyrean Logo"
          width={213}
          height={213}
          className="mx-auto mt-12 md:mt-16 animate-fade-in dark:invert"
          priority
          unoptimized
        />

        <main className="px-10 md:px-8 lg:px-16 py-12 md:py-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-12 md:space-y-16 w-full">
            {/* Main Content with staggered animation */}
            <article className="space-y-8 text-text dark:text-text-dark leading-relaxed text-sm md:text-base text-justify w-full animate-fade-in delay-500">
              <p>
                Insofar as all shades of suffering are governed by causality
                within range of volition, Project Empyrean seeks epistemically
                certain solutions by which volition may be optimally constrained
                for the indefinite minimization of all states of stress in both
                current and subsequent lives. In other words, transcending human
                existence into the heavens and beyond.
              </p>
            </article>

            {/* Separator Line
            <hr className="w-full border-t border-gray-200 my-12 md:my-16" /> */}

            {/* Email Form and Contact - minimal design */}
            <div className="w-full animate-fade-in delay-700">
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
                  className="flex-1 px-3 py-1.5 text-base text-text dark:text-text-dark border-b border-border dark:border-border-dark focus:outline-none focus:border-border-hover dark:focus:border-border-dark-hover bg-transparent transition-colors placeholder:text-sm placeholder:text-gray-400"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-2 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial px-6 py-1.5 text-sm text-text dark:text-text-dark border border-border dark:border-border-dark hover:border-border-hover dark:hover:border-border-dark-hover hover:text-text-dark dark:hover:text-text-dark-dark transition-all duration-200 rounded-sm"
                  >
                    Get updates
                  </button>
                  <a 
                    href="https://discord.gg/6QnmcAYtP2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-3 py-1.5 text-sm text-text dark:text-text-dark border border-border dark:border-border-dark hover:border-border-hover dark:hover:border-border-dark-hover hover:text-text-dark dark:hover:text-text-dark-dark transition-all duration-200 flex items-center justify-center rounded-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
} 