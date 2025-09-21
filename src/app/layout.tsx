import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const metadataBase = new URL('https://arnav.web.app');

export const metadata: Metadata = {
  title: 'Arcz',
  description: 'Personal website of Arnav Chhajed, a 16-year-old student and AI enthusiast from India, showcasing projects in AI, math, and physics.',
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
    "https://www.linkedin.com/in/arnav-chhajed-b65893290/",
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
