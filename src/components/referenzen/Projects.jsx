"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import home1 from "../../../public/images/home1.jpg";
import home2 from "../../../public/images/home2.jpg";
import home3 from "../../../public/images/home3.jpg";
import home4 from "../../../public/images/home4.jpg";
import home5 from "../../../public/images/home5.jpg";
import home6 from "../../../public/images/home6.jpg";
import home7 from "../../../public/images/home7.jpg";
import home8 from "../../../public/images/home8.jpg";
// import home9 from "../../../public/images/home9.jpg";
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
import home21 from "../../../public/images/home21.jpg";
import home22 from "../../../public/images/home22.jpg";
import home23 from "../../../public/images/home23.jpg";
import home24 from "../../../public/images/home24.jpg";
import home25 from "../../../public/images/home25.jpg";
import home26 from "../../../public/images/home26.jpg";

const projectsData = [
  {
    id: 1,
    category: "MEHRFAMILIENHÄUSER",
    title: "Allmendli, Hergiswil",
    location: "STANDORT",
    year: "JAHR",
    image: home1,
  },
  {
    id: 2,
    category: "MEHRFAMILIENHÄUSER",
    title: "Eschenmatt, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    image: home2,
  },
  {
    id: 3,
    category: "MEHRFAMILIENHÄUSER",
    title: "Etappe 1 Beckenhof, Sursee",
    location: "STANDORT",
    year: "jahr",
    image: home3,
  },
  {
    id: 4,
    category: "MEHRFAMILIENHÄUSER",
    title: "Etappe 2, Beckenhof, Sursee",
    location: "STANDORT",
    year: "jahr",
    image: home4,
  },
  {
    id: 5,
    category: "MEHRFAMILIENHÄUSER",
    title: "Kuster, Stans",
    location: "STANDORT",
    year: "jahr",
    image: home5,
  },
  {
    id: 6,
    category: "MEHRFAMILIENHÄUSER",
    title: "Leumatt, Buchrain",
    location: "STANDORT",
    year: "jahr",
    image: home6,
  },
  {
    id: 7,
    category: "MEHRFAMILIENHÄUSER",
    title: "MFH Tri Adore, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    image: home7,
  },
  {
    id: 8,
    category: "MEHRFAMILIENHÄUSER",
    title: "MFH, Hergiswil",
    location: "STANDORT",
    year: "jahr",
    image: home8,
  },
  // {
  //   id: 9,
  //   category: "MEHRFAMILIENHÄUSER",
  //   title: "Panorama, Hergisiwl",
  //   location: "STANDORT",
  //   year: "jahr",
  //   image: home9,
  // },
  {
    id: 10,
    category: "MEHRFAMILIENHÄUSER",
    title: "Seepark, Beckenried",
    location: "STANDORT",
    year: "jahr",
    image: home10,
  },
  {
    id: 11,
    category: "MEHRFAMILIENHÄUSER",
    title: "Sonnhofpark, Inwil",
    location: "STANDORT",
    year: "jahr",
    image: home11,
  },
  {
    id: 12,
    category: "MEHRFAMILIENHÄUSER",
    title: "Willisau, Bahnhofstrasse Süd",
    location: "STANDORT",
    year: "jahr",
    image: home12,
  },
  {
    id: 13,
    category: "ÖFFENTLICH",
    title: "Hotel Kulm, Pilatus",
    location: "STANDORT",
    year: "jahr",
    image: home13,
  },
  {
    id: 14,
    category: "ÖFFENTLICH",
    title: "Im Dock, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    image: home14,
  },
  {
    id: 15,
    category: "ÖFFENTLICH",
    title: "Kreuz, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    image: home15,
  },
  {
    id: 16,
    category: "ÖFFENTLICH",
    title: "Palace Hotel",
    location: "STANDORT",
    year: "jahr",
    image: home16,
  },
  {
    id: 17,
    category: "ÖFFENTLICH",
    title: "Pflegezentrum Nägeligasse, Stans",
    location: "STANDORT",
    year: "jahr",
    image: home17,
  },
  {
    id: 18,
    category: "ÖFFENTLICH",
    title: "Pflegezentrum Oberkirch",
    location: "STANDORT",
    year: "jahr",
    image: home18,
  },
  {
    id: 19,
    category: "ÖFFENTLICH",
    title: "Sanierung Hauptsitz LUKB, Luzern",
    location: "STANDORT",
    year: "jahr",
    image: home19,
  },
  {
    id: 20,
    category: "ÖFFENTLICH",
    title: "Sanierung Trisa, Triengen",
    location: "STANDORT",
    year: "jahr",
    image: home20,
  },
  {
    id: 21,
    category: "EINFAMILIENHÄUSER",
    title: "Villa, Kriens",
    location: "STANDORT",
    year: "jahr",
    image: home21,
  },
  {
    id: 22,
    category: "EINFAMILIENHÄUSER",
    title: "DEFH Triadore, Rothenburg",
    location: "STANDORT",
    year: "jahr",
    image: home22,
  },
  {
    id: 23,
    category: "EINFAMILIENHÄUSER",
    title: "EFH",
    location: "STANDORT",
    year: "jahr",
    image: home23,
  },
  {
    id: 24,
    category: "EINFAMILIENHÄUSER",
    title: "Gruobrain, Ennetmoos",
    location: "STANDORT",
    year: "jahr",
    image: home24,
  },
  {
    id: 25,
    category: "EINFAMILIENHÄUSER",
    title: "Kirschgarten, Schenkon",
    location: "STANDORT",
    year: "jahr",
    image: home25,
  },
  {
    id: 26,
    category: "EINFAMILIENHÄUSER",
    title: "Villa Krämmerstein, Horw",
    location: "STANDORT",
    year: "jahr",
    image: home26,
  },
];

// --- HELPER FUNCTION: Fisher-Yates Shuffle ---
// This function randomizes the array without mutating the original
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Project Item Component
const ProjectItem = ({ project, onImageClick }) => {
  return (
    <div className="flex flex-col gap-6 mb-20 w-full">
      {/* 1. TITLE */}
      <h1 className="text-[28px] lg:text-[32px] leading-tight  uppercase text-black">
        {project.title}
      </h1>

      {/* 2. BADGES (Location & Year) */}
      <div className="flex flex-row items-center justify-start gap-4">
        <div className="text-white bg-[#A83552] px-8 py-2 rounded-full text-[12px] uppercase tracking-wide">
          {project.location}
        </div>
        <div className="text-white bg-[#A83552] px-8 py-2 rounded-full text-[12px] uppercase tracking-wide">
          {project.year}
        </div>
      </div>

      {/* 3. SINGLE IMAGE WITH HOVER HINT & CLICK HANDLER */}
      <div
        className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden mt-2 cursor-pointer group"
        onClick={() => onImageClick(project.image)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Hover Hint Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomIn size={20} />
            <span className="font-medium">Vergrössern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Full Screen Image Modal Component
const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60 bg-black/50 p-2 rounded-full"
      >
        <X size={32} />
      </button>
      <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
        <Image
          src={image}
          alt="Full screen preview"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ALLE PROJEKTE");
  // NEW: State to hold the displayed projects separately so we can shuffle them
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 6;

  const categories = [
    "ALLE PROJEKTE",
    "EINFAMILIENHÄUSER",
    "MEHRFAMILIENHÄUSER",
    "ÖFFENTLICH",
  ];

  // NEW: Initial shuffle on component mount
  useEffect(() => {
    setDisplayedProjects(shuffleArray(projectsData));
  }, []);

  // Scroll to Top Helper Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // UPDATED: Handle Category Change with Shuffle Logic
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    scrollToTop();

    if (category === "ALLE PROJEKTE") {
      // If "ALLE PROJEKTE" is clicked, shuffle the full list
      setDisplayedProjects(shuffleArray(projectsData));
    } else {
      // Otherwise, filter normally by category (not shuffled, or shuffled if you prefer)
      const filtered = projectsData.filter((p) => p.category === category);
      setDisplayedProjects(filtered);
    }
  };

  // Calculate pagination based on 'displayedProjects' instead of 'filteredProjects'
  const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = displayedProjects.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    scrollToTop();
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <>
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
            <ProjectItem
              key={project.id}
              project={project}
              onImageClick={setSelectedImage}
            />
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
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? "bg-[#A83552] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
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
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default Projects;
