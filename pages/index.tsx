import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Empyrean</title>
        <meta name="description" content="Project Empyrean - Addressing the fundamental problem of subjective experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Logo */}
      <Image
        src="/Logo@3x.png"
        alt="Project Empyrean Logo"
        width={213}
        height={213}
        className="mx-auto mt-8"
        priority
        unoptimized
      />
      <main className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8">

          {/* Tagline */}
          <p className="text-accent text-lg text-center mb-12">
            The fundamental problem of subjective experience is discontentment.
          </p>

          {/* Main Content */}
          <article className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              Work stress is a common phenomenon in modern society. For senior developers, the work stress they face may be more profound as they often face higher expectations and more complex tasks. To cope with work stress, senior developers can take the following measures:
            </p>

            <p>
              Firstly, manage time wisely. Avoid overworking and overtime as much as possible, and make sure to leave adequate time for rest and relaxation. Prioritize work tasks and focus on completing important projects. This not only improves work efficiency but also reduces stress.
            </p>

            <p>
              Secondly, seek support. Share your feelings with colleagues, friends, or family members and seek their advice and support. Sometimes, talking about your inner concerns can help alleviate stress.
            </p>

            <p>
              Thirdly, cultivate healthy habits. Maintain a balanced diet and sleep routine, and engage in regular exercise activities as they contribute to physical and mental well-being. Additionally, try activities that help with relaxation and stress reduction such as meditation, yoga, or reading.
            </p>

            <p>
              Lastly, develop a positive mindset. Believe in your abilities and experience, learn to relax, and accept challenges and failures. Maintaining a positive attitude helps overcome difficulties and stress.
            </p>

            <p>
              In conclusion, senior developers should acknowledge the existence of work stress and take proactive measures to cope with it. By managing time wisely, seeking support, cultivating healthy habits, and maintaining a positive mindset, they can better cope with work stress, improve work efficiency, and enhance the quality of life.
            </p>
          </article>
        </div>
      </main>
    </>
  )
} 