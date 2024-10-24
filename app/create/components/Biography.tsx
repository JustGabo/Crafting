import { AudioLines, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Biography = () => {
  return (
    <section className="h-screen  flex flex-col relative pb-5 lg:pb-0 px-7 lg:px-10 z-0 bg-black text-[#D3D2D9]">
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

        <section className="flex justify-between  lg:flex-row  flex-col-reverse  h-full">
          <article className="flex-1  flex flex-col z-50 gap-5  justify-center">
            <h1 className="lg:text-7xl text-4xl lg:w-[80%] w-[90%] font-bold">
              The man behind the name
            </h1>
            <p className="font-medium lg:w-[80%] line-clamp-5 lg:line-clamp-none text-sm w-full text-balance text-gray-500 leading-6">
              Les Paul, the man behind the name, was an innovative musician and
              instrument designer. In the 1940s, he collaborated with the Gibson
              company to develop a solid-body guitar that could compete with the
              popular acoustic guitars of the time. In 1952, Gibson introduced
              the first Les Paul guitar, featuring a solid mahogany body and a
              bolt-on neck.
            </p>
            <button className=" w-[150px] Btn h-[50px] text-sm font-semibold border rounded-full border-white">
            </button>
          </article>
          <article className="flex-1 flex z-50 opacity-75 items-center justify-center">
            <div className="lg:w-[50%] w-[70%] h-[90%] border overflow-hidden rounded-t-full relative bg-red-50">
              <Image
                src={"/lesCreator.jpg"}
                className="object-cover"
                alt="Creator"
                fill
              />
            </div>
          </article>
          <h2 className="lg:text-[12rem] text-[4em] z-0 font-bold gradient absolute w-full  text-center left-0 right-0 top-[5%] ">
            Biography
          </h2>
        </section>

        {/* <section className="flex flex-col justify-between  items-center gap-3 h-full">
          
          <div className="flex flex-col  justify-center  gap-3 flex-1">
          <article className="flex ">
            <div className="flex-1   h-[200px]" />
            <div className="flex-1 py-5  h-[200px] text-4xl font-black  relative">
              <span className="absolute top-10 right-0">57</span>
            </div>
            <div className="flex-1 py-10  h-[200px] text-sm px-3  font-medium">
              <p className="w-[80%] text-balance">
                Se introdujeron las pastillas humbucker, diseñadas por Seth
                Lover, que mejoraron el sonido y redujeron el zumbido.
              </p>
            </div>
            <div className="flex-1   h-[200px] text-4xl font-black  relative">
              <span className="absolute  top-10 right-0">61</span>
            </div>
            <div className="flex-1 py-10  h-[200px] text-sm px-3  font-medium">
              <p className="w-[80%] text-balance">
                Las ventas disminuyeron y Gibson cambió el diseño a lo que hoy
                conocemos como la SG, eliminando temporalmente la Les Paul
                original del mercado.
              </p>
            </div>
          </article>
          <article className="h-1 flex items-center justify-evenly rounded-md w-full bg-black">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </article>
          <article className="flex">
            <div className="flex-1   h-[200px] text-4xl font-black  relative">
              <span className="absolute top-3 right-0">52</span>
            </div>
            <div className="flex-1 py-3  h-[200px] text-sm px-3  font-medium">
              <p className="w-[80%] text-balance">
                Se lanzó la primera Gibson Les Paul, diseñada en colaboración
                con el propio Les Paul.
              </p>
            </div>
            <div className="flex-1   h-[200px] text-4xl font-black  relative">
              <span className="absolute top-3 right-0">60</span>
            </div>
            <div className="flex-1 py-3  h-[200px] text-sm px-3  font-medium">
              <p className="w-[80%] text-balance">
                Se produjo el modelo Les Paul Standard, conocido por su perfil
                delgado del mástil.
              </p>
            </div>
            <div className="flex-1  h-[200px] text-sm px-3"></div>
          </article>
          </div>
          <div className=" w-full h-[5%]  flex items-center justify-center text-center">
          <p className="text-sm font-semibold">History and Evolution</p>
          </div>
        </section> */}

        {/* <div className="flex">
        <article className="flex-1 p-16 flex flex-col gap-10">
          <h2 className="text-7xl font-bold w-[80%]">
            Design and Construction.
          </h2>

          <div className="flex flex-col text-sm  font-medium gap-2 w-[60%] ml-auto">
            <p className="">
              Les Paul guitars are characterized by their solid body, which is
              typically made of mahogany with a maple top. This design
              contributes to their warm and sustained sound. The neck, also made
              of mahogany, is usually glued to the body, enhancing vibration
              transfer and sustain. The fingerboard is typically made of
              rosewood or ebony.
            </p>
            <p>
              Over the years, Gibson has introduced various innovations in the
              Les Paul models, including versions with chambered bodies to
              reduce weight and improve resonance, as well as versions with
              slimmer necks for greater comfort. Special models like the Les
              Paul Custom, Les Paul Junior, and Les Paul Studio offer variations
              in materials and specifications to meet different needs and budget
            </p>
          </div>
        </article>
        <article className="flex-1 flex items-center justify-center">
          <div className="w-[80%] h-[80%] relative"> 
            <Image src={'/LP-Yellow.png'} alt="Guitar" className="object-contain" fill/>
          </div>
        </article>
        </div> */}
      </section>
  )
}

export default Biography