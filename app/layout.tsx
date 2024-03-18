import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { MobileFooter } from "@/components/mobilefooter"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  authors: [
    { name: "Michael Rosenberger" },
    {
      name: "Michael Rosenberger",
      url: "https://www.nexusproject.app",
    },
  ],
    icons: [
      { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
      { rel: "icon", url: "icons/icon-128x128.png" },
    ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#050d0f" },
    { media: "(prefers-color-scheme: dark)", color: "#050d0f" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex h-screen">
                <div className="w-full pt-16 pb-16">
                  {children}
                </div>
              </main>
              <MobileFooter />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
