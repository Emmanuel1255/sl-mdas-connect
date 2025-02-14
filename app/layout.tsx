import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

// Initialize Inter font
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "SL-MDA Connect",
  description: "Sierra Leone's Ministry Departmental Agencies Directory",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "logo.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: {
      url: "logo.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' }
  ],
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b glass-effect">
      <div className="mx-auto max-w-7xl w-full flex items-center justify-between py-2 px-4 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SL-MDA Connect Logo"
            width={32}
            height={32}
            className="drop-shadow-lg md:w-10 md:h-10"
          />
          <span className="font-bold text-base md:text-xl gradient-text">SL-MDA Connect</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t glass-effect mt-auto">
      <div className="mx-auto max-w-7xl w-full py-6 md:py-8 px-4 text-center">
        <Image
          src="/logo.png"
          alt="Sierra Leone Coat of Arms"
          width={40}
          height={40}
          className="mx-auto mb-4 md:mb-6 drop-shadow-lg md:w-[60px] md:h-[60px]"
        />
        <p className="text-xs md:text-sm text-muted-foreground">© 2025 SL-MDA Connect. All rights reserved.</p>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-muted-foreground">
          A comprehensive directory of Sierra Leone's Ministry Departmental Agencies
        </p>
        <div className="mt-3 md:mt-4 flex items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
          <span className="gradient-text font-medium">Unity</span>
          <span className="gradient-text font-medium">Freedom</span>
          <span className="gradient-text font-medium">Justice</span>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} antialiased dark`}  
    >
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      <body 
        className={`${inter.className} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="sl-mda-theme"
        >
          <div className="min-h-[100dvh] flex flex-col bg-background">
            <div className="fixed inset-0 gradient-bg -z-10" />
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}