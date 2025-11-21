"use client";

import React from "react";
import Image from "next/image";
import pinkArrow from "../../../public/images/pinkArrow.svg";

const Arbeiten = () => {
  return (
    <div className="bg-[#A83552] py-16 md:py-24 lg:py-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:gap-12 lg:gap-20">
        <div className="flex flex-col items-start gap-4 w-full md:w-1/2 text-white mb-8 md:mb-0">
          <h2 className="text-sm  uppercase tracking-widest opacity-90">
            Unsere Arbeiten
          </h2>
          <h3 className="font-medium text-3xl sm:text-4xl lg:text-[50px] leading-tight">
            Räume gestalten, die <br className="hidden sm:block" /> inspirieren
          </h3>
        </div>

        <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
          <p className="text-[#FFC1C2] text-base sm:text-lg lg:text-[20px] leading-relaxed max-w-xl">
            Fachgerechte Ausführung in Neubau, Umbau und Sanierung. Sauber,
            präzise und zuverlässig.
          </p>
          <a href="/referenzen">
            <button className="group inline-flex items-center justify-start gap-3 bg-white px-6 py-4 sm:px-8 sm:py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50">
              <span className="uppercase text-[#A83552]  text-xs sm:text-[13px] tracking-wide">
                Alle Projekte anzeigen
              </span>
              <div className="w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-1">
                <Image
                  src={pinkArrow}
                  alt="Pfeil"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Arbeiten;
