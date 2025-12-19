"use client";
import React from "react";
import Image from "next/image";
import pinkArrow from "../../../public/images/pinkArrow.svg";
import Link from "next/link";

const Unterhalt = () => {
  return (
    <div className="container mx-auto pb-20 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full py-12 lg:py-[100px] gap-8 lg:gap-12">
        <div className="flex flex-col items-start justify-between gap-3 w-full lg:w-1/2">
          <h2 className="text-[#A83552] text-sm font-medium tracking-widest uppercase">
            WAS WIR BIETEN
          </h2>
          <h3 className="text-[32px] md:text-[27px] ">
            Fugendichtungen <br /> Brandabschottungen <br /> Abschottungen
            <br /> Unterhalt und Service
          </h3>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 w-full lg:w-1/2">
          <p className="text-[#555555] text-base md:text-[14px] leading-relaxed">
            Durch regelmässige Kontrolle und rechtzeitige Instandhaltung lassen
            sich Schäden früh erkennen und Folgekosten vermeiden. Wir kümmern
            uns zuverlässig um die Pflege und Erhaltung von Fugen, Abdichtungs-{" "}
            <br />
            und Brandschutzbereichen in Gebäuden.
          </p>
          <Link href="/uberuns#Bieten">
            <div className="flex flex-row items-center gap-4 md:gap-8 group cursor-pointer">
              <button className="text-[#A83552] uppercase  tracking-widest text-sm md:text-base transition-colors group-hover:text-[#8a2b42]">
                alle anzeigen
              </button>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <Image src={pinkArrow} alt="Arrow" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="p-8 md:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-start gap-6 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300 hover:shadow-lg">
          <span className="text-xl font-medium opacity-50 group-hover:opacity-100">
            01
          </span>
          <h4 className="uppercase text-xl font-medium">Kontrollen</h4>
          <p className="text-sm md:text-[14px] leading-relaxed text-[#555555] group-hover:text-[#FFC1C2] mb-4 md:mb-15">
            Überprüfung bestehender Fugen, Abdichtungen und Abschottungen auf
            Zustand, Alterung und Dichtheit. Wir erkennen mögliche
            Schwachstellen und informieren verständlich über den notwendigen
            Handlungsbedarf.
          </p>
        </div>
        <div className="p-8 md:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-start gap-6 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300 hover:shadow-lg">
          <span className="text-xl font-medium opacity-50 group-hover:opacity-100">
            02
          </span>
          <h4 className="uppercase text-xl font-medium">Serviceaufträge</h4>
          <p className="text-sm md:text-[14px] leading-relaxed text-[#555555] group-hover:text-[#FFC1C2] mb-4 md:mb-15">
            Ausführung von Reparatur- und Unterhaltsarbeiten. Sorgfältig,
            effizient und termingerecht umgesetzt.
          </p>
        </div>
        <div className="p-8 md:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-start gap-6 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300 hover:shadow-lg">
          <span className="text-xl font-medium opacity-50 group-hover:opacity-100">
            03
          </span>
          <h4 className="uppercase text-xl font-medium">Wartungsaufträge</h4>
          <p className="text-sm md:text-[14px] leading-relaxed text-[#555555] group-hover:text-[#FFC1C2] mb-4 md:mb-15">
            Regelmässige Wartungen nach Vereinbarung, inklusive
            Terminüberwachung und Dokumentation. So bleiben Bauteile und
            Installationen langfristig geschützt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unterhalt;
