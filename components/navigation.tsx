import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { createClient } from '@/utils/supabase/server'
import { cookies } from "next/headers";

interface MainNavProps {
  items?: NavItem[]
}

export async function Navigation({ items }: MainNavProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.auth.getUser();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2" title={siteConfig.name}>
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length && !data?.user ? (
        <nav className="flex gap-8">
          {items?.map(
            (item, index) =>
              (item.href && !item.user) && (
                  <Link
                    key={index}
                    href={item.href}
                    title={item.title}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground hover:text-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
              )
          )}
        </nav>
      ) : (
        <nav className="flex gap-8">
          {items?.map(
            (item, index) =>
              (item.href && item.user) && (
                  <Link
                    key={index}
                    href={item.href}
                    title={item.title}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground hover:text-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
              )
          )}
        </nav>
      )}
    </div>
  )
}
