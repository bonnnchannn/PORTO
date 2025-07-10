import "./globals.css";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"] 
});

export const metadata = {
  title: "Portofolio | Naufal Firman Dhani",
  description: "Portofolio pribadi saya sebagai seorang web developer yang berpengalaman dalam React.js, Next.js, dan teknologi web modern lainnya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      
      <body className={`${geistSans.variable} antialiased bg-gray-100 text-gray-900`}>
        <Navbar />
        
        {/* Menghapus wrapper main karena sudah ada di page.tsx */}
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
