import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const metadata = {
  title: "shoppy",
  description: "Static demo storefront built with Next.js",
};

function HeaderFallback() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          shoppy<span className="brandDot">.</span>
        </div>
        <div style={{ flex: 1 }} />
        <div className="cartBtn" aria-hidden="true" style={{ opacity: 0.7 }}>
          🛒 <span className="badge">0</span>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Required: Client components using useSearchParams in a layout must be behind Suspense */}
        <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense>

        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
