"use client";
import React, { useEffect } from "react";
import Intro from "./components/intro";
import Second from "./components/second";
import Lenis from "lenis";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Third from "./components/third";
import Fourth from "./components/fourth";
import Fifth from "./components/fifth";
import Sixth from "./components/sixth";
import Septh from "./components/septh";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis();

  //   // // Use requestAnimationFrame to continuously update the scroll
  //   // function raf(time: number) {
  //   //   lenis.raf(time);
  //   //   requestAnimationFrame(raf);
  //   // }

  //   // requestAnimationFrame(raf);

  //   lenis.on("scroll", ScrollTrigger.update);

  //   // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  //   // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  //   });

  //   // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  //   gsap.ticker.lagSmoothing(0);
  // }, []);



  
  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  return (
    <div className="bg-[#FEFEFE] relative">
      <div className="w-full lg:h-[15vh] h-[10vh] z-50 flex px-10 items-center fixed top-0">
        <h2 className={styles.title}>GSAP</h2>
      </div>
      <div className="z-0 lg:pt-[15vh] pt-[10vh]">
        <Intro />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth/>
        <Septh/>
      </div>
    </div>
  );
};

export default Page;
