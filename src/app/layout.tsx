import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: 'My Favorite Bands',
  description: 'Explore and manage favorite music bands with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}