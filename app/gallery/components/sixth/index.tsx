"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import s from "./styles.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";

const Sixth = () => {
  const text =
    "Need more low-level control? Easily detect scroll and other events without wrestling with implementation details.";

  const text2 = "HOW IT WORKS?";
  const element = useRef(null);
  const main = useRef(null);
  const words = text.split(" ");
  const splitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const text2SplitWords = useRef<(HTMLSpanElement | null)[]>([]);

  const verticalLine = useRef(null);
  const topLeftLine = useRef(null);
  const topRightLine = useRef(null);
  const bottomLeftLine = useRef(null);
  const bottomRightLine = useRef(null);
  const link = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
        // markers: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(topLeftLine.current, { transform: "translateX(0%)" }, 0).to(
      topRightLine.current,
      {
        transform: "translateX(0%)",
      },
      0
    );

    tl2.to(bottomLeftLine.current, { transform: "translateX(0%)" }, 0).to(
      bottomRightLine.current,
      {
        transform: "translateX(0%)",
      },
      0
    );

    gsap.to(link.current, {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: main.current,
        start: "top 5%",
        end: "top top",
        scrub: true,
        // markers: true
      },
    });

    gsap.to(verticalLine.current, {
      transform: "translateY(0%)",
      scrollTrigger: {
        trigger: main.current,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.to(text2SplitWords.current, {
      scrollTrigger: {
        trigger: main.current,
        scrub: true,
        start: `top 30%`,
        end: `+=${window.innerHeight / 2} 70%`,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });

    gsap.to(splitRef.current, {
      scrollTrigger: {
        trigger: main.current,
        scrub: true,
        start: `top 25%`,
        end: `+=${window.innerHeight / 2} center`,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={main} className={s.main}>
      <section className={s.container}>
        <div className={s.topLinesContainer}>
          <div className={s.topHortizontalLinesContainer}>
            <div className={s.topLeftLinesContainer}>
              <div className={s.topLeftShadowLine}></div>
              <div ref={topLeftLine} className={s.topLeftLine}></div>
            </div>
            <div className={s.topRightLinesContainer}>
              <div className={s.topRightShadowLine}></div>
              <div ref={topRightLine} className={s.topRightLine}></div>
            </div>
          </div>

          <div className={s.verticalTopLinesContainer}>
            <div className={s.verticalShadowLine} />
            <div ref={verticalLine} className={s.verticalLine} />
          </div>

          <div className={s.bottomHortizontalLinesContainer}>
            <div className={s.leftLinesContainer}>
              <div className={s.leftShadowLine}></div>
              <div ref={bottomLeftLine} className={s.leftLine}></div>
            </div>
            <div className={s.rightLinesContainer}>
              <div className={s.rightShadowLine}></div>
              <div ref={bottomRightLine} className={s.rightLine}></div>
            </div>
          </div>
        </div>

        <div className={s.central}>

          <p className={s.firstText}>
            {text2.split(" ").map((word: string, index) => {
              return (
                <span key={index} className={s.wordContainer}>
                  <span className={s.shadow}>{word}</span>
                  <span
                    className={s.text2Word}
                    ref={(el) => {
                      text2SplitWords.current[index] = el;
                    }}
                  >
                    {word + " "}
                  </span>
                </span>
              );
            })}
          </p>

          <p className={s.parragraph} ref={element}>
            {words.map((word, index) => {
              return (
                <span key={index} className={s.wordContainer}>
                  <span className={s.shadow}>{word}</span>
                  <span
                    className={s.word}
                    ref={(el) => {
                      splitRef.current[index] = el;
                    }}
                  >
                    {word + " "}
                  </span>
                </span>
              );
            })}
          </p>
          {/* <button className={s.button}> */}
          <Link
            ref={link}
            className={s.link}
            href={"/https://gsap.com/docs/v3/Plugins/Observer"}
            target="_blank"
          >
            Docs
          </Link>
          {/* </button> */}
        </div>
        <div className={s.bottomLinesContainer}>
          <div className={s.bottomVerticalLine}></div>
        </div>
      </section>
    </main>
  );
};

export default Sixth;
