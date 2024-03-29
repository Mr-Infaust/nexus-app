import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="bg-card fixed top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-2 sm:justify-between sm:space-x-0">
        <Navigation items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.user}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.user className="h-5 w-5 fill-current" />
                <span className="sr-only">Login</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
