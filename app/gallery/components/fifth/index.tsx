import React, { useLayoutEffect, useRef } from "react";
import s from "./styles.module.css";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { i } from "framer-motion/client";

const Fifth = () => {
  //@ts-ignore
  const lerp = (start, end, amount) => start * (1 - amount) + end * amount;
  const easing = 0.08;
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const main = useRef(null);
  const centerContainer = useRef(null);
  const speed = 0.01;
  let xForce = 0;
  let yForce = 0;
  //@ts-ignore
  let requestAnimationFrameId = null;

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top",
        end: "center center",
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      plane1.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 }
    )

      .fromTo(
        plane2.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 }
      )
      .fromTo(
        plane3.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 }
      )
      .fromTo(
        centerContainer.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 },
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const manageMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    //@ts-ignore
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${xForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${xForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce > 0 || yForce > 0) {
      requestAnimationFrame(animate);
    } else {
      //@ts-ignore
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={s.main}
      ref={main}
    >
      <section className={s.container}>
        <div ref={plane1} className={s.plane}>
          <Image
            src={"/gallery/rain.jpg"}
            alt="image"
            width={120}
            height={80}
            className={s.image}
          />
          <Image
            src={"/gallery/cherries.jpg"}
            alt="image"
            width={175}
            height={100}
            className={s.image}
          />
          <Image
            src={"/gallery/chess.jpg"}
            alt="image"
            width={200}
            height={100}
            className={s.image}
          />
        </div>
        <div ref={plane2} className={s.plane}>
          <Image
            src={"/gallery/bustop.jpg"}
            alt="image"
            width={250}
            height={100}
            className={s.image}
          />
          <Image
            src={"/gallery/work.jpg"}
            alt="image"
            width={200}
            height={100}
            className={s.image}
          />
          <Image
            src={"/gallery/chart.jpg"}
            alt="image"
            width={140}
            height={100}
            className={s.image}
          />
        </div>
        <div ref={plane3} className={s.plane}>
          <Image
            src={"/gallery/cat.webp"}
            alt="image"
            width={100}
            height={100}
            className={s.image}
          />
          <Image
            src={"/gallery/apartamento.webp"}
            alt="image"
            width={230}
            height={100}
            className={s.image}
          />
          {/* <Image src={"/gallery/doc.jpg"} alt="image" width={100} height={100} className={s.image} /> */}
        </div>
        <div ref={centerContainer} className={s.title}>
          <h1 className={s.h1}>Floating Images Gallery</h1>
          <p className={s.p}>Try moving the mouse around</p>
        </div>
      </section>
    </main>
  );
};

export default Fifth;
