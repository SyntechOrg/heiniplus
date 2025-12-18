"use client";
import React from "react";

const StudioLocations = () => {
  return (
    <div className="w-full bg-[#A83552] py-20 px-4">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <p className="text-white/70 text-sm  tracking-widest uppercase mb-2">
            Besuchen Sie unsere Standorte
          </p>
          {/* <h2 className="text-white text-4xl md:text-5xl font-bold">
            Besuchen Sie unser Studio
          </h2> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-lg relative bg-gray-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Emmenweidstrasse%20120%2C%206020%20Emmenbr%C3%BCcke&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="filter grayscale-[0.2] contrast-[1.1]"
              title="Emmenweidstrasse Map"
            ></iframe>

            {/* <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-[250px] text-xs">
              <h3 className="font-bold text-gray-800 text-sm mb-1">
                Emmenweidstrasse 120
              </h3>
              <p className="text-gray-600 mb-2">
                Emmenweidstrasse 120, 6020 Emmen
              </p>
              <a
                href="https://maps.google.com/maps?q=Emmenweidstrasse%20120%2C%206020%20Emmenbr%C3%BCcke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Größere Karte ansehen
              </a>
            </div> */}
          </div>

          <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-lg relative bg-gray-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Hansmatt%208%2C%206370%20Stans&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="filter grayscale-[0.2] contrast-[1.1]"
              title="Hansmatt Map"
            ></iframe>

            {/* <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-[250px] text-xs">
              <h3 className="font-bold text-gray-800 text-sm mb-1">
                Hansmatt 8
              </h3>
              <p className="text-gray-600 mb-2">Hansmatt 8, 6370 Stans</p>
              <a
                href="https://maps.google.com/maps?q=Hansmatt%208%2C%206370%20Stans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Größere Karte ansehen
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioLocations;
