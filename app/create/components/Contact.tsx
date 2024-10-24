import { AudioLines, Facebook, Github, Linkedin, Mail, Twitter, User } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="lg:h-screen  flex flex-col relative px-7  lg:pt-0 lg:px-10 z-0 py-5 bg-[#030303] text-[#D3D2D9]">
      {/* <nav className="w-full flex  items-center justify-between">
      <div className=" ">
        <AudioLines className="w-7 h-7" />
      </div>
      <ul className="font-medium flex items-center text-gray-500 gap-12 text-xs uppercase">
        <li className="cursor-pointer">Biography</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-3 items-center">
        <User className="w-5 h-5" />
      </div>
    </nav> */}
      <div className="flex flex-col gap-10 h-full">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between h-full">
          <article className=" gap-5 z-50 flex flex-col  justify-center h-full">
            <h2 className="lg:text-7xl text-4xl font-bold">Reach out</h2>
            <p className="lg:w-[40%] w-[80%] text-gray-500 ">
              Now is the opportune moment to connect with me and embark on your
              next digital journey together.
            </p>

            <div className="flex items-center gap-5">
              <button className="button w-[80px]">
                <span className="svgContainer">
                  <Twitter className="w-5 h-5" />
                </span>
                <span className="BG"></span>
              </button>

              <button className="button w-[80px]">
                <span className="svgContainer">
                  <Facebook className="w-5 h-5" />
                </span>
                <span className="BG"></span>
              </button>
            </div>
          </article>
          <article className="flex items-center justify-center z-50 flex-1">
            <div className=" relative p-7 border w-full  border-neutral-800 bg-gradient-to-t from-[#202020]/70 to-black/60 bg-opacity-50 rounded-2xl">
              <div className=" w-full z-50 h-full flex flex-col gap-5 ">
                <div className="flex lg:flex-row flex-col items-center gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#1C1C1C]/80 outline-none text-xs lg:flex-1 w-full h-[50px] text-white placeholder-gray-300 p-3 rounded-xl "
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-[#1C1C1C]/80 outline-none text-xs lg:flex-1 w-full h-[50px] text-white placeholder-gray-300 p-3 rounded-xl "
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  className="bg-[#1C1C1C]/80 resize-none p-3 placeholder-gray-300 text-xs outline-none h-[100px] lg:h-[200px] rounded-xl"
                  placeholder="Message"
                ></textarea>
                <button className="bg-gray-300 text-black text-sm font-semibold h-[50px] rounded-xl">
                  Submit
                </button>
              </div>
              {/* <div className="absolute bg-gradient-to-t from-gray-500 to-black opacity-50 w-full h-full top-0 z-0" /> */}
            </div>
          </article>
        </div>

        <article className=" w-full grid lg:grid-cols-3 grid-cols-1 gap-5">

        <div className="flex items-center  gap-5  p-5 opacity-80 rounded-xl border border-neutral-700 bg-gradient-to-t from-[#383838]/30 to-black/20 ">
            <button className="button w-[80px]">
              <span className="svgContainer ">
                <Mail className="w-5 h-5" />
              </span>
              <span className="BG"></span>
            </button>
            <div className="flex flex-col gap-1">
            <h3 className="">Email</h3>
            <p className="text-xs">ovallegabriel123@gmail.com</p>
            </div>
          </div>

          <div className="flex  gap-5  p-5 opacity-80 rounded-xl border border-neutral-700 bg-gradient-to-t from-[#383838]/30 to-black/20 ">
            <button className="button w-[80px]">
              <span className="svgContainer ">
                <Linkedin className="w-5 h-5" />
              </span>
              <span className="BG"></span>
            </button>
          <div className="flex flex-col gap-1">
          <h3 className="">Linkedin</h3>
            <p className="text-xs">gabriel-sorianoo</p>
          </div>
          </div>

          <div className="flex  gap-5  p-5 opacity-80 rounded-xl border border-neutral-700 bg-gradient-to-t from-[#383838]/30 to-black/20 ">
            <button className="button w-[80px]">
              <span className="svgContainer ">
                <Github className="w-5 h-5" />
              </span>
              <span className="BG"></span>
            </button>
            <div className="flex flex-col gap-1">
            <h3 className="">Github</h3>
            <p className="text-xs">JustGabo</p>
            </div>
          </div>

          
        </article>
      </div>

      <h2 className="lg:text-[12rem] text-[4rem] z-0 font-bold gradient absolute lg:w-full W-[95%] mx-auto  text-center left-0 right-0 lg:top-[5%] top-[25%] ">
        Contact Us
      </h2>
    </section>
  );
};

export default Contact;
