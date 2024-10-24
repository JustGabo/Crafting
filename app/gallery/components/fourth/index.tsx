import React, { useEffect, useLayoutEffect, useRef } from "react";
import s from "./styles.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Images = {
  url: string | StaticImport;
  id: string;
  ref: string;
};

const Fourth = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true
      },
    });

    tl.to("#one", { scale: 4 }, 0);
    tl.to("#two", { scale: 5 }, 0);
    tl.to("#three", { scale: 6 }, 0);
    tl.to("#four", { scale: 5 }, 0);
    tl.to("#five", { scale: 6 }, 0);
    tl.to("#six", { scale: 7 }, 0);
    tl.to("#seven", { scale: 8 }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const one = "/gallery/DesktopBlack.png";
  const two = "/gallery/daft.webp";
  const three = "/gallery/astronauta.webp";
  const four = "/gallery/leaf.jpg";
  const five = "/gallery/plane.jpg";
  const six = "/gallery/11.webp";
  const seven = "/gallery/aurora.avif";

  const images = [
    {
      url: one,
      id: "one",
      ref: "firstImage",
    },
    {
      url: two,
      id: "two",
      ref: "secondImage",
    },
    {
      url: three,
      id: "three",
      ref: "thirdImage",
    },
    {
      url: four,
      id: "four",
      ref: "fourthImage",
    },
    {
      url: five,
      id: "five",
      ref: "fifthImage",
    },
    {
      url: six,
      id: "six",
      ref: "sixImage",
    },
    {
      url: seven,
      id: "seven",
      ref: "septhImage",
    },
  ];

  const main = useRef(null);
  const imageContainer = useRef(null);

  return (
    <main ref={main} className={s.main}>
      <div className={s.sticky}>
        {images.map((image: Images, key) => {
          return (
            <div key={key} id={image.id} className={s.el}>
              <div className={s.imageContainer}>
                <Image className={s.image} src={image.url} alt="image" fill />
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className={s.secondSection}></div> */}
    </main>
  );
};

export default Fourth;

// ref={image.ref}
