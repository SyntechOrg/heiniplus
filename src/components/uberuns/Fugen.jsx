"use client";

import React from "react";
import CounterStat from "../../components/general/CounterStat";
import Image from "next/image";
import photo1 from "../../../public/images/photo1.png";
import photo2 from "../../../public/images/photo2.png";

function Fugen() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-12 md:py-16 lg:py-30 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full mb-10 gap-10 lg:gap-20">
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-3 md:gap-5">
          <h2 className="text-[#A83552] font-medium  tracking-widest  uppercase text-sm md:text-base">
            Über uns
          </h2>
          <h3 className="text-[#14171D] text-2xl md:text-[32px] xl:text-[40px] font-medium tracking-wide ">
            Die A. Heini Plus GmbH ist <br className="hidden ld:block" /> ein
            Unternehmen, welches <br className="hidden ld:block" /> sich auf die
            Arbeit von <br className="hidden ld:block" /> Fugen und Brandschutz{" "}
            <br className="hidden ld:block" /> spezialisiert ist.
          </h3>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col md:flex-row items-start justify-between gap-8 md:gap-5">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-between gap-5">
            <div className="w-full relative h-[300px] md:h-auto aspect-[4/3] md:aspect-auto">
              <Image
                src={photo1}
                alt="Fugenarbeit"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-[#6C6C6C]  text-base sm:text-[14px] md:text-[15px] xl:text-[18px] leading-relaxed">
              Eine äusserst hohe Flexibilität, Präzision und Zuverlässigkeit
              zeichnet die Firma A. Heini Plus GmbH aus. Mit unseren zwei Sitzen
              in der Zentralschweiz, werden alle Kundenwünsche, Schweizweit mit
              den höchsten Ansprüchen der Qualität, fachgerecht erfüllt.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="w-full relative h-[300px] md:h-auto aspect-[4/3] md:aspect-[5/7]">
              <Image
                src={photo2}
                alt="photo2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#E3E3E3] my-10 md:my-20" />

      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8 mb-10 md:mb-20 text-center md:text-left">
        <CounterStat
          end={10000}
          label={
            <>
              Abgeschlossene <br /> Projekte
            </>
          }
        />
        <CounterStat end={60} label={<>Baupartner</>} />
        <CounterStat
          end={28}
          label={
            <>
              Jahre <br />
              Erfahrung
            </>
          }
        />
      </div>
    </div>
  );
}

export default Fugen;
