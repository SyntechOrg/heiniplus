"use client";
import React from "react";

const Video1 = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #A8355200 0%, #A8355299 100%)",
        }}
      />

      <div className="container mx-auto relative w-full h-full z-10 px-4">
        <div className="absolute bottom-16 md:bottom-20 left-4 md:left-0 w-full">
          <h2 className="uppercase text-white text-sm md:text-base tracking-widest mb-2">
            Werbevideo
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-[50px] text-white font-bold leading-tight">
            Gestalten Sie Ihre Räume, <br /> Angebote und Online <br />{" "}
            Transaktionen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Video1;
