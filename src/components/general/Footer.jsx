"use client";
import React from "react";
import Image from "next/image";
import footerImage from "../../../public/images/footerPhoto.png";
import whiteArrow from "../../../public/images/arrow.svg";
import social1 from "../../../public/images/fb.svg";
import social2 from "../../../public/images/ig.svg";
import social3 from "../../../public/images/x.svg";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F]">
      <div className="flex flex-col lg:flex-row container mx-auto items-start justify-between min-h-screen">
        <div className="relative w-full lg:w-[40%] h-[500px] lg:h-auto lg:min-h-screen">
          <Image
            src={footerImage}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full p-8 z-10">
            <button className="border border-[#FFFFFF33] text-[13px]  uppercase px-5 py-3 rounded-full text-white hover:bg-white/10 transition-colors">
              Werden Sie unser Partner
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start gap-8 z-10">
            <h1 className="text-4xl md:text-[60px] leading-tight font-medium uppercase text-white">
              Lassen Sie uns <br />
              etwas Zeitloses <br /> erschaffen
            </h1>
            <a href="/kontakt">
              <div
                className="bg-[#A83552] px-5 py-4 flex flex-row items-center justify-start
                  rounded-full gap-2 cursor-pointer transition-all duration-200
                  hover:bg-[#8a2b42] group"
              >
                <button className="text-[12px] uppercase text-white">
                  ANGEBOT EINHOLEN + PROJEKTE
                </button>
                <Image
                  src={whiteArrow}
                  alt="Arrow"
                  className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </a>
          </div>
          <div className="bg-[#0000006E] absolute inset-0 z-0"></div>
        </div>
        <div className="hidden lg:block h-auto min-h-screen w-[1px] bg-[#FFFFFF33]"></div>
        <div className="w-full lg:w-[60%] px-6 py-12  lg:pl-10 lg:py-[80px] flex flex-col justify-between  gap-20 md:gap-50 lg:h-auto lg:min-h-screen">
          <div className="flex flex-col items-center gap-0 w-full">
            <div className="flex flex-col md:flex-row items-start justify-between py-8 w-full border-b border-[#FFFFFF26] gap-4">
              <h2 className="text-[#FFFFFF66]  text-[12px] uppercase min-w-[120px]">
                BÜRO
              </h2>
              <div className="flex flex-col md:flex-row gap-22 w-full md:w-auto">
                <a href="https://www.google.com/maps/place/Emmenweidstrasse+120,+6020+Emmen,+Switzerland/@47.0664199,8.2636169,698m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478ffb53dd5e25e1:0x87e03d699c4e9de8!8m2!3d47.0664199!4d8.2636169!16s%2Fg%2F11rtrhy14k?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">
                  <p className="text-xl hover:text-[#A83552] md:text-[24px] text-white">
                    Emmenweidstrasse 120 <br />
                    6020 Emmenbrücke <br />
                    Schweiz
                  </p>
                </a>
                <a href="google.com/maps/place/Hansmatt+8,+6370+Stans,+Switzerland/data=!4m2!3m1!1s0x478ff76ad15cfdd5:0xff8e4f5c91806db3?sa=X&ved=1t:242&ictx=111">
                  <p className="text-xl hover:text-[#A83552] md:text-[24px] text-white">
                    Hansmatt 8 <br />
                    6370 Stans <br />
                    Schweiz
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between py-8 w-full border-b border-[#FFFFFF26] gap-4">
              <h2 className="text-[#FFFFFF66]  text-[12px] uppercase min-w-[120px]">
                Rufen Sie uns an
              </h2>
              <div className="flex flex-row items-center justify-start gap-2 ">
                <a href="tel: 041 261 02 02">
                  <p className="text-xl md:text-[24px] hover:text-[#A83552]  text-white">
                    041 261 02 02
                  </p>
                </a>
                <h1 className="text-xl md:text-[24px] font-medium text-white">
                  /
                </h1>
                <a href="tel:079 688 00 84">
                  <p className="text-xl md:text-[24px] hover:text-[#A83552]  text-white">
                    079 688 00 84
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between py-8 w-full border-b border-[#FFFFFF26] gap-4">
              <h2 className="text-[#FFFFFF66]  text-[12px] uppercase min-w-[120px]">
                kontakt
              </h2>
              <a
                href="mailto:albin.heini.gmbh@sunrise.ch"
                className="text-xl md:text-[24px]  text-white hover:text-[#A83552] transition-colors break-all"
              >
                albin.heini.gmbh@sunrise.ch
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between py-8 w-full border-b border-[#FFFFFF26] gap-4">
              <h2 className="text-[#FFFFFF66]  text-[12px] uppercase min-w-[120px]">
                Folgen Sie uns
              </h2>
              <div className="flex flex-row items-center justify-start gap-6">
                <Image
                  src={social1}
                  alt="Facebook"
                  className="cursor-pointer hover:opacity-80"
                />
                <Image
                  src={social2}
                  alt="Instagram"
                  className="cursor-pointer hover:opacity-80"
                />
                {/* <Image
                  src={social3}
                  alt="X"
                  className="cursor-pointer hover:opacity-80"
                /> */}
              </div>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="flex flex-col items-start w-full gap-12">
            <div className="w-full lg:w-[80%] flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="flex flex-col items-start gap-4">
                <Link href="/referenzen">
                  <h1 className="text-lg text-[#FFFFFF66]  hover:text-[#A83552] transition-colors">
                    Projects
                  </h1>
                </Link>
                <Link href="/uberuns#Bieten">
                  <h1 className="text-lg text-[#FFFFFF66]  hover:text-[#A83552] transition-colors">
                    Leistungen
                  </h1>
                </Link>

                <Link href="/uberuns">
                  <h1 className="text-lg text-[#FFFFFF66]  hover:text-[#A83552] transition-colors">
                    Über Uns
                  </h1>
                </Link>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Link href="/#Einige">
                  <h1 className="text-lg text-[#FFFFFF66]  hover:text-[#A83552] transition-colors">
                    Kundenbewertungen
                  </h1>
                </Link>
                <Link href="/kontakt">
                  <h1 className="text-lg text-[#FFFFFF66] hover:text-[#A83552] transition-colors">
                    Kontakt
                  </h1>
                </Link>
              </div>
            </div>

            <div className="w-full border-t border-[#FFFFFF26] pt-8 text-center ">
              <p className="text-[14px] text-[#FFFFFF66]">
                Urheberrecht © {new Date().getFullYear()} Heini Plus | Gestaltet
                von{" "}
                <span className="hover:text-[#A83552]">
                  {" "}
                  <a href="https://syn-tech.ch">Syntech Solutions AG</a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
