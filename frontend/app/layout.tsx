import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anass FIQHI - Software Engineer, Writer & Speaker",
  description: "Personal portfolio and blog of Anass FIQHI, a software engineer passionate about building great web experiences and sharing knowledge.",
  keywords: ["software engineer", "web development", "React", "Next.js", "TypeScript", "blog", "speaking"],
  authors: [{ name: "Anass FIQHI" }],
  creator: "Anass FIQHI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    title: "Anass FIQHI - Software Engineer, Writer & Speaker",
    description: "Personal portfolio and blog of Anass FIQHI, a software engineer passionate about building great web experiences and sharing knowledge.",
    siteName: "Anass FIQHI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anass FIQHI - Software Engineer, Writer & Speaker",
    description: "Personal portfolio and blog of Anass FIQHI, a software engineer passionate about building great web experiences and sharing knowledge.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          '--content-offset': '0px',
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
