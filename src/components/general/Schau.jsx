"use client";

import React from "react";
import Image from "next/image";
import back1 from "../../../public/images/back1.jpg";
import back2 from "../../../public/images/back2.jpg";
import nr1 from "../../../public/images/01.svg";
import nr2 from "../../../public/images/02.svg";
import nr3 from "../../../public/images/03.svg";
import nr4 from "../../../public/images/04.svg";
import nr5 from "../../../public/images/05.svg";

const Schau = () => {
  return (
    <div className="bg-[#A83552]">
      <div className="py-16 lg:py-[120px] container mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 px-4 lg:px-0">
        <div className="flex flex-col items-start justify-between gap-4 lg:gap-8 w-full lg:w-[30%] lg:sticky lg:top-[120px] lg:self-start mb-10 lg:mb-0">
          <h1 className="text-white uppercase font-medium text-sm lg:text-base">
            wie wir arbeiten
          </h1>
          <h1 className="text-3xl lg:text-[35px] xl:text-[50px] text-white leading-tight">
            Schau dir an, wie <br /> unser Prozess <br />
            funktioniert
          </h1>
        </div>

        <div className="w-full lg:w-[65%] flex flex-col items-start  justify-between gap-10 lg:gap-20">
          <div className="bg-white md:h-[300px] lg:h-auto w-full sticky top-[80px] md:top-[130px] lg:top-[120px] z-10">
            <div className="flex flex-col md:flex-row items-start justify-between w-full p-6 lg:p-[40px] gap-6 lg:gap-0">
              <div className="w-[20%] lg:w-[35%]">
                <Image src={nr1} alt="number1" />
              </div>
              <div className="flex flex-row items-end  w-full lg:w-[65%]">
                <div className="hidden lg:block h-[600px] w-[1px] bg-[#E0E0E0] mr-10"></div>
                <div className="w-full">
                  <h1 className="text-[#A83552] font-bold text-2xl lg:text-[25px] xl:text-[32px] uppercase">
                    Situationsaufnahme
                  </h1>
                  <hr className="text-[#A8355233] w-full mt-6 lg:mt-10 mb-6 lg:mb-10 h-[1px]" />
                  <p className="text-[#555555] text-base lg:text-[18px]">
                    Die Anforderungen werden erfasst und beurteilt. Dies schafft
                    eine klare Grundlage für den weiteren Ablauf.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:h-[300px] lg:h-auto w-full sticky top-[80px] md:top-[140px] lg:top-[160px] z-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${back1.src})` }}
            />
            <div className="absolute inset-0 bg-black/50 z-[5]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full p-6 lg:p-[40px] gap-6 lg:gap-0">
              <div className="w-[20%] lg:w-[35%]">
                <Image src={nr2} alt="number2" />
              </div>
              <div className="flex flex-row items-end w-full lg:w-[65%]">
                <div className="hidden lg:block h-[600px] w-[1px] bg-[#E0E0E0] mr-10"></div>
                <div className="w-full">
                  <h1 className="text-white font-bold text-2xl lg:text-[25px] xl:text-[32px]  uppercase">
                    Planung und <br /> Vorbereitung
                  </h1>
                  <hr className="text-[#ffff] w-full mt-6 lg:mt-10 mb-6 lg:mb-10 h-[1px]" />
                  <p className="text-[#ffff] text-base lg:text-[18px]">
                    Die Anforderungen werden erfasst und beurteilt. Dies schafft
                    eine klare Grundlage für den weiteren Ablauf.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white md:h-[300px] lg:h-auto w-full sticky top-[80px] md:top-[150px] lg:top-[200px] z-30">
            <div className="flex flex-col md:flex-row items-start justify-between w-full p-6 lg:p-[40px] gap-6 lg:gap-0">
              <div className="w-[20%] lg:w-[35%]">
                <Image src={nr3} alt="number3" />
              </div>
              <div className="flex flex-row items-end w-full lg:w-[65%]">
                <div className="hidden lg:block h-[600px] w-[1px] bg-[#E0E0E0] mr-10"></div>
                <div className="w-full">
                  <h1 className="text-[#A83552] font-bold text-2xl lg:text-[25px] xl:text-[32px] uppercase">
                    Ausführung
                  </h1>
                  <hr className="text-[#A8355233] w-full mt-6 lg:mt-10 mb-6 lg:mb-10 h-[1px]" />
                  <p className="text-[#555555] text-base lg:text-[18px]">
                    Die Arbeiten werden präzise, sauber und gemäss geltenden
                    Normen ausgeführt. Qualität entsteht durch Erfahrung und
                    handwerkliche Genauigkeit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full md:h-[300px] lg:h-auto sticky top-[80px] md:top-[160px] lg:top-[240px] z-40">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${back2.src})` }}
            />
            <div className="absolute inset-0 bg-black/50 z-[5]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full p-6 lg:p-[40px] gap-6 lg:gap-0">
              <div className="w-[20%] lg:w-[35%]">
                <Image src={nr4} alt="number4" />
              </div>
              <div className="flex flex-row items-end w-full lg:w-[65%] ">
                <div className="hidden lg:block h-[600px] w-[1px] bg-[#E0E0E0] mr-10"></div>
                <div className="w-full">
                  <h1 className="text-white font-bold text-2xl lg:text-[25px] xl:text-[32px] uppercase">
                    Fertigstellung
                  </h1>
                  <hr className="text-[#ffff] w-full mt-6 lg:mt-10 mb-6 lg:mb-10 h-[1px]" />
                  <p className="text-[#ffff] text-base lg:text-[18px]">
                    Nach Abschluss werden alle Details sorgfältig geprüft, um
                    sicherzustellen, dass die Arbeit unseren
                    Qualitätsanforderungen entspricht.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full sticky top-[80px] lg:top-[280px] z-50">
            <div className="flex flex-col md:flex-row items-start justify-between w-full p-6 lg:p-[40px] gap-6 lg:gap-0">
              <div className="w-[20%] lg:w-[35%]">
                <Image src={nr5} alt="number5" />
              </div>
              <div className="flex flex-row items-end w-full lg:w-[65%]">
                <div className="hidden lg:block h-[600px] w-[1px] bg-[#E0E0E0] mr-10"></div>
                <div className="w-full">
                  <h1 className="text-[#A83552] font-bold text-2xl lg:text-[25px] xl:text-[32px] uppercase">
                    Betreuung
                  </h1>
                  <hr className="text-[#A8355233] w-full mt-6 lg:mt-10 mb-6 lg:mb-10 h-[1px]" />
                  <p className="text-[#555555] text-base lg:text-[18px]">
                    Bei Bedarf übernehmen wir Wartung oder Erneuerung.So bleibt
                    der Schutz des Bauwerks langfristig erhalten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schau;
