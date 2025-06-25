import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { usePageTransition } from "@/app/context/TransitionContext";
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const TransitionLink = ({ href, delay, children, ...props }) => {
  const router = useRouter();
  const { setIsPageTransitioning } = usePageTransition();

  const handleTransitions = async (e) => {
    e.preventDefault();
    // const body = document.querySelector("body");
    // body?.classList.add("page-transition");
    console.log("starting Transition");
    setIsPageTransitioning(true);
    await sleep(delay);
    router.push(href);
    await sleep(delay);
    setIsPageTransitioning(false);
    console.log("Ending Transition");
    // body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransitions} href={href} {...props}>
      {children}
    </Link>
  );
};
