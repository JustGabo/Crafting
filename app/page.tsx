"use client";
import Main from "@/components/landing/Main";
import Testing from "@/components/ui/testing";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const squares = [
  {
    content: 1,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 1,
  },
  {
    content: 2,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 1,
  },
  {
    content: 3,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 1,
  },
  {
    content: 4,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 1,
  },
  {
    content: 5,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 2,
  },
  {
    content: 6,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 2,
  },
  {
    content: 7,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 2,
  },
  {
    content: 8,
    labels: ["amazing", "beatiful", "seamlessly"],
    row: 2,
  },
  // {
  //   content: 9,
  //   labels: ["amazing", "beatiful", "seamlessly"]
  // },{
  //   content: 10,
  //   labels: ["amazing", "beatiful", "seamlessly"]
  // },
  // {
  //   content: 11,
  //   labels: ["amazing", "beatiful", "seamlessly"]
  // },{
  //   content: 12,
  //   labels: ["amazing", "beatiful", "seamlessly"]
  // }
];

const Page = () => {
  //   useEffect( () => {
  //     const lenis = new Lenis()

  //     function raf(time) {
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)
  //     }

  //     requestAnimationFrame(raf)
  // }, [])

  const [change, setChange] = useState(false);
  const image = "/lata.png";
  // const image2 = "/macuin.avif";

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const container2 = useRef(null);
  const text1 = useRef(null);
  const word1 = "Never give up";
  const characters = useRef<(HTMLSpanElement | null)[]>([]);
  const lettersRef = useRef([]);
  const images = ["/alexturner2.jpg", "/jamie2.jpg", "/alexturner3.jpg"];
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image1Top = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const image2Top = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: superContainer.current,
  //         start: "top -5%",
  //         end: "bottom top",
  //         // scrub: 1,
  //       },
  //     });

  //     tl.to(otherContainer.current, { scale: 1, borderRadius: "0px" }, 0);

  //     characters.current.forEach((char) => {
  //       const top = Math.floor(Math.random() * -75) - 25;

  //       tl.to(char, { top }, 0);
  //     });
  //     tl.to(image1.current, { top: -30 }, 0);

  //     tl.to(image2.current, { top: -100 }, 0);

  //     const tl2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: endContainer.current,
  //         start: "center top",
  //         end: "80% top",
  //         scrub: 1,
  //       },
  //     });

  //     tl2.to(otherContainer.current, { scale: 0.9, borderRadius: "32px" }, 0);
  //   });

  //   return () => context.revert();
  // }, []);

  // const randomOffsets = word1.split("").map(() => Math.floor(Math.random() * -75) - 25);
  // const transformY = randomOffsets.map((al) => useTransform(scrollYProgress, [0, 1], [0, al]));

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const variant = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const animatedLetters = {
    initial: {
      y: 400,
    },

    animate: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  

  return (
    <main className="mb-[5%]">
      {/* <Main />
      <div className="h-screen  relative w-full flex items-center justify-center ">
        <div
          style={{
            display: "grid",
            gridTemplateRows: `${change ? "35%" : "1fr"} 1fr`,
          }}
          className={`w-3/4 grid p-2 grid-cols-[repeat(4,25%)] gap-2 flex-nowrap rounded-lg h-2/4`}
        >
          {squares.map((square) => {
            return (
              <div
                onMouseEnter={() => setChange(true)}
                onMouseLeave={() => setChange(false)}
                className="border flex items-center cursor-pointer transition-all duration-300  rounded-lg justify-center hover:w-[100%]"
                key={square.content}
              >
                {square.content}
              </div>
            );
          })}
        </div>
      </div> */}

     

      {/* <div className="container w-full">
        <p className="text">Lorem, ipsum dolor.</p>
        <p className="text">Lorem, ipsum alkd.</p>
        <p className="text">ASD ipsum dolor sit.</p>
        <p className="text">Lorem dolor sit amet.</p>
        <p className="text">sit amet consectetur.</p>
      </div> */}

      {/* <div ref={container} className="h-screen p-10 flex flex-col">
        <div className="flex flex-col gap-1">
          <motion.p style={{ y: sm }} className="font-bold text-4xl">
            Lorem, ipsum.
          </motion.p>
          <motion.p variants={variant} animate="animate" initial="initial"  className="text-xl font-semibold">
            {new Array(word1).map((word, i) => {
              // const al = Math.floor(Math.random() * -75) - 25;
              //@ts-ignore
              // const sm = useTransform(scrollYProgress, [0, 1], [0, al]);
              return (
                <motion.span variants={animatedLetters} key={i}>
                  {word}
                </motion.span>
              );
            })}
          </motion.p>
        </div>
        <div></div>
      </div>

      <div ref={container2} className="  p-10 gap-20 flex flex-col">
        <div className="flex flex-col gap-1">
          <p ref={text1} className="font-bold text-4xl">
            Lorem, ipsum.
          </p>
          <p className="text-xl font-semibold">
            <p>
              {word1.split("").map((letter, i) => {
                return (
                  <span
                    key={`l_${i}`}
                    ref={(el) => (lettersRef.current[i] = el)}
                  >
                    {letter}
                  </span>
                );
              })}
            </p>
          </p>
        </div>
        <div className=" w-full h-[80dvh] full relative items-center justify-center  flex">
          <div className="h-[60dvh] w-[50dvh] z-10 absolute imageContainer">
            <Image src={images[0]} alt="image" fill className="object-cover" />
          </div>
          <div
            ref={image1}
            className="h-[40dvh] w-[30dvh] left-[55dvw] top-[15dvh] z-20 absolute imageContainer"
          >
            <Image src={images[1]} alt="image" fill className="object-cover" />
          </div>
          <div className="h-[25dvh] w-[20dvh] left-[27.5dvw] top-[40dvh] z-30 absolute imageContainer">
            <Image
              ref={image2}
              src={images[2]}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div> */}

      <div className="h-screen"></div>
    </main>
  );
};

export default Page;
