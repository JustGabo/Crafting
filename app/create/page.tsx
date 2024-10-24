"use client";
import Image from "next/image";
import React, { useState } from "react";
import GalleryPage from "./components/gallery";
import Testing from "@/components/ui/testing";
import { AudioLines, Facebook, Twitter, User } from "lucide-react";
import TestingNew from "../guitars/components/TestingNew";

const Create = () => {
  const [isResized, setIsResized] = useState(false);
  const [bgImg, setBgImg] = useState<string | null>(null);

  const event = () => {
    setIsResized(true);
  };

  return (
    <main className={`relative ${!isResized && "overflow-hidden"} h-screen`}>
      <div
        className={` absolute w-[100%] text-black  flex items-center justify-between`}
      >
        <div className="flex-1" />
        <div className="flex  pt-5 pb-10  flex-col gap-5 flex-1 h-full">
          <div className="bg-red-50 p-2  w-[95%] mx-auto relative h-[400px]">
            {/* <Image className="object-cover" src={'/lesCreator.jpg'} alt="Creator" fill/> */}
            <Image
              className="object-cover"
              src={"/paulCreator.jpg"}
              alt="Creator"
              fill
            />
          </div>
          <div className="flex gap-2 w-[95%] mx-auto">
            <h2
              className={`${
                isResized ? "opacity-100 delay-700 translate-y-0" : "opacity-0 "
              } text-5xl  flex flex-col transition-all  duration-300 font-semibold w-[40%]`}
            >
              <span
                className={`${
                  isResized
                    ? "opacity-100 delay-700 translate-y-0"
                    : "opacity-0 translate-y-10 "
                } transition-all span1 duration-300`}
              >
                Les Paul,
              </span>
              <span
                className={`${
                  isResized
                    ? "opacity-100 delay-700 translate-y-0"
                    : "opacity-0 translate-y-10 "
                } transition-all span2 duration-300`}
              >
                the man
              </span>
              <span
                className={`${
                  isResized
                    ? "opacity-100 delay-700 translate-y-0"
                    : "opacity-0 translate-y-10 "
                } transition-all span3 duration-300`}
              >
                behind
              </span>
              <span
                className={`${
                  isResized
                    ? "opacity-100 delay-700 translate-y-0"
                    : "opacity-0 translate-y-10 "
                } transition-all span4 duration-300`}
              >
                the name
              </span>
              {/* Les Paul, the man behind the name */}
            </h2>
            <div className="flex-1">
              <p className="text-sm font-medium   text-balance ">
                Les Paul, the man behind the name, was an innovative musician
                and instrument designer. In the 1940s, he collaborated with the
                Gibson company to develop a solid-body guitar that could compete
                with the popular acoustic guitars of the time. In 1952, Gibson
                introduced the first Les Paul guitar, featuring a solid mahogany
                body and a bolt-on neck.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section
          className={`${
            isResized ? "w-[50%] " : "w-[100%]"
          } flex items-center justify-center  h-[100dvh] sticky top-0 bg-gray-300 duration-1000 transition-width`}
        >
          <div className="absolute  flex-1 flex items-center justify-center w-full h-full bg-gray-300 border">
            {bgImg ? (
              <div className="w-[90%] h-[90%] duration-500 transition-all relative">
                <Image
                  src={bgImg}
                  alt="Guitar"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-[90%] h-[90%] relative transition-all">
                hola
                {/* <Image src={bgImg} alt="Guitar" fill className="object-contain" /> */}
              </div>
            )}
          </div>

          <button
            onClick={() => event()}
            className={`${
              isResized ? "hidden" : "relative"
            } border text-sm  py-5 px-10 rounded-full`}
          >
            Convert
          </button>
        </section>
        <section className="w-[50%] ml-auto h-[300dvh]  py-20 flex flex-col gap-20">
          <article className="w-[95%] mx-auto flex flex-col gap-32">
            <div className="flex flex-col gap-5">
              <p className="uppercase font-semibold  text-sm">Original</p>
              <div className="flex items-center gap-5">
                <div className="flex-1 flex flex-col gap-1 relative ">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 absolute top-3 left-3 z-50" />
                  <div
                    onMouseEnter={() => setBgImg("/LP-Yellow.png")}
                    onMouseLeave={() => setBgImg(null)}
                    className="relative flex items-center justify-center group h-[450px] bg-gray-300 border"
                  >
                    <div className="absolute flex items-center justify-center w-full h-full opacity-0 transition-all duration-300 z-50 group-hover:opacity-100">
                      <button className="text-xs font-medium bg-white border-black border uppercase w-[110px] h-[35px] rounded-3xl">
                        Shop
                      </button>
                    </div>
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={"/LP-Yellow.png"}
                        alt="Guitar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">
                    Les Paul Special - TV Yellow
                  </p>
                  <span className="text-xs font-semibold">$ 1,790.00</span>
                </div>
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div className="w-3 h-3 rounded-full bg-red-900 absolute top-3 left-3 z-50" />
                  <div
                    onMouseEnter={() => setBgImg("/LP-Red.png")}
                    onMouseLeave={() => setBgImg(null)}
                    className="relative flex items-center justify-center h-[450px] bg-gray-300 border"
                  >
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={"/LP-Red.png"}
                        alt="Guitar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">
                    Les Paul Standard 60s Plain Top, Sparkling Burgundy
                  </p>
                  <span className="text-xs font-semibold">$ 2,599.00</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="uppercase font-semibold  text-sm">Modern</p>
              <div className="flex items-center gap-5">
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div className="w-3 h-3 rounded-full bg-gray-700 absolute top-3 left-3 z-50" />
                  <div
                    onMouseEnter={() => setBgImg("/LP-Satin.png")}
                    onMouseLeave={() => setBgImg(null)}
                    className="relative flex items-center justify-center h-[450px] bg-gray-300 border"
                  >
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={"/LP-Satin.png"}
                        alt="Guitar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">
                    Les Paul Modern Lite - Gold Mist Satin
                  </p>
                  <span className="text-xs font-semibold">$ 1,499.00</span>
                </div>
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div className="w-3 h-3 rounded-full bg-white absolute top-3 left-3 z-50" />
                  <div
                    onMouseEnter={() => setBgImg("/LP-White.png")}
                    onMouseLeave={() => setBgImg(null)}
                    className="relative flex items-center justify-center h-[450px] bg-gray-300 border"
                  >
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={"/LP-White.png"}
                        alt="Guitar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">
                    Les Paul Studio, Smokehouse Burst
                  </p>
                  <span className="text-xs font-semibold">$ 1,699.00</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="uppercase font-semibold  text-sm">Exclusive</p>
              <div className="flex items-center gap-5">
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div className="w-3 h-3 rounded-full bg-black absolute top-3 left-3 z-50" />
                  <div
                    onMouseEnter={() => setBgImg("/LP-EXCLUSIVE-EBONY.png")}
                    onMouseLeave={() => setBgImg(null)}
                    className="relative flex items-center justify-center h-[450px] bg-gray-300 border"
                  >
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={"/LP-EXCLUSIVE-EBONY.png"}
                        alt="Guitar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">
                    Les Paul Supreme, Exclusive, Ebony, 3-Pickup
                  </p>
                  <span className="text-xs font-semibold">$ 3,999.00</span>
                </div>
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div className="w-3 h-3 rounded-full bg-blue-900 absolute top-3 left-3 z-50" />
                  <div
                    onMouseEnter={() => setBgImg("/LP-EXCLUSIVE-MIDNIGHT.png")}
                    onMouseLeave={() => setBgImg(null)}
                    className="relative flex items-center justify-center h-[450px] bg-gray-300 border"
                  >
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={"/LP-EXCLUSIVE-MIDNIGHT.png"}
                        alt="Guitar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">
                    Les Paul Modern Studio, Exclusive, Exclusive, Manhattan
                    Midnight Satin
                  </p>
                  <span className="text-xs font-semibold">$ 1,999.00</span>
                </div>
              </div>
            </div>
          </article>
          {/* <div className="w-[50%] h-[300px] rounded-lg font-medium border shadow-lg flex items-center justify-center px-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            tempora repellendus libero fugit error soluta itaque atque magnam
            consequatur labore.
          </div>

          <div className="w-[50%] h-[300px] rounded-lg font-medium border self-end shadow-lg flex items-center justify-center px-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            tempora repellendus libero fugit error soluta itaque atque magnam
            consequatur labore.
          </div>

          <div className="w-[50%] h-[300px] rounded-lg font-medium border shadow-lg flex items-center justify-center px-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            tempora repellendus libero fugit error soluta itaque atque magnam
            consequatur labore.
          </div> */}
        </section>
      </div>

      <div className="h-screen relative w-full flex flex-col px-5 gap-5 justify-center">
        {/* <Image src={'/Slash.jpg'} alt="Slash" fill className="object-cover"/> */}
        <p className="uppercase font-semibold  text-sm">Custom Shop</p>
        <div className="flex gap-5">
          <div className="grid grid-cols-4 items-center gap-5 relative">
            <div className=" flex flex-col gap-1">
              <div className="w-3 h-3 rounded-full bg-black absolute top-3 left-3 z-50" />
              <div
                onMouseEnter={() => setBgImg("/LP-CUSTOM-EBONY2.png")}
                onMouseLeave={() => setBgImg(null)}
                className="relative flex items-center justify-center h-[365px] bg-gray-300 border"
              >
                <div className="w-[80%] h-[80%] relative">
                  <Image
                    src={"/LP-CUSTOM-EBONY2.png"}
                    alt="Guitar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-sm font-semibold line-clamp-1">
                Les Paul Supreme, Exclusive, Ebony, 3-Pickup
              </p>
              <span className="text-xs font-semibold">$ 3,999.00</span>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div
                onMouseEnter={() => setBgImg("/LP-EXCLUSIVE-MIDNIGHT.png")}
                onMouseLeave={() => setBgImg(null)}
                className="relative flex items-center justify-center h-[365px] bg-gray-300 border"
              >
                <div className="w-[80%] h-[80%] relative">
                  <Image
                    src={"/LP-EXCLUSIVE-MIDNIGHT.png"}
                    alt="Guitar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-sm font-semibold line-clamp-1">
                Les Paul Modern Studio, Exclusive, Exclusive, Manhattan Midnight
                Satin
              </p>
              <span className="text-xs font-semibold">$ 1,999.00</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Testing /> */}
      

    </main>
  );
};

export default Create;
