"use client";

import React, { useState } from "react";
import Image from "next/image";
import Blur from "../../../public/images/Blur.jpg";
import BlurMobile from "../../../public/images/blurMobile.png";

const ServiceGrids = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const services = [
    {
      number: "01",
      title: "Unsere ",
      subtitle: "Vision",
      description:
        "Wir erzielen dauerhafte Lösungen, die Bauwerke schützen und Werte erhalten. Qualität, Präzision und Verlässlichkeit bilden seit 1997 die Grundlage unserer Arbeit.",
    },
    {
      number: "02",
      title: "Unser",
      subtitle: "Ansatz",
      description:
        "Jede Fuge, jede Abdichtung und jede Abschottung wird sorgfältig und präzise ausgeführt.",
    },
    {
      number: "03",
      title: "Unsere",
      subtitle: "Werte",
      description:
        "Ehrlichkeit, Fachkompetenz und Beständigkeit prägen unser tägliches Handeln. Wir stehen zu unserem Wort gegenüber Kunden, Partnern und Mitarbeitenden.",
    },
    {
      number: "04",
      title: "Unsere",
      subtitle: "Philosophie",
      description:
        "Wir verbinden Handwerk mit Verantwortung. Nachhaltige Materialien, saubere Ausführung und Schweizer Qualität stehen für uns an erster Stelle.",
    },
  ];

  const handleCardClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="py-[10px] md:py-[100px]">
      <div className="relative w-full md:min-h-[700px] lg:h-[800px]">
        <Image
          src={BlurMobile}
          alt="blur"
          className="md:hidden h-full w-full"
        />
        <Image
          src={Blur}
          alt={"blur"}
          className="object-cover max-md:hidden"
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/40" />
        <hr className="w-full text-[#FFFFFF33] absolute top-20 hidden lg:block" />
        <hr className="w-full text-[#FFFFFF33] absolute bottom-20 hidden lg:block" />
        <div className="absolute inset-0 w-full md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols lg:grid-cols-4 border-x-0 md:border border-[#FFFFFF33]">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-rows-1 md:grid-rows-[1fr_8fr_1fr]"
            >
              <div
                className={`hidden sm:block ${
                  index < 3 ? "border-r border-r-[#FFFFFF33]" : ""
                }`}
              ></div>

              <div
                className={`flex flex-col max-md:p-10 justify-between items-start text-white p-4 md:p-5 lg:p-6 transition-all duration-300 border-b md:border-b-0 border-[#FFFFFF33] last:border-b-0 relative
                ${
                  index === 0 || index === 2
                    ? "md:border-r md:border-r-[#FFFFFF33]"
                    : ""
                } 
                ${index < 3 ? "lg:border-r lg:border-r-[#FFFFFF33]" : ""}
                ${
                  // Mobile blur logic
                  clickedIndex === null
                    ? "max-md:backdrop-blur-none"
                    : clickedIndex === index
                    ? "max-md:backdrop-blur-xl "
                    : "max-md:backdrop-blur-none"
                }
                ${
                  // Desktop hover logic
                  "md:hover:backdrop-blur-xl"
                }`}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h2 className="text-xs md:text-[21px] font-bold mb-3 md:mb-4 opacity-70">
                  {service.number}
                </h2>
                <div className="w-full ">
                  <h1
                    className={`text-[20px] md:text-[20px] lg:text-[24px] xl:text-[32px] font-bold uppercase leading-tight transition-all duration-300 ${
                      hoveredIndex === index || clickedIndex === index
                        ? "lg:-translate-y-4 mb-2 lg:mb-4"
                        : "mb-0"
                    }`}
                  >
                    {service.title} <br /> {service.subtitle}
                  </h1>
                  <p
                    className={`text-sm xl:text-[18px] leading-relaxed transition-all text-[#FFFFFF99] duration-300 ${
                      hoveredIndex === index || clickedIndex === index
                        ? "opacity-100 max-h-40 mt-2"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div
                    className={`w-full h-5  absolute bottom-0 right-0  ${
                      hoveredIndex === index || clickedIndex === index
                        ? "bg-[#A83552]"
                        : "bg-transparent"
                    }`}
                  ></div>
                </div>
              </div>

              <div
                className={`hidden sm:block ${
                  index < 3 ? "border-r border-r-[#FFFFFF33]" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrids;
