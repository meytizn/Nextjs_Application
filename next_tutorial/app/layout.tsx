import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
import Navbar from "./myweb/navbar";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });






export const metadata: Metadata = {
  title: "Next js 15",
  description: "Next js 15 Tutorial",
};


const VazirFont=localFont({
  src:'../public/fonts/Vazirmatn-Regular.woff2'
})











export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`   ${VazirFont}`}>

    
        <main className="p-5">
          <Navbar/>
        {children}
        </main>
        

      </body>
    </html>
  );
}
