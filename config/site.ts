export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nexus App",
  description:
    "Nexus App Description.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/login",
    },
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    website: "https://www.nexusproject.app",
  },
}
