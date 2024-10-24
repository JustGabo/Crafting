import React, { useLayoutEffect, useRef } from "react";
import s from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Third = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top 30%",
        end: "top top",
        // markers:true
      },
    });

    tl.to(container.current, { width: "0%" }, 0)
      .to(text1.current, { opacity: 0 }, 0)
      .to(
        leftLineContainer.current,
        {
          width: "100%",
        },
        0
      )
      .to(rightLineContainer.current, { width: "100%" }, 0);

    tl.to(container.current, { width: "40%" })
      .to(text2.current, { opacity: 1 })
      .to(
        leftLineContainer.current,
        {
          width: "30%",
        },
        0
      )
      .to(rightLineContainer.current, { width: "30%" }, 0);

    tl.fromTo(
      title.current,
      { opacity: 0, y: "50px" },
      { opacity: 1, y: "0px" }
    ).fromTo(
      parragraphContainer.current,
      { opacity: 0, y: "50px" },
      { opacity: 1, y: "0px" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const textContainer = useRef(null);
  const parragraphContainer = useRef(null);
  const main = useRef(null);
  const title = useRef(null);

  const lineContainers = useRef(null);
  const container = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null)
  const rightLineContainer = useRef(null);
  const leftLineContainer = useRef(null);

  return (
    <main ref={main} className={s.main}>
      <div ref={leftLineContainer} className={s.leftLineContainer}>
        <div className={s.horizontalLine}></div>
        <div className={s.verticalLine}></div>
      </div>

      <div ref={container} className={s.container}>
        {/* <div className={s.door}> */}
        <div className={s.topLeft}></div>
        <div className={s.topRight}></div>
        <div className={s.bottomRight}></div>
        <div className={s.bottomLeft}></div>

        {/* <div className={s.outsideLeftDoor}></div> */}
        {/* <div className={s.outsideRightDoor}></div> */}
        {/* </div> */}

        <div className={s.textContainer}>
          <p ref={text1} className={s.p1}>
            All of this you can make with GSAP.
          </p>
          <p ref={text2} className={s.p2}>
            More than you can imagine.
          </p>
        </div>
      </div>

      <div ref={rightLineContainer} className={s.rightLineContainer}>
        <div className={s.verticalLine}></div>
        <div className={s.horizontalLine}></div>
      </div>

      {/* <div className={s.line} /> */}

      {/* <div ref={textContainer} className={s.textContainer}>
        <h1 ref={title}>Just Perfect</h1>

        <div ref={parragraphContainer} className={s.parragraphContainer}>
          <p className={s.firstP}>Lorem ipsum dolor sit amet.</p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptate, sapiente natus libero facilis pariatur non
            magni a praesentium ratione itaque vero id quasi officiis reiciendis
            porro ipsum iusto molestiae.
          </p>
        </div>
      </div> */}
    </main>
  );
};

export default Third;
