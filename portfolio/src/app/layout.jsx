import { PageTransitionOverlay } from "./components/TransitionOverlay";
import { TransitionProvider } from "./context/TransitionContext";
import "@/styles/globals.css";

export const metadata = {
  title: "Magesh's Portfolio",
  description: "handle with care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body>
        <TransitionProvider>
          <PageTransitionOverlay />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
