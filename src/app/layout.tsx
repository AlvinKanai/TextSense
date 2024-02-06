import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TextSense",
  description: "Interact with your documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
