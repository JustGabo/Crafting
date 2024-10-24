"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import s from "./styles.module.css";

// Asegúrate de registrar el plugin fuera de los hooks.
// gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const superContainer = useRef(null);
  const otherContainer = useRef(null);
  const text5 = useRef(null);
  const textContainer = useRef(null);
  const endContainer = useRef(null);
  const topTextContainer = useRef(null);
  const shape = useRef(null);
  const handsContainer = useRef(null);
  const refContainer = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refContainer.current,
        start: "top 15%",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(
      otherContainer.current,
      { scale: 1, borderRadius: "0px", width: "100%", margin: "0px" },
      0
    ).to(shape.current, { opacity: 0 }, 0);
    // .to(handsContainer.current, { bottom: "0px" });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: endContainer.current,
        start: "center 40%",
        end: "80% top",
        scrub: 1,
      },
    });

    tl2.to(otherContainer.current, { scale: 0.9, borderRadius: "32px" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const bgImage = "/gallery/Desktop.png";

  // bg-[#F4F4ED]

  // bg-[#EAEAEA]
  return (
    <div ref={superContainer} className={s.superContainer}>
      <div ref={refContainer} className={s.refContainer}></div>

      <div
        ref={otherContainer}
        className={s.otherContainer}
        style={{
          backgroundImage: `url(${bgImage})`,
          WebkitBoxShadow: "0px 17px 55px -15px rgba(0,0,0,0.30)",
          MozBoxShadow: "0px 17px 55px -15px rgba(0,0,0,0.30)",
          boxShadow: "0px 17px 55px -15px rgba(0,0,0,0.30)",
        }}
      >


        <div ref={topTextContainer} className={s.topTextContainer}>
          <p className="">Total care.</p>
          <p className="">Totally different.</p>
        </div>

        <div className={s.shapeImageContainer}>
        {/* <div className="absolute w-full h-full bg-red-500 flex items-center justify-center">
          <div className="relative w-[400px] h-[862px] bg-blue-50">

          </div>
        </div> */}

          <div ref={shape} className={s.shape}></div>
          <div ref={handsContainer} className={s.handContainer}>
            <Image
              src={"/gallery/defPhone.png"}
              className={s.image}
              fill
              alt="TabletImage"
            />
          </div>
        </div>

        <div ref={textContainer} className={s.textContainer}>
          <h1 ref={text5} className={s.text5}>
            It is all
          </h1>
        </div>

        <div className={s.middleTextContainer}>
          <h1 className={s.inTheText}>In the</h1>
        </div>
        <div ref={endContainer} className={s.endContainer}>
          <h1 className={s.scrollText}>Scroll</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
