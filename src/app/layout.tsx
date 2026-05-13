import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "NexusOps | BliBli OMG",
  description: "Pusat Kendali Operasional BliBli OMG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}