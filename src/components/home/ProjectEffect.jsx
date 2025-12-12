"use client";
import React from "react";
import Image from "next/image";
import project1 from "../../../public/images/project1.jpg";
import project2 from "../../../public/images/project2.jpg";
import project3 from "../../../public/images/project3.jpg";

const ProjectEffect = () => {
  const projects = [
    {
      id: 1,
      img: project1,
      location: "STANDORT",
      year: "JAHR",
      title: "Wohnüberbauung, \n Am Ronbach",
    },
    {
      id: 2,
      img: project2,
      location: "STANDORT",
      year: "JAHR",
      title: "Wohnüberbauung, \n Am Ronbach",
    },
    {
      id: 3,
      img: project3,
      location: "STANDORT",
      year: "JAHR",
      title: "Tri Adore - Zwei Einfamilienhäuser, Rothenburg",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="sticky top-0 w-full h-screen overflow-hidden"
          style={{ zIndex: (index + 1) * 10 }}
        >
          {/* Image Container */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Gradient Overlay: Left (Black) -> Right (Transparent) */}
          {/* Modified line below: removed bg-black/40, added gradient classes */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent transition-opacity duration-300" />

          {/* Content Container */}
          <div className="absolute inset-0 container mx-auto px-4 md:px-8 lg:px-12 py-20 flex flex-col justify-between text-white">
            <div className="flex flex-wrap items-center gap-3 mt-16 md:mt-24">
              <div className="px-6 py-2 md:px-8 md:py-3 xl:px-20 rounded-full text-xs md:text-sm font-semibold uppercase tracking-[0.15em]   border border-white hover:bg-white/20 transition-colors duration-300 cursor-default">
                {project.location}
              </div>
              <div className="px-6 py-2 md:px-8 md:py-3 xl:px-20 rounded-full text-xs md:text-sm font-semibold uppercase tracking-[0.15em]   border border-white hover:bg-white/20 transition-colors duration-300 cursor-default">
                {project.year}
              </div>
            </div>
            <div className="mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium leading-tight md:leading-none drop-shadow-lg whitespace-pre-line">
                {project.title}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectEffect;
