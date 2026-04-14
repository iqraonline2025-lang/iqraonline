import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../app/components/Navbar"; 
import Footer from "../app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iqra Online LTD - Learn Qur'an & Web Development",
  description: "Learn Qur'an and Web Development",
  icons: {
    icon: "/img/logo.jpeg", 
    apple: "/img/logo.jpeg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // This covers attributes on the HTML tag
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col bg-white text-slate-900"
        // ADD THIS LINE: This stops the error caused by browser extensions 
        // injecting 'bis_register' or other attributes into your body tag.
        suppressHydrationWarning={true} 
      >
        <Navbar />
        
        {/* main flex-grow pushes footer to bottom */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}