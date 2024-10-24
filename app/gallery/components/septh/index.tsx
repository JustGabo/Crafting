import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const info = [
  {
    question: "What's a Timeline?",
    answer:
      "A Timeline is a container for Tweens. It's the ultimate sequencing tool that lets you position animations in time wherever you want and then control the whole sequence easily with methods like pause(), play(), progress(), reverse(), timeScale(), etc.",
  },
  {
    question: "What's a Tween?",
    answer:
      "A Tween is what does all the animation work - think of it like a high-performance property setter. ",
  },
  {
    question: "What's ScrollTrigger?",
    answer:
      "ScrollTrigger enables anyone to create jaw-dropping scroll-based animations with minimal code. Infinitely flexible. Scrub, pin, snap, or just trigger anything scroll-related, even if it has nothing to do with animation.",
  },
  {
    question: "How to use the Ease Visualizer?",
    answer:
      "To use the ease visualizer, simply click on the ease name that you'd like to use. You can also click on the underlined text to change the values and type of ease.",
  },
];

const Septh = () => {
  return (
    <div
      className="relative  h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <div className="h-[100vh] sticky top-[calc(100vh-100vh)]">
          <Content />
        </div>
      </div>
    </div>
  );
};

function Content() {
  return (
    <div className=" p-10  w-full flex flex-col h-full justify-between">
      {/* <div className="h-[40vh]  flex items-center"> */}
      <Section1 />
      {/* </div> */}
      <Section2 />
      {/* <div className="flex flex-col gap-3  ">
        {info.map((info, key) => {
          return (
            <div key={key}>
            <Question answer={info.answer} key={key} question={info.question} />
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

const Section1 = () => {
  return (
   <div className="h-[50%] flex items-center">
    <Nav/>
   </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[9vw] leading-[0.9] font-medium">GSAP SCROLLTRIGGER</h1>
      <p>©copyright</p>
    </div>
  );
};

const Question = ({
  key,
  question,
  answer,
}: {
  key: number;
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = !isOpen ? <Plus /> : <Minus />;

  return (
    <div className="flex h-[100px] items-center gap-5 bg-red-500 " key={key}>
      <button onClick={() => setIsOpen(!isOpen)}>{Icon}</button>
      <p>{question}</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col text-[#252525] gap-2">
        <h3 className="mb-2 uppercase text-[#00000080]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col text-[#252525] gap-2">
        <h3 className="mb-2 uppercase text-[#00000080]">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};

export default Septh;


// <div className="w-[50%]">
// <h2 style={{ lineHeight: "1em" }} className="text-[4em] font-medium">
//   Frequently asked questions
// </h2>
// </div>
