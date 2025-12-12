"use client";
import React from "react";

// Accept 'src' as a prop here
const Video1 = ({ src }) => {
  return (
    <div className="relative overflow-x-hidden h-screen w-full">
      {" "}
      {/* Fixed w-full instead of 100vw to prevent scrollbars */}
      <video
        src={src} // Use the dynamic prop here
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
