"use client";
import React, { useState } from "react";
import Image from "next/image";
import home1 from "../../../public/images/home1.jpg";
import home2 from "../../../public/images/home2.jpg";
import home3 from "../../../public/images/home3.jpg";
import home4 from "../../../public/images/home4.jpg";
import home5 from "../../../public/images/home5.jpg";
import home6 from "../../../public/images/home6.jpg";
import home7 from "../../../public/images/home7.jpg";
import home8 from "../../../public/images/home8.jpg";
import home9 from "../../../public/images/home9.jpg";
import home10 from "../../../public/images/home10.jpg";
import home11 from "../../../public/images/home11.jpg";
import home12 from "../../../public/images/home12.jpg";
import home13 from "../../../public/images/home13.jpg";
import home14 from "../../../public/images/home14.jpg";
import home15 from "../../../public/images/home15.png";
import home16 from "../../../public/images/home16.jpg";
import home17 from "../../../public/images/home17.jpg";
import home18 from "../../../public/images/home18.jpg";
import home19 from "../../../public/images/home19.jpg";
import home20 from "../../../public/images/home20.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    category: "MEHRFAMILIENHÄUSER",
    title: "Allmendli, Hergiswil",
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
    category: "MEHRFAMILIENHÄUSER",
    title: "Eschenmatt, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem modernen Wohnprojekt in Rothenburg für die Planung und Umsetzung hochwertiger Innenausbauarbeiten verantwortlich. Die beiden Einfamilienhäuser Tri Adore zeichnen sich durch eine klare Architektur, helle Räume und eine harmonische Verbindung von Funktionalität und Ästhetik aus.",
      "Durch präzise Ausführung und den Einsatz erstklassiger Materialien entstand ein Wohnkonzept, das modernen Lebenskomfort mit stilvollem Design vereint. Das Ergebnis überzeugt durch Qualität, Nachhaltigkeit und ein stimmiges Gesamtbild bis ins kleinste Detail.",
    ],
    images: [home2, home2, home2, home2],
  },
  {
    id: 3,
    category: "MEHRFAMILIENHÄUSER",
    title: "Etappe 1 Beckenhof, Sursee",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem anspruchsvollen Wohnbauprojekt in Beinwil für die Planung und Umsetzung der hochwertigen Innenausbauarbeiten verantwortlich. Die Wohnüberbauung Chriesimatt überzeugt durch moderne Architektur, lichtdurchflutete Räume und eine harmonische Integration in die ländliche Umgebung.",
      "Mit Fokus auf Qualität, Funktionalität und Ästhetik wurden individuelle Lösungen für Wohnungen und Gemeinschaftsbereiche realisiert. Das Ergebnis ist ein zeitgemässes Wohnensemble, das höchsten Ansprüchen an Komfort, Nachhaltigkeit und Design gerecht wird.",
    ],
    images: [home3, home3, home3, home3],
  },
  {
    id: 4,
    category: "MEHRFAMILIENHÄUSER",
    title: "Etappe 2, Beckenhof, Sursee",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei der Renovation und dem hochwertigen Innenausbau der historischen Villa Krämersteinin Horw beteiligt. Das traditionsreiche Gebäude wurde mit viel Liebe zum Detail modernisiert und in eine exklusive Wohnresidenz verwandelt, die den Charme vergangener Zeiten mit zeitgemäßer Eleganz verbindet.",
      "Durch sorgfältige Planung und präzise Ausführung entstand ein harmonisches Zusammenspiel von klassischer Architektur und moderner Funktionalität. Hochwertige Materialien, feine Oberflächen und stilvolle Raumlösungen verleihen der Villa ein einzigartiges Ambiente voller Charakter und Raffinesse.",
    ],
    images: [home4, home4, home4, home4],
  },
  {
    id: 5,
    category: "MEHRFAMILIENHÄUSER",
    title: "Kuster, Stans",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home5, home5, home5, home5],
  },
  {
    id: 6,
    category: "MEHRFAMILIENHÄUSER",
    title: "Leumatt, Buchrain",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home6, home6, home6, home6],
  },
  {
    id: 7,
    category: "MEHRFAMILIENHÄUSER",
    title: "MFH Tri Adore, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home7, home7, home7, home7],
  },
  {
    id: 8,
    category: "MEHRFAMILIENHÄUSER",
    title: "MFH, Hergiswil",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home8, home8, home8, home8],
  },
  {
    id: 9,
    category: "MEHRFAMILIENHÄUSER",
    title: "Panorama, Hergisiwl",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home9, home9, home9, home9],
  },
  {
    id: 10,
    category: "MEHRFAMILIENHÄUSER",
    title: "Seepark, Beckenried",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home10, home10, home10, home10],
  },
  {
    id: 11,
    category: "MEHRFAMILIENHÄUSER",
    title: "Sonnhofpark, Inwil",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home11, home11, home11, home11],
  },
  {
    id: 12,
    category: "MEHRFAMILIENHÄUSER",
    title: "Willisau, Bahnhofstrasse Süd",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home12, home12, home12, home12],
  },
  {
    id: 13,
    category: "ÖFFENTLICH",
    title: "Hotel Kulm, Pilatus",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem exklusiven Projekt in Luzern verantwortlich für die Planung und Realisierung hochwertiger Innenausbauarbeiten. Das traditionsreiche Palace Hotel  and Conferences vereint elegantes Design mit modernster Funktionalität eingebettet in eine beeindruckende Umgebung zwischen See und Bergen.",
      "Mit höchster Präzision wurden massgeschneiderte Lösungen für Zimmer, Konferenzräume und öffentliche Bereiche umgesetzt. Das Ergebnis ist ein harmonisches Gesamtbild, das durch Qualität, Stilbewusstsein und Liebe zum Detail überzeugt.",
    ],
    images: [home13, home13, home13, home13],
  },
  {
    id: 14,
    category: "ÖFFENTLICH",
    title: "Im Dock, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem modernen Wohnprojekt in Rothenburg für die Planung und Umsetzung hochwertiger Innenausbauarbeiten verantwortlich. Die beiden Einfamilienhäuser Tri Adore zeichnen sich durch eine klare Architektur, helle Räume und eine harmonische Verbindung von Funktionalität und Ästhetik aus.",
      "Durch präzise Ausführung und den Einsatz erstklassiger Materialien entstand ein Wohnkonzept, das modernen Lebenskomfort mit stilvollem Design vereint. Das Ergebnis überzeugt durch Qualität, Nachhaltigkeit und ein stimmiges Gesamtbild bis ins kleinste Detail.",
    ],
    images: [home14, home14, home14, home14],
  },
  {
    id: 15,
    category: "ÖFFENTLICH",
    title: "Kreuz, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei diesem anspruchsvollen Wohnbauprojekt in Beinwil für die Planung und Umsetzung der hochwertigen Innenausbauarbeiten verantwortlich. Die Wohnüberbauung Chriesimatt überzeugt durch moderne Architektur, lichtdurchflutete Räume und eine harmonische Integration in die ländliche Umgebung.",
      "Mit Fokus auf Qualität, Funktionalität und Ästhetik wurden individuelle Lösungen für Wohnungen und Gemeinschaftsbereiche realisiert. Das Ergebnis ist ein zeitgemässes Wohnensemble, das höchsten Ansprüchen an Komfort, Nachhaltigkeit und Design gerecht wird.",
    ],
    images: [home15, home15, home15, home15],
  },
  {
    id: 16,
    category: "ÖFFENTLICH",
    title: "Palace Hotel",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war bei der Renovation und dem hochwertigen Innenausbau der historischen Villa Krämersteinin Horw beteiligt. Das traditionsreiche Gebäude wurde mit viel Liebe zum Detail modernisiert und in eine exklusive Wohnresidenz verwandelt, die den Charme vergangener Zeiten mit zeitgemäßer Eleganz verbindet.",
      "Durch sorgfältige Planung und präzise Ausführung entstand ein harmonisches Zusammenspiel von klassischer Architektur und moderner Funktionalität. Hochwertige Materialien, feine Oberflächen und stilvolle Raumlösungen verleihen der Villa ein einzigartiges Ambiente voller Charakter und Raffinesse.",
    ],
    images: [home16, home16, home16, home16],
  },
  {
    id: 17,
    category: "ÖFFENTLICH",
    title: "Pflegezentrum Nägeligasse, Stans",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home17, home17, home17, home17],
  },
  {
    id: 18,
    category: "ÖFFENTLICH",
    title: "Pflegezentrum Oberkirch",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home18, home18, home18, home18],
  },
  {
    id: 19,
    category: "ÖFFENTLICH",
    title: "Sanierung Hauptsitz LUKB, Luzern",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home19, home19, home19, home19],
  },
  {
    id: 20,
    category: "ÖFFENTLICH",
    title: "Sanierung Trisa, Triengen",
    location: "STANDORT",
    year: "jahr",
    description: [
      "Die Heini Plus GmbH war für die Planung und den hochwertigen Innenausbau der modernen Wohnüberbauung Brunnenhof verantwortlich. Das Projekt vereint klare Architektur, offene Grundrisse und grosszügige Wohnflächen mit einem beeindruckenden Blick auf die umliegende Natur.",
      "Mit Fokus auf Qualität, Komfort und Nachhaltigkeit wurden sämtliche Wohneinheiten individuell gestaltet. Durch die Verwendung erstklassiger Materialien und präzise Ausführung entstand ein harmonisches Gesamtkonzept, das Funktionalität und Ästhetik auf höchstem Niveau verbindet.",
    ],
    images: [home20, home20, home20, home20],
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
          <div className="text-white bg-[#A83552] px-10 py-3 rounded-full text-[12px] uppercase tracking-wide">
            {project.location}
          </div>
          <div className="text-white bg-[#A83552] px-10 py-3 rounded-full text-[12px] uppercase tracking-wide">
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    "ALLE PROJEKTE",
    "EINFAMILIENHÄUSER",
    "MEHRFAMILIENHÄUSER",
    "ÖFFENTLICH",
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "ALLE PROJEKTE"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1200px]">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-8 py-2 rounded-full text-sm transition-colors ${
              activeCategory === cat
                ? "bg-[#A83552] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col">
        {currentProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-[#A83552] text-white hover:bg-[#8a2b42]"
            }`}
          >
            <ChevronLeft size={20} />
            Zurück
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                  currentPage === page
                    ? "bg-[#A83552] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-[#A83552] text-white hover:bg-[#8a2b42]"
            }`}
          >
            Weiter
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
