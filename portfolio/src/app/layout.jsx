import { Anton, Geist, Inter, Mohave } from "next/font/google";
import { PageTransitionOverlay } from "./components/TransitionOverlay";
import { TransitionProvider } from "./context/TransitionContext";

import "@/styles/globals.css";

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
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${inter.variable} ${mohave.variable} ${geistBold.variable} ${geistLight.variable} antialiased`}
      >
        <TransitionProvider>
          <PageTransitionOverlay />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
