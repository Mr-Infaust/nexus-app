export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nexus App",
  description:
    "Nexus App Description.",
  mainNav: [
    {
      title: "Login",
      href: "/login",
      user: false,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      user: true,
    },
  ],
  mobileFooterNav: [
    {
      title: "Login",
      href: "/login",
      user: false,
    },
    {
      title: "Home",
      href: "/",
      user: false,
    },
  ],
  links: {
    user: "/login",
    github: "https://github.com",
    website: "https://www.nexusproject.app",
  },
}
