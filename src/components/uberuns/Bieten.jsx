"use client";

import React, { useState } from "react";

const Bieten = () => {
  const [activeTab, setActiveTab] = useState("fugendichtungen");

  const Fugendichtungen = [
    {
      id: "01",
      title: "Innenfugen",
      description:
        "In Nasszellen, Küchen und Bodenanschlüssen sind exakte Silikonfugen unerlässlich. Unsere Abdichtungen sind schimmelresistent, pflegeleicht und langlebig.",
    },
    {
      id: "02",
      title: "Aussenfugen",
      description:
        "Aussenfugen müssen Bewegungen, Temperaturwechsel und Witterung dauerhaft ausgleichen. Wir verwenden UV- und witterungsbeständige Dichtstoffe.",
    },
    {
      id: "03",
      title: "Fugensanierungen",
      description:
        "Wir entfernen alte Dichtstoffe und erneuern sie fachgerecht mit modernen, elastischen Materialien für dauerhafte Dichtheit.",
    },
    {
      id: "04",
      title: "Mörtelfugen zwischen Belägen",
      description:
        "Gleichmässige Mörtelfugen sichern Beständigkeit und eine saubere Optik. Wir führen Neuverfugungen und Sanierungen präzise aus.",
    },
    {
      id: "05",
      title: "Schimmelbeseitigung",
      description:
        "Wir entfernen befallene Bereiche fachgerecht und erneuern die Fugen mit schimmelresistenten Materialien.",
    },
  ];

  const Brandabschottungen = [
    {
      id: "01",
      title: "Weichabschottungen",
      description:
        "Ideal für Öffnungen mit Kabeltrassen oder einzelnen Leitungen, bei denen eine flexible Lösung erforderlich ist.",
    },
    {
      id: "02",
      title: "Mörtelabschottungen",
      description:
        "Dauerhafter Verschluss von Durchdringungen in massiven Wänden und Decken für Kabel, Rohre und Brandschutzklappen.",
    },
    {
      id: "03",
      title: "Brandschutzmanschetten",
      description:
        "Schäumen bei Hitze auf und verschliessen Öffnungen von Kunststoffrohren automatisch, um Brand- und Rauchtrennung zu sichern.",
    },
    {
      id: "04",
      title: "Brandschutzfugen",
      description:
        "Sichern den Feuerwiderstand und die Rauchdichtheit von Wand-, Decken- und Bauteilanschlüssen.",
    },
    {
      id: "05",
      title: "Brandschutzsteine",
      description:
        "Flexible, modulare Lösungen für Brandabschottungen. Ermöglichen schnelle Montage und Nachinstallationen.",
    },
  ];

  const Abdichtungen = [
    {
      id: "01",
      title: "Flüssigkunststoff",
      description:
        "Nahtlose, hochflexible Abdichtungen auf Basis von Flüssigkunststoff. Ideal für Balkone, Terrassen und Anschlüsse.",
    },
    {
      id: "02",
      title: "CombiFlex",
      description:
        "Professionelle Bandabdichtungen für Arbeits- und Bewegungsfugen im Hoch- und Tiefbau.",
    },
  ];

  const Unterhalt = [
    {
      id: "01",
      title: "Kontrollen",
      description:
        "Sicht- und Funktionskontrolle bestehender Fugen und Abschottungen auf Schäden, Alterung oder Undichtigkeiten.",
    },
    {
      id: "02",
      title: "Serviceaufträge",
      description:
        "Schnelle und flexible Ausführung kleinerer Reparatur- und Instandhaltungsarbeiten effizient und sauber erledigt.",
    },
    {
      id: "03",
      title: "Wartungsaufträge",
      description:
        "Individuell vereinbarte Wartungsverträge mit periodischen Kontrollen und Dokumentation.",
    },
  ];

  const categories = [
    {
      id: "fugendichtungen",
      number: "(01)",
      title: "Fugendichtungen",
      data: Fugendichtungen,
      sidebarText:
        "Fachgerecht ausgeführte Fugen sind entscheidend für Dichtheit, Langlebigkeit und das Erscheinungsbild eines Bauwerks.",
    },
    {
      id: "brandabschottungen",
      number: "(02)",
      title: "Brandabschottungen",
      data: Brandabschottungen,
      sidebarText:
        "Umfassende Lösungen für den baulichen Brandschutz, um Sicherheit und Normkonformität zuverlässig zu gewährleisten.",
    },
    {
      id: "abdichtungen",
      number: "(03)",
      title: "Abdichtungen",
      data: Abdichtungen,
      sidebarText:
        "Nahtlose und flexible Abdichtungen für Balkone, Terrassen und Anschlüsse – dauerhaft dicht und beständig.",
    },
    {
      id: "unterhalt",
      number: "(04)",
      title: "Unterhalt und Service",
      data: Unterhalt,
      sidebarText:
        "Regelmässiger Unterhalt und fachgerechter Service sichern die Funktion und Lebensdauer von Fugen-, Abdichtungs- und Brandschutzsystemen.",
    },
  ];

  const currentCategory = categories.find((cat) => cat.id === activeTab);
  const contentData = currentCategory ? currentCategory.data : [];

  const midPoint = Math.ceil(contentData.length / 2);
  const leftColumnData = contentData.slice(0, midPoint);
  const rightColumnData = contentData.slice(midPoint);

  return (
    <section id="Bieten">
      <div className="flex flex-col items-start justify-between container mx-auto mt-20">
        <h1 className="text-[#A83552] font-medium tracking-widest uppercase mb-2">
          WAS WIR BIETEN
        </h1>
        <h1 className="text-3xl lg:text-[50px] font-medium leading-tight">
          Unsere Dienstleistungen
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between container mx-auto py-10 lg:py-20 px-4 lg:px-0 gap-10 lg:gap-0">
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-[35%]">
          <div className="w-full flex flex-col border-t border-gray-200 ">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className="w-full text-left py-4 border-b border-gray-200 group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#A83552] font-medium text-sm lg:text-base">
                    {category.number}
                  </span>
                  <span
                    className={`text-lg lg:text-[20px]  transition-colors duration-300 ${
                      activeTab === category.id
                        ? "text-black"
                        : "text-[#555555] group-hover:text-black"
                    }`}
                  >
                    {category.title}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeTab === category.id
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#555555] text-sm lg:text-[15px] leading-relaxed pl-0 ">
                    {category.sidebarText}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col items-center lg:flex-row gap-4">
          <div className="grid grid-cols-1 gap-4 w-full lg:w-1/2 self-start">
            {leftColumnData.map((item, index) => (
              <div
                key={index}
                className={`p-6 lg:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-between gap-6 lg:gap-10 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300 ${
                  item.id === "01" ? "mt-30" : ""
                }`}
              >
                <h1 className="text-lg lg:text-[20px]">{item.id}</h1>
                <h1 className="uppercase text-lg lg:text-[20px] ">
                  {item.title}
                </h1>
                <p className="text-sm lg:text-[14px] group-hover:text-[#FFC1C2] mb-4 lg:mb-15">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 w-full lg:w-1/2 self-start">
            {rightColumnData.map((item, index) => (
              <div
                key={index}
                className="p-6 lg:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-between gap-6 lg:gap-10 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300"
              >
                <h1 className="text-lg lg:text-[20px]">{item.id}</h1>
                <h1 className="uppercase text-lg lg:text-[20px] ">
                  {item.title}
                </h1>
                <p className="text-sm lg:text-[14px] group-hover:text-[#FFC1C2] mb-4 lg:mb-15">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bieten;
