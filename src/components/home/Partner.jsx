"use client";
import React from "react";
import Image from "next/image";
import logo1 from "../../../public/images/logo1.svg";
import logo2 from "../../../public/images/logo2.svg";
import logo3 from "../../../public/images/logo3.svg";
import logo4 from "../../../public/images/logo4.svg";
import logo5 from "../../../public/images/logo5.svg";
import logo6 from "../../../public/images/logo6.svg";

const Partner = () => {
  const partners = [
    { src: logo1, padding: "p-6 xl:p-20" },
    { src: logo2, padding: "p-6 xl:p-25" },
    { src: logo3, padding: "p-6 xl:p-20" },
    { src: logo4, padding: "p-6 xl:p-10 " },
    { src: logo5, padding: "p-6 xl:p-20" },
    { src: logo6, padding: "p-6 xl:p-30" },
  ];
  return (
    <div className="bg-[#A83552] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 md:mb-16 gap-8 lg:gap-12">
          <div className="flex flex-col items-start gap-3 md:gap-4 w-full lg:w-1/2">
            <h2 className="uppercase font-medium tracking-widest text-white text-sm md:text-base">
              UNSERE PARTNER
            </h2>
            <h3 className="text-3xl md:text-[40px] lg:text-[54px] text-white leading-tight">
              Räume gestalten, die <br className="hidden md:block" />{" "}
              inspirieren
            </h3>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-[#FFC1C2] text-base md:text-lg lg:text-[20px] leading-relaxed">
              Partnerschaften, die auf Vertrauen und Qualität bauen <br /> –
              gemeinsam schaffen wir Lösungen, die Visionen <br /> Wirklichkeit
              werden lassen.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg ${partner.padding} flex items-center justify-center h-40 sm:h-48 md:h-52 xl:h-80 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.src}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
