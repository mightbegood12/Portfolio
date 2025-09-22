import { Mohave, Geist } from "next/font/google";
import { AuroraBackground } from "../components/AuroraBackground";

const mohave = Mohave({
  variable: "--font-mohave",
  subsets: ["latin"],
  weight: ["400"],
});

const geistLight = Geist({
  variable: "--font-geistL",
  subsets: ["latin"],
  weight: ["300"],
});

const geistBold = Geist({
  variable: "--font-geistB",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Magesh's Portfolio",
  description: "handle with care",
};

export default function RootLayout({ children }) {
  return (
    <AuroraBackground>
      <div
        className={`${mohave.variable} ${geistBold.variable} ${geistLight.variable} z-10 antialiased scroll-smooth`}
      >
        {children}
      </div>
    </AuroraBackground>
  );
}
