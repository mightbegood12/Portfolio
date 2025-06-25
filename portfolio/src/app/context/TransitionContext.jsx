"use client";
import { createContext, useContext, useState } from "react";

const TransitionContext = createContext({
  isPageTransitioning: false,
  setIsPageTransitioning: () => {},
});

export const TransitionProvider = ({ children }) => {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  return (
    <TransitionContext.Provider
      value={{ isPageTransitioning, setIsPageTransitioning }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(TransitionContext);
