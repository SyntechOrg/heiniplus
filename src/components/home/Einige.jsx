"use client";
import React from "react";
import Image from "next/image";
import stars from "../../../public/images/stars.svg";
import human1 from "../../../public/images/human1.jpg";
import human2 from "../../../public/images/human2.png";

const Einige = () => {
  return (
    <div id="Einige" className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <h1 className="text-[#14171D] text-[32px] md:text-[54px]  mb-10 md:mb-16 leading-tight">
        Einige unserer <br className="md:hidden" /> zufriedenen Kunden
      </h1>
      <div className="flex flex-col gap-4 md:hidden">
        <div className="bg-white border border-[#E3E3E3] rounded-xl p-5 flex flex-row gap-4 items-start justify-between shadow-sm">
          <div className="flex flex-col justify-between h-full w-[58%] gap-3">
            <div className="flex flex-col gap-3">
              <div className="w-20">
                <Image src={stars} alt="Rating" width={80} height={16} />
              </div>
              <p className="text-[#14171D] text-[13px] leading-relaxed  line-clamp-[8]">
                „Von der Beratung bis zur Ausführung verlief alles reibungslos.
                Die Arbeiten wurden sehr sauber, präzise und termingerecht
                ausgeführt. Das Team arbeitet professionell und zuverlässig. Wir
                sind mit dem Resultat sehr zufrieden.“
              </p>
            </div>
            <h3 className="text-[#6C6C6C] text-xs  mt-1">Markus Keller</h3>
          </div>
          <div className="relative w-[38%] aspect-[3/4] self-center rounded-lg overflow-hidden shrink-0">
            <Image
              src={human1}
              alt="Jan Muster"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white border border-[#E3E3E3] rounded-xl p-5 flex flex-row gap-4 items-start justify-between shadow-sm">
          <div className="flex flex-col justify-between h-full w-[58%] gap-3">
            <div className="flex flex-col gap-3">
              <div className="w-20">
                <Image src={stars} alt="Rating" width={80} height={16} />
              </div>
              <p className="text-[#14171D] text-[13px] leading-relaxed  line-clamp-[8]">
                „Die Fugen- und Brandschutzarbeiten wurden fachgerecht und exakt
                umgesetzt. Besonders geschätzt haben wir die transparente
                Kommunikation und die saubere Arbeitsweise. Ein kompetenter und
                verlässlicher Partner.“
              </p>
            </div>
            <h3 className="text-[#6C6C6C] text-xs  mt-1">Bauleitung</h3>
          </div>
          <div className="relative w-[38%] aspect-[3/4] self-center rounded-lg overflow-hidden shrink-0">
            <Image
              src={human2}
              alt="Dario Meller"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white border border-[#E3E3E3] rounded-xl p-5 flex flex-row gap-4 items-start justify-between shadow-sm">
          <div className="flex flex-col justify-between h-full w-[58%] gap-3">
            <div className="flex flex-col gap-3">
              <div className="w-20">
                <Image src={stars} alt="Rating" width={80} height={16} />
              </div>
              <p className="text-[#14171D] text-[13px] leading-relaxed  line-clamp-[8]">
                „Hohe Qualität, zuverlässige Termine und eine sehr angenehme
                Zusammenarbeit. Die Arbeiten wurden sorgfältig ausgeführt und
                entsprechen unseren Erwartungen vollumfänglich. Wir empfehlen
                Heini Plus gerne weiter.“
              </p>
            </div>
            <h3 className="text-[#6C6C6C] text-xs  mt-1">Peter Huber</h3>
          </div>
          <div className="relative w-[38%] aspect-[3/4] self-center rounded-lg overflow-hidden shrink-0">
            <Image
              src={human2}
              alt="Lassy Chester"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-8">
        <div className="flex flex-row items-stretch justify-between gap-5">
          <div className="flex flex-col items-start justify-between gap-4 p-8 border border-[#E3E3E3] rounded-lg w-[65%]">
            <Image src={stars} alt="stars" />
            <p className="text-[#14171D] text-lg  leading-relaxed">
              „Von der Beratung bis zur Ausführung verlief alles reibungslos.
              Die Arbeiten wurden sehr sauber, präzise und termingerecht
              ausgeführt. Das Team arbeitet professionell und zuverlässig. Wir
              sind mit dem Resultat sehr zufrieden.“
            </p>
            <h3 className="text-[#6C6C6C] text-lg ">Markus Keller</h3>
          </div>
          <div className="rounded-lg w-[33%] relative overflow-hidden min-h-[300px]">
            <Image
              src={human1}
              alt="Jan Muster"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row items-stretch justify-between gap-8">
          <div className="flex-1 rounded-lg relative overflow-hidden min-h-[300px]">
            <Image src={human2} alt="Client" fill className="object-cover" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-between gap-4 p-8 border border-[#E3E3E3] rounded-lg">
            <Image src={stars} alt="stars" />
            <p className="text-[#14171D] text-lg  leading-relaxed">
              „Die Fugen- und Brandschutzarbeiten wurden fachgerecht und exakt
              umgesetzt. Besonders geschätzt haben wir die transparente
              Kommunikation und die saubere Arbeitsweise. Ein kompetenter und
              verlässlicher Partner.“
            </p>
            <h3 className="text-[#6C6C6C] text-lg">Bauleitung</h3>
          </div>
          <div className="flex-1 flex flex-col items-start justify-between gap-4 p-8 border border-[#E3E3E3] rounded-lg">
            <Image src={stars} alt="stars" />
            <p className="text-[#14171D] text-lg  leading-relaxed">
              „Hohe Qualität, zuverlässige Termine und eine sehr angenehme
              Zusammenarbeit. Die Arbeiten wurden sorgfältig ausgeführt und
              entsprechen unseren Erwartungen vollumfänglich. Wir empfehlen
              Heini Plus gerne weiter.“
            </p>
            <h3 className="text-[#6C6C6C] text-lg ">Peter Huber</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Einige;
