import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const info = [
  {
    title: "Scroll Plugins",
    body: "Debounced events, pre-calculated intersection points, synced updates and throttled resize recalculations.",
  },
  {
    title: "ScrollTrigger",
    body: "Tell stunning and interactive stories. Give any tween or timeline a ScrollTrigger with just one line of code or customise as needed.",
  },
  {
    title: "Pin, Scrub, Debug",
    body: "Pin sections in place, scrub through animations with the scrollbar, and debug easily by enabling visual markers.",
  },
];

const Second = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      firstTextContainer.current,
      { opacity: 0, y: "50px" },
      {
        opacity: 1,
        y: "0px",
        scrollTrigger: {
          trigger: firstTextContainer.current,
          start: "top 90%", // Comienza cuando el contenedor entra al 90% de la vista
          end: "top 50%", // Termina cuando llega al 50%
        },
      }
    );

    gsap.fromTo(
      secondTextContainer.current,
      { opacity: 0, y: "50px" },
      {
        opacity: 1,
        y: "0px",
        scrollTrigger: {
          trigger: secondTextContainer.current,
          start: "top 90%",
          end: "top 50%",
        },
      }
    );

    gsap.fromTo(
      thirdTextContainer.current,
      { opacity: 0, y: "50px" },
      {
        opacity: 1,
        y: "0px",
        scrollTrigger: {
          trigger: thirdTextContainer.current,
          start: "top 90%",
          end: "top 50%",
        },
      }
    );

    // Animaciones para las imágenes
    gsap.fromTo(
      firstImageContainer.current,
      { opacity: 0, y: "50px" },
      {
        opacity: 1,
        y: "0px",
        scrollTrigger: {
          trigger: firstImageContainer.current,
          start: "top 90%",
          end: "top 50%",
        },
      }
    );

    gsap.fromTo(
      secondImageContainer.current,
      { opacity: 0, y: "50px" },
      {
        opacity: 1,
        y: "0px",
        scrollTrigger: {
          trigger: secondImageContainer.current,
          start: "top 90%",
          end: "top 50%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const infoContainer = useRef(null);
  const mainContainer = useRef(null);

  const firstTextContainer = useRef(null);
  const secondTextContainer = useRef(null);
  const thirdTextContainer = useRef(null);

  const imagesContainer = useRef(null);
  const firstImageContainer = useRef(null);
  const secondImageContainer = useRef(null);

  return (
    <main ref={mainContainer} className={styles.mainContainer}>
      <section ref={infoContainer} className={styles.infoContainer}>
        <div ref={firstTextContainer} className={styles.infoRow}>
          <p className={styles.title}>{info[0].title}</p>
          <p className={styles.body}>{info[0].body}</p>
        </div>

        <div ref={secondTextContainer} className={styles.infoRow}>
          <p className={styles.title}>{info[1].title}</p>
          <p className={styles.body}>{info[1].body}</p>
        </div>

        <div ref={thirdTextContainer} className={styles.infoRow}>
          <p className={styles.title}>{info[2].title}</p>
          <p className={styles.body}>{info[2].body}</p>
        </div>
      </section>

      <section className={styles.secondContainer}>
        <div ref={imagesContainer} className={styles.imagesContainer}>
          <div className="flex flex-col gap-[10px]">
            <div
              ref={firstImageContainer}
              className={styles.firstImageContainer}
            >
              <Image
                className={styles.firstImage}
                src={"/gallery/faro.jfif"}
                alt="firstImage"
                fill
              />
            </div>

            <p className="text-xs uppercase font-normal">
              Lorem ipsum dolor sit.
            </p>
          </div>

          <div
            ref={secondImageContainer}
            className={styles.secondImageContainer}
          >
            <div className="w-[50%] h-full flex flex-col gap-[10px]">
              <div className="relative w-full h-[90%]">
                <Image
                  className={styles.secondImage}
                  src={"/gallery/loro.jpg"}
                  alt="secondImage"
                  fill
                />
              </div>
              <p className="text-xs uppercase font-normal">
                Cum voluptas at cumque modi itaque porro.
              </p>
            </div>

            <div className="relative w-[50%] h-full flex flex-col gap-[10px]">
              <div className="w-full relative h-[90%]">
                <Image
                  className={styles.thirdImage}
                  src={"/gallery/restaurant.avif"}
                  alt="thirdImage"
                  fill
                />
              </div>
              <p className="text-xs uppercase font-normal">
                Consectetur adipisicing elit. Quaerat, est!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Second;
