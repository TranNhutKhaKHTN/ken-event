import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ken-event.alosan.vn"),
  title: "Kén - Rực rỡ hay không là do...",
  description: "Sự kiện Kén - Rực rỡ hay không là do...",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    images: [{ url: "https://ken-event.alosan.vn/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ken-event.alosan.vn/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full font-sans antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
