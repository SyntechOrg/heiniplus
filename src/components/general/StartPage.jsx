"use client";
import React from "react";
import Image from "next/image";

const StartPage = ({ title, image }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      <Image
        src={image}
        alt={title || "Page header"}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-row items-start absolute bottom-16 md:bottom-20 left-0 right-0 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-[54px] font-bold uppercase text-white leading-tight">
          {title}
        </h1>
      </div>
      <div className="w-full absolute bottom-0 h-3 md:h-5 bg-[#A83552] z-10"></div>
    </div>
  );
};

export default StartPage;
