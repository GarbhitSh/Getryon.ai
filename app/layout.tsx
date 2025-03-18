import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { DM_Sans } from "next/font/google";
import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://insta-try-on-ai.vercel.app/"),
  title: {
    default: 'Instant Try On',
    template: `%s | Instant Try On`
  },
  description: 'Discover, Shop & Try on clothes virtually from all angles, whether on a model or on yourself, from the comfort of your home.',
  openGraph: {
    description: 'Discover, Shop & Try on clothes virtually from all angles, whether on a model or on yourself, from the comfort of your home.',
    images: ['https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png'],
    url: 'https://insta-try-on-ai.vercel.app/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Try On',
    description: 'Discover, Shop & Try on clothes virtually from all angles, whether on a model or on yourself, from the comfort of your home.',
    siteId: "",
    creator: "",
    creatorId: "",
    images: ['https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* <link
            rel="preload"
            href="https://utfs.io/f/31dba2ff-6c3b-4927-99cd-b928eaa54d5f-5w20ij.png"
            as="image"
          />
          <link
            rel="preload"
            href="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
            as="image"
          /> */}
        </head>
        <body className={cn(dmSans.className, 'antialiased min-h-screen border-none outline-none', 'scrollbar scrollbar-thumb scrollbar-thumb-white scrollbar-track-slate-700')} suppressHydrationWarning={true}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  )
}