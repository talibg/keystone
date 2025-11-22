import { BookOpen, Layers, List, Search } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import RandomFallacyButton from "@/components/RandomFallacyButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { getAllFallacies } from "@/lib/fallacies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fallacyguide.com"),
  title: {
    template: "%s | The Fallacy Guide",
    default: "The Fallacy Guide – Master Critical Thinking",
  },
  description:
    "The most comprehensive and modern guide to logical fallacies. Learn to spot, understand, and counter common errors in reasoning.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fallacyguide.com",
    siteName: "The Fallacy Guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fallacies = getAllFallacies();
  const slugs = fallacies.map((f) => f.slug);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              <div className="flex items-center gap-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span className="hidden sm:inline-block">Fallacy Guide</span>
                </Link>

                <nav
                  aria-label="Primary"
                  className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground"
                >
                  <Link
                    href="/fallacies"
                    className="transition-colors hover:text-foreground flex items-center gap-2"
                  >
                    <List className="h-4 w-4" />
                    All Fallacies
                  </Link>
                  <Link
                    href="/categories"
                    className="transition-colors hover:text-foreground flex items-center gap-2"
                  >
                    <Layers className="h-4 w-4" />
                    Categories
                  </Link>
                  <Link
                    href="/search"
                    className="transition-colors hover:text-foreground flex items-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </Link>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <RandomFallacyButton slugs={slugs} />
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="flex-1" id="main-content">
            <div className="mx-auto max-w-7xl px-6 py-12">{children}</div>
          </main>

          <footer className="border-t border-border/40 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    About
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-primary transition-colors"
                      >
                        About This Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-primary transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Browse
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-primary transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fallacies"
                        className="hover:text-primary transition-colors"
                      >
                        All Fallacies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/categories"
                        className="hover:text-primary transition-colors"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/search"
                        className="hover:text-primary transition-colors"
                      >
                        Search
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Explore
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link
                        href="/fallacies/types"
                        className="hover:text-primary transition-colors"
                      >
                        Types of Fallacies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fallacies/everyday"
                        className="hover:text-primary transition-colors"
                      >
                        Everyday Arguments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fallacies/politics"
                        className="hover:text-primary transition-colors"
                      >
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fallacies/media"
                        className="hover:text-primary transition-colors"
                      >
                        Media & Social Media
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fallacies/master-list"
                        className="hover:text-primary transition-colors"
                      >
                        Master List
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>
                  &copy; {new Date().getFullYear()} The Fallacy Guide by{" "}
                  <a
                    href="https://github.com/talibg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    talibg
                  </a>
                  .
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
