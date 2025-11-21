"use client";
import React, { useState } from "react";
import Image from "next/image";
import home1 from "../../../public/images/home1.png";
import home2 from "../../../public/images/home2.png";
import home3 from "../../../public/images/home3.png";
import home4 from "../../../public/images/home4.png";
import home5 from "../../../public/images/home5.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    category: "WOHNGEBÄUDE",
    title: "Palace Hotel & Conferences, \n Luzern",
    location: "STANDORT",
    year: "JAHR",
    description: [
      "Die Heini Plus GmbH war bei diesem exklusiven Projekt in Luzern verantwortlich für die Planung und Realisierung hochwertiger Innenausbauarbeiten. Das traditionsreiche Palace Hotel and Conferences vereint elegantes Design mit modernster Funktionalität eingebettet in eine beeindruckende Umgebung zwischen See und Bergen.",
      "Mit höchster Präzision wurden massgeschneiderte Lösungen für Zimmer, Konferenzräume und öffentliche Bereiche umgesetzt. Das Ergebnis ist ein harmonisches Gesamtbild, das durch Qualität, Stilbewusstsein und Liebe zum Detail überzeugt.",
    ],
    images: [home1, home1, home1, home1],
  },
  {
    id: 2,
    category: "GEWERBE",
    title: "Tri Adore - Zwei\n Einfamilienhäuser, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem modernen Wohnprojekt in Rothenburg für die Planung und Umsetzung hochwertiger Innenausbauarbeiten verantwortlich. Die beiden Einfamilienhäuser Tri Adore zeichnen sich durch eine klare Architektur, helle Räume und eine harmonische Verbindung von Funktionalität und Ästhetik aus.",
      "Durch präzise Ausführung und den Einsatz erstklassiger Materialien entstand ein Wohnkonzept, das modernen Lebenskomfort mit stilvollem Design vereint. Das Ergebnis überzeugt durch Qualität, Nachhaltigkeit und ein stimmiges Gesamtbild bis ins kleinste Detail.",
    ],
    images: [home2, home2, home2, home2],
  },
  {
    id: 3,
    category: "INDUSTRIE",
    title: "Wohnüberbauung Chriesimatt,\n Beinwil",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem anspruchsvollen Wohnbauprojekt in Beinwil für die Planung und Umsetzung der hochwertigen Innenausbauarbeiten verantwortlich. Die Wohnüberbauung Chriesimatt überzeugt durch moderne Architektur, lichtdurchflutete Räume und eine harmonische Integration in die ländliche Umgebung.",
      "Mit Fokus auf Qualität, Funktionalität und Ästhetik wurden individuelle Lösungen für Wohnungen und Gemeinschaftsbereiche realisiert. Das Ergebnis ist ein zeitgemässes Wohnensemble, das höchsten Ansprüchen an Komfort, Nachhaltigkeit und Design gerecht wird.",
    ],
    images: [home3, home3, home3, home3],
  },
  {
    id: 4,
    category: "INDUSTRIE",
    title: "Villa Krämerstein, Horw",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei der Renovation und dem hochwertigen Innenausbau der historischen Villa Krämersteinin Horw beteiligt. Das traditionsreiche Gebäude wurde mit viel Liebe zum Detail modernisiert und in eine exklusive Wohnresidenz verwandelt, die den Charme vergangener Zeiten mit zeitgemäßer Eleganz verbindet.",
      "Durch sorgfältige Planung und präzise Ausführung entstand ein harmonisches Zusammenspiel von klassischer Architektur und moderner Funktionalität. Hochwertige Materialien, feine Oberflächen und stilvolle Raumlösungen verleihen der Villa ein einzigartiges Ambiente voller Charakter und Raffinesse.",
    ],
    images: [home4, home4, home4, home4],
  },
  {
    id: 4,
    category: "INDUSTRIE",
    title: "Wohnüberbauung Brunnenhof",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home5, home5, home5, home5],
  },
];

const ProjectItem = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 border-b border-gray-200 pb-20 mb-20 last:border-0">
      <div className="lg:w-1/2 lg:border-r lg:border-r-[#E0E0E0] lg:pr-10">
        <div className="flex flex-row items-center justify-start gap-4 mb-8">
          <div className="text-white bg-[#A83552] px-10 py-3 rounded-full text-[12px]  uppercase tracking-wide">
            {project.location}
          </div>
          <div className="text-white bg-[#A83552] px-10 py-3 rounded-full text-[12px]  uppercase tracking-wide">
            {project.year}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-[32px] leading-tight font-medium uppercase text-black whitespace-pre-line">
            {project.title}
          </h1>

          <div className="space-y-6 text-[#6C6C6C] leading-relaxed text-lg font-light">
            {project.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col gap-4">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
          <Image
            src={project.images[selectedImageIndex]}
            alt={project.title}
            fill
            className="object-cover"
          />

          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#A83552] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#8a2b42]"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#A83552] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#8a2b42]"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-2">
          {project.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                selectedImageIndex === index
                  ? "ring-2 ring-[#A83552] ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ALLE PROJEKTE");
  const categories = ["ALLE PROJEKTE", "WOHNGEBÄUDE", "GEWERBE", "INDUSTRIE"];

  const filteredProjects =
    activeCategory === "ALLE PROJEKTE"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1200px]">
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2 rounded-full text-sm  transition-colors ${
              activeCategory === cat
                ? "bg-[#A83552] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
