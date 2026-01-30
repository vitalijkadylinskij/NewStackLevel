import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "STACKLEVEL — Custom Software Development",
  description: "We build high-end technological solutions to scale businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
