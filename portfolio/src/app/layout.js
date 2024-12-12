import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Magesh's Portfolio",
  description: "handle with care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Magesh's Portfolio</title>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body
        className={`${anton.variable} ${inter.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
