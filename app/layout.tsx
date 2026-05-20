import type { Metadata } from "next";
import "./globals.css";
import { BG_ALL_URL } from "@/lib/preload-bg-image";

export const metadata: Metadata = {
  metadataBase: new URL("https://chuong-trinh-nghe-thuat-ken.alosan.vn"),
  title: "Kén - Rực rỡ hay không là do...",
  description: "Sự kiện Kén - Rực rỡ hay không là do...",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Kén Event",
    title: "Kén - Rực rỡ hay không là do...",
    description: "Sự kiện Kén - Rực rỡ hay không là do...",
    images: [
      {
        url: "https://chuong-trinh-nghe-thuat-ken.alosan.vn/og-image.png",
        width: 840,
        height: 766,
        type: "image/png",
        alt: "Kén - Chương trình nghệ thuật",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kén - Rực rỡ hay không là do...",
    description: "Sự kiện Kén - Rực rỡ hay không là do...",
    images: ["https://chuong-trinh-nghe-thuat-ken.alosan.vn/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full font-sans antialiased">
      <head>
        <link rel="preload" as="image" href={BG_ALL_URL} fetchPriority="high" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
