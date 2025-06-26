import "./globals.css";
import { Geist } from "next/font/google"; // Anda bisa menggunakan satu font jika Geist Mono tidak dipakai secara luas
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"] 
});

export const metadata = {
  title: "Portofolio | Naufal Firman Dhani", // Ganti dengan nama Anda
  description: "Portofolio pribadi saya sebagai seorang web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* PERBAIKAN: Menambahkan `pt-16` ke body.
        Ini akan mendorong semua konten ke bawah sejauh tinggi Navbar (h-16),
        sehingga konten tidak tertutup oleh Navbar yang 'fixed'.
      */}
      <body className={`pt-20 ${geistSans.variable} antialiased bg-gray-100 text-gray-900`}>
        <Navbar />
        
        {/* REKOMENDASI: Bungkus {children} dengan tag <main> */}
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}