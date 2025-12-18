"use client";

import React from "react";
import CounterStat from "../../components/general/CounterStat";

function Jahrzehnte() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 lg:py-40">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full mb-10 gap-8 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 lg:gap-5">
          <h1 className="text-[#A83552] font-medium tracking-widest uppercase text-sm lg:text-base">
            Über uns
          </h1>
          <h1 className="text-[#14171D] text-[32px] sm:text-[40px] lg:text-[50px] font-medium leading-tight">
            Jahrzehnte der Exzellenz <br className="hidden sm:block" /> im
            Bauwesen
          </h1>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
          <p className="text-[#6C6C6C]  tracking-wide leading-relaxed text-base lg:text-lg">
            Die A. Heini Plus GmbH ist auf Fugen-, Abdichtungs- und
            Brandschutzarbeiten spezialisiert. Höchste Flexibilität, Präzision
            und Zuverlässigkeit zeichnen unser Unternehmen aus. Von unseren zwei
            Standorten in der Zentralschweiz realisieren wir Projekte in der
            ganzen Schweiz fachgerecht und mit höchsten Ansprüchen an Qualität.
          </p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#E3E3E3] my-8 lg:my-20" />

      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8 text-center md:text-left">
        <CounterStat
          end={5000}
          label={
            <>
              Abgeschlossene <br /> Projekte
            </>
          }
        />
        <CounterStat end={40} label={<>Baupartner</>} />
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

export default Jahrzehnte;
