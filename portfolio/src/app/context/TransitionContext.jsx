"use client";
import { createContext, useContext, useState } from "react";

const TransitionContext = createContext({
  isPageTransitioning: false,
  setIsPageTransitioning: () => {},
});

export const TransitionProvider = ({ children }) => {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [direction, setDirection] = useState("");

  return (
    <TransitionContext.Provider
      value={{
        isPageTransitioning,
        direction,
        setIsPageTransitioning,
        setDirection,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(TransitionContext);
