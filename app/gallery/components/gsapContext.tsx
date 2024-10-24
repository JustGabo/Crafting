// providers/GsapProvider.tsx
"use client";

import { createContext, useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapContext = createContext<null | (() => void)>(null);

export const GsapProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <GsapContext.Provider value={null}>{children}</GsapContext.Provider>;
};

export const useGsap = () => {
  return useContext(GsapContext);
};
