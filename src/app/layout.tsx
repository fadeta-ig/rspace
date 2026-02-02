import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RSPACE Studio | Jasa Pembuatan Website Profesional End-to-End",
  description:
    "RSPACE Studio menyediakan layanan pembuatan website profesional dari desain hingga hosting. Solusi digital lengkap, modern, dan SEO optimal untuk bisnis Anda.",
  keywords: [
    "RSPACE Studio",
    "jasa pembuatan website",
    "web developer Indonesia",
    "jasa hosting website",
    "company profile website",
    "website profesional",
    "web design modern",
    "jasa SEO website"
  ],
  authors: [{ name: "RSPACE Studio" }],
  creator: "RSPACE Studio",
  robots: "index, follow",
  openGraph: {
    title: "RSPACE Studio | Jasa Pembuatan Website Profesional End-to-End",
    description: "Layanan pembuatan website profesional dari desain hingga hosting.",
    type: "website",
    locale: "id_ID",
    url: "https://rspace.studio/",
    siteName: "RSPACE Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container px-4 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-lg bg-[#002B7F] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <span className="font-bold text-lg text-black tracking-tight">RSPACE STUDIO.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                  <Link href="/layanan" className="text-gray-600 hover:text-[#002B7F] text-sm font-medium transition-colors">Layanan</Link>
                  <Link href="/portfolio" className="text-gray-600 hover:text-[#002B7F] text-sm font-medium transition-colors">Portfolio</Link>
                  <Link href="/harga" className="text-gray-600 hover:text-[#002B7F] text-sm font-medium transition-colors">Harga</Link>
                  <Link href="/tentang" className="text-gray-600 hover:text-[#002B7F] text-sm font-medium transition-colors">Tentang</Link>
                  <Link href="/kontak" className="btn-primary bg-[#002B7F] hover:bg-[#001D56]">Hubungi Kami</Link>
                </nav>

                <button className="md:hidden p-2" aria-label="Menu">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="bg-gray-900 text-white">
            <div className="container px-4 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-2">
                  <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                      <span className="text-[#002B7F] font-bold text-sm">R</span>
                    </div>
                    <span className="font-bold text-lg text-white tracking-tight">RSPACE STUDIO.</span>
                  </Link>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Solusi digital end-to-end untuk bisnis Anda. Dari desain hingga hosting, kami adalah partner terpercaya Anda.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Navigasi</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/layanan" className="hover:text-white transition-colors">Layanan</Link></li>
                    <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                    <li><Link href="/harga" className="hover:text-white transition-colors">Harga</Link></li>
                    <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Kontak</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>hello@rspace.studio</li>
                    <li>+62 812 3456 7890</li>
                    <li>Jakarta, Indonesia</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} RSPACE Studio. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
