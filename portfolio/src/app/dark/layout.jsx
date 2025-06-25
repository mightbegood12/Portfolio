import { Anton, Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";

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
    <div
      className={`${anton.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <header className="sticky top-0 mx-auto z-[99]">
        <Navbar />
      </header>
      {children}
    </div>
  );
}
