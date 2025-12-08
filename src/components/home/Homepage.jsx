"use client";
import React from "react";
import Image from "next/image";
import homePage from "../../../public/images/homePage.png";
import blackArrow from "../../../public/images/blackArrow.svg";
import ractangle10 from "../../../public/images/Rectangle 10.svg";
import ractangle20 from "../../../public/images/Rectangle 20.svg";

const Homepage = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <Image
          src={homePage}
          alt="Homepage background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="h-3 md:h-5  bg-[#A83552] absolute  w-full bottom-0 right-0 left-0 "></div>
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto h-full px-4 flex items-center justify-center lg:justify-start pt-20 lg:pt-0">
          <div className="w-full md:w-3/4 lg:w-1/2 bg-[#3950711A] text-white p-6 md:p-10 lg:p-12 flex flex-col items-start justify-between gap-6 md:gap-10 backdrop-blur-xl relative rounded-lg lg:rounded-none">
            <div className="flex flex-row items-center gap-3 md:gap-5">
              <Image
                src={ractangle10}
                alt="indicator active"
                className="w-auto h-auto"
              />
              <Image
                src={ractangle20}
                alt="indicator"
                className="w-auto h-auto"
              />
              <Image
                src={ractangle20}
                alt="indicator"
                className="w-auto h-auto"
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[54px] uppercase font-medium leading-tight">
              Ihr Spezialist für Fugen, Brandschutz und Abdichtungen
            </h1>
            <p className="text-base md:text-lg lg:text-[18px]  leading-relaxed">
              Seit 1997 realisieren wir hochwertige{" "}
              <br className="hidden md:block" /> Projekte in der ganzen Schweiz
            </p>
            <a href="/uberuns#Bieten">
              <div className="group inline-flex items-center rounded-full mb-10 md:mb-16 lg:mb-20 bg-white px-6 py-4 md:px-8 md:py-5 gap-3 tracking-wide cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg">
                <button className="text-black text-xs md:text-[13px] uppercase">
                  Unsere Leistungen
                </button>
                <Image
                  src={blackArrow}
                  alt="Arrow"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </a>
            <div className="h-3 md:h-5 bg-[#A83552] w-full absolute bottom-0 left-0 right-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
