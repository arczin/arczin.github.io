import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/next";

const metadataBase = new URL('https://arnav.web.app');

export const metadata: Metadata = {
  title: 'Arcz',
  description: 'Personal website | Arnav Chhajed | 17 | AI & Math Romantic',
  metadataBase,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arnav Chhajed',
  url: 'https://arnav.web.app',
  email: "mailto:arnav.chhajed.000@gmail.com",
  knowsAbout: ["Artificial Intelligence", "Programming", "Physics", "Mathematics"],
  nationality: "Indian",
  sameAs: [
    "https://www.linkedin.com/in/arcz/",
    "https://github.com/arczin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
