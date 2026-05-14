import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kén - Rực rỡ hay không là nhờ?",
  description: "Sự kiện Kén - Rực rỡ hay không là nhờ?",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full font-sans antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
