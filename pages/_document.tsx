import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-page-bg dark:bg-page-bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 