import React from "react";

const GalleryPage = () => {
  return (
    <main className="flex flex-col gap-20">
      <section className=" w-[70%] mx-auto items-center flex mt-20 mb-20">
        <article className="h-[150dvh] flex-1 bg-red-500 sticky top-0"></article>
        <article className="h-[50dvh] flex-1 flex items-center justify-center  bg-blue-500">
          <p className="w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptates aliquam enim praesentium modi magnam animi suscipit fugit
            cumque culpa.
          </p>
        </article>
      </section>

      <section className=" w-[70%] mx-auto flex mt-20 mb-20">
        <article className="h-[150dvh] flex-1 bg-blue-500"></article>
        <article className="h-[50dvh] flex-1 sticky top-0 bg-red-500"></article>
      </section>
    </main>
  );
};

export default GalleryPage;
