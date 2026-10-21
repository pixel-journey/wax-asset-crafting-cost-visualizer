import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Equal parts, 3333 each',
  description: 'Three equal costs are 3333 bps each. They sum to 9999. No craft is sent.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
