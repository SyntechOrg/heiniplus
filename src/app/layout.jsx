import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import ScrollToTopButton from "../components/general/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Heini Plus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
