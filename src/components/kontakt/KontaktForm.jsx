"use client";
import React from "react";
import Image from "next/image";
import rec100 from "../../../public/images/Rectangle100.svg";
import phone from "../../../public/images/phone.svg";
import mail from "../../../public/images/mail.svg";
import map from "../../../public/images/map.svg";
import { ArrowRight } from "lucide-react";

const KontaktForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between container mx-auto px-4 py-10 gap-10 lg:gap-20">
      <div className="w-full lg:w-1/2 bg-[#F8F8F8] rounded-3xl p-6 md:p-8 lg:p-12 xl:p-16">
        <h2 className="text-[#1C2430] text-2xl md:text-[36px] text-center mb-8 md:mb-10">
          Senden Sie uns eine Nachricht
        </h2>

        <form className="flex flex-col gap-4 md:gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#1C2430] ">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Vorname"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A83552]/20 placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#1C2430] ">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-Mail-Adresse"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A83552]/20 placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[#1C2430] ">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+123 456 7890"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A83552]/20 placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-[#1C2430] ">
                Betreff
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Der Betreff"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A83552]/20 placeholder:text-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#1C2430] ">
              Nachrichten
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Ihre Nachricht"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A83552]/20 placeholder:text-gray-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#A83552] text-[14px] text-white px-8 py-4 rounded-full tracking-widest inline-flex items-center justify-center gap-2 hover:bg-[#8a2b42] transition-colors w-full md:w-auto md:self-start "
          >
            NACHRICHT SENDEN
            <ArrowRight size={20} />
          </button>
        </form>
      </div>

      {/* Right Side - Info */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <div className="flex flex-col items-start justify-between gap-6">
          <div className="flex flex-row items-center justify-start gap-2">
            <Image src={rec100} alt="rectangle100" />
            <h3 className="text-[#1C2430] text-[18px] ">
              Nehmen Sie Kontakt auf
            </h3>
          </div>
          <h1 className="text-[#1C2430] text-[32px] md:text-[40px] lg:text-[50px] leading-tight ">
            Lassen Sie uns{" "}
            <span className="text-[#1C243080]">
              über Ihr <br className="hidden md:block" />
            </span>{" "}
            <span className="text-[#1C243080]">Bauprojekt</span> sprechen
          </h1>
          <p className="text-[#5B5B5B] text-lg">
            Wir beraten Sie persönlich bei Neubau, Umbau und Sanierung.
          </p>
        </div>

        <hr className="text-[#E9E9E9] w-full mt-10 mb-10 border-t border-[#E9E9E9]" />

        <div className="flex flex-col items-start justify-between gap-8">
          <div className="flex flex-row items-center justify-start gap-6">
            <Image src={phone} alt="phone" />
            <div className="flex flex-col items-start justify-between gap-1">
              <h4 className="text-[#1C2430] font-medium">Telefonnummer</h4>
              <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-2 text-[#1C2430]">
                <a href="tel:0412610202" className="hover:text-[#A83552]">
                  041 261 02 02
                </a>
                <span className="hidden sm:block">/</span>
                <a href="tel:0796880084" className="hover:text-[#A83552]">
                  079 688 00 84
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-6">
            <Image src={mail} alt="mail" />
            <div className="flex flex-col items-start justify-between gap-1">
              <h4 className="text-[#1C2430] font-medium">E-Mail-Adresse</h4>
              <a
                href="mailto:albin.heini.gmbh@sunrise.ch"
                className="text-[#1C2430] hover:text-[#A83552] break-all"
              >
                albin.heini.gmbh@sunrise.ch
              </a>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-6">
            <Image src={map} alt="map" />
            <div className="flex flex-col sm:flex-row items-start justify-start gap-10">
              <div className="flex flex-col items-start justify-between gap-1">
                <h4 className="text-[#1C2430] font-medium">Adresse 1</h4>
                <a href="https://www.google.com/maps/place/Emmenweidstrasse+120,+6020+Emmen,+Switzerland/@47.0664199,8.2636169,698m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478ffb53dd5e25e1:0x87e03d699c4e9de8!8m2!3d47.0664199!4d8.2636169!16s%2Fg%2F11rtrhy14k?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">
                  <p className="text-[#5B5B5B] hover:text-[#A83552]">
                    A. Heini Plus GmbH <br />
                    Emmenweidstrasse 120 <br />
                    6020 Emmenbrücke <br />
                    Schweiz
                  </p>
                </a>
              </div>
              <div className="flex flex-col items-start justify-between gap-1">
                <h4 className="text-[#1C2430] font-medium">Adresse 2</h4>
                <a href="google.com/maps/place/Hansmatt+8,+6370+Stans,+Switzerland/data=!4m2!3m1!1s0x478ff76ad15cfdd5:0xff8e4f5c91806db3?sa=X&ved=1t:242&ictx=111">
                  <p className="text-[#5B5B5B] hover:text-[#A83552]">
                    A. Heini Plus GmbH <br />
                    Hansmatt 8 <br />
                    6370 Stans <br />
                    Schweiz
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktForm;
