// New links to navigation bars, footers etc., should always be added here

interface NavigationLink {
  text: string;
  href: string;
  cta?: boolean;
}

export const primaryNavigation: NavigationLink[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact", cta: true },
];

export const secondaryNavigation: NavigationLink[] = [
  { text: "Accessibility", href: "/accessibility" },
  { text: "Data Policy", href: "/data-policy" },
  { text: "Sitemap", href: "/sitemap-0.xml" },
];
