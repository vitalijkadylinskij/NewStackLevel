"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
