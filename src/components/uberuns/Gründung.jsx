"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image3.png";

const Gründung = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    {
      title: "Gründung",
      year: "1997",
      text: "Die A. Heini GmbH wurde von Albin Heini und Naser Shkodra gegründet. Mit Erfahrung, Fachwissen und Qualitätsbewusstsein legten sie den Grundstein für ein Unternehmen, welches für präzise und verlässliche Ausführung steht.",
      image: image1,
    },
    {
      title: "Namensänderung",
      year: "2018",
      text: "Aus der A. Heini GmbH wurde die A. Heini Plus GmbH. Der neue Name markiert die Weiterentwicklung des Unternehmens.",
      image: image2,
    },
    {
      title: "Beteiligung",
      year: "2022",
      text: "Mit dem Eintritt von Endi Shkodra als Mitinhaber wird das Familienunternehmen in die nächste Generation geführt. Erfahrung und gewachsene Handwerkskultur verbinden sich mit moderner Arbeitsweise und zukunftsorientiertem Anspruch.",
      image: image3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="container mx-auto flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-6"
      ref={containerRef}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-16 mb-12 lg:mb-0">
        <div className="flex flex-col items-start justify-center gap-4 md:gap-8 w-full lg:w-[40%] min-h-[300px] md:min-h-[400px] transition-opacity duration-500 ease-in-out">
          <h2 className="text-[#A83552] font-bold uppercase tracking-widest text-sm md:text-base">
            {slides[activeSlide].title}
          </h2>
          <h3 className="text-[#14171D] font-medium text-6xl md:text-8xl lg:text-[120px] leading-none transition-all duration-500">
            {slides[activeSlide].year}
          </h3>
          <p className="text-[#6C6C6C] text-base md:text-lg leading-relaxed">
            {slides[activeSlide].text}
          </p>
        </div>

        <div className="w-full lg:w-[60%] relative h-[300px] md:h-[500px]  overflow-hidden">
          <Image
            src={slides[activeSlide].image}
            alt={`History ${slides[activeSlide].year}`}
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full gap-4 md:gap-10 py-10 md:py-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => setActiveSlide(index)}
          >
            <h4
              className={`text-2xl md:text-[40px] font-medium transition-colors duration-500 mb-2 ${
                activeSlide === index
                  ? "text-[#A83552]"
                  : "text-[#A8355280] group-hover:text-[#A83552]"
              }`}
            >
              {slide.year}
            </h4>
            <div className="bg-[#A8355220] h-2 md:h-3 w-full relative rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 h-full bg-[#A83552] rounded-sm transition-all duration-1000 ease-in-out"
                style={{ width: activeSlide === index ? "100%" : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gründung;
