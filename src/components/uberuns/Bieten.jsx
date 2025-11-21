"use client";

import React, { useState } from "react";

const Bieten = () => {
  const [activeTab, setActiveTab] = useState("abdichtungen");

  const abdichtungenContent = [
    {
      id: "01",
      title: "Innenfugen",
      description:
        "In Nasszellen, Küchen und Bodenanschlüssen sind exakte Silikonfugen unerlässlich. Unsere Abdichtungen sind schimmelresistent, pflegeleicht und langlebig. Sie ermöglichen hygienische und optisch einwandfreie Lösungen.",
    },
    {
      id: "02",
      title: "Aussenfugen",
      description:
        "Aussenfugen müssen Bewegungen, Temperaturwechsel und Witterung dauerhaft ausgleichen. Wir verwenden UV- und witterungsbeständige Dichtstoffe, die Fassaden, Fenster und Bauelemente zuverlässig schützen.",
    },
    {
      id: "03",
      title: "Fugensanierungen",
      description:
        "Rissige oder gealterte Fugen beeinträchtigen Funktion und Optik. Wir entfernen alte Dichtstoffe und erneuern sie fachgerecht mit modernen, elastischen Materialien. Dies sorgt für dauerhafte Dichtheit und ein sauberes Erscheinungsbild.",
    },
    {
      id: "04",
      title: "Mörtelfugen zwischen Belägen",
      description:
        "Gleichmässige Mörtelfugen sichern Beständigkeit und eine saubere Optik. Wir führen Neuverfugungen und Sanierungen präzise und technisch korrekt aus.",
    },
    {
      id: "05",
      title: "Schimmelbeseitigung",
      description:
        "Schimmel entsteht durch Feuchtigkeit, ungenügende Abdichtungen oder mangelnde Belüftung. Wir entfernen befallene Bereiche fachgerecht und erneuern die Fugen mit schimmelresistenten Materialien. Dies sorgt für dauerhaft saubere und hygienische Oberflächen.",
    },
    {
      id: "06",
      title: "Flüssigkunststoff",
      description:
        "Nahtlose und flexible Abdichtungen für Balkone, Terrassen, Anschlüsse und Details. Dauerhaft dicht, UV-beständig und rissüberbrückend.",
    },
    {
      id: "07",
      title: "CombiFlex",
      description:
        "Bandabdichtungen für Arbeits- und Bewegungsfugen im Hoch- und Tiefbau. Geeignet für Bauteile, die Setzungen oder Bewegungen aufnehmen müssen. Elastisch und zuverlässig dicht.",
    },
  ];

  const serviceContent = [
    {
      id: "01",
      title: "Weichabschottungen",
      description:
        "Weichabschottungen werden für Kabel- und Kombiabschottungen eingesetzt. Sie eignen sich ideal für Öffnungen mit Kabeltrassen oder einzelnen Leitungen, bei denen eine flexible und gut zugängliche Lösung erforderlich ist.",
    },
    {
      id: "02",
      title: "Mörtelabschottungen",
      description:
        "Mörtelabschottungen dienen dem dauerhaften Verschluss von Durchdringungen in massiven Wänden und Decken. Sie werden bei Kabeln, Rohrleitungen sowie beim Einbau von Brandschutzklappen in Lüftungs- und Klimakanälen eingesetzt und sorgen für einen beständigen und sicheren Brandschutz.",
    },
    {
      id: "03",
      title: "Brandschutzmanschetten",
      description:
        "Brandschutzmanschetten werden bei Kunststoffrohrleitungen eingesetzt. Da Kunststoffrohre im Brandfall abschmelzen und die Öffnung freigeben würden, schäumt die Manschette bei Hitze auf und verschliesst die Öffnung automatisch. So bleibt die Brand- und Rauchtrennung zuverlässig erhalten.",
    },
    {
      id: "05",
      title: "Brandschutzsteine und Brandschutzkissen",
      description:
        "Brandschutzsteine und Brandschutzkissen sind flexible, modulare und wartungsfreundliche Lösungen für Brandabschottungen. Sie lassen sich jederzeit einfach anpassen und ermöglichen eine schnelle Montage sowie unkomplizierte Nachinstallationen.",
    },
    {
      id: "04",
      title: "Brandschutzfugen",
      description:
        "Brandschutzfugen sichern den Feuerwiderstand und die Rauchdichtheit von Wand-, Decken- und Bauteilanschlüssen. Sie werden mit geprüften Brandschutzdichtstoffen ausgeführt, welche die Brand- und Rauchtrennung zuverlässig und dauerhaft gewährleisten.",
    },
  ];

  const contentData =
    activeTab === "abdichtungen" ? abdichtungenContent : serviceContent;

  return (
    <section id="Bieten">
      <div className="flex flex-col lg:flex-row items-start justify-between container mx-auto py-10 lg:py-20 px-4 lg:px-0 gap-10 lg:gap-0">
        <div className="flex flex-col items-start justify-between gap-6 lg:gap-10 w-full lg:w-[35%] mt-0 lg:mt-45">
          <h1 className="text-[#A83552] font-medium tracking-widest uppercase">
            WAS WIR BIETEN
          </h1>
          <h1 className="text-3xl lg:text-[38px] font-medium">
            Unterhalt und Service
          </h1>

          <div className="flex flex-row items-center justify-start relative bg-gray-100 rounded-full p-1 w-full sm:w-auto max-w-[400px]">
            <div
              className={`absolute h-[calc(100%-8px)] bg-[#A83552] rounded-full transition-all duration-300 ease-in-out top-1 bottom-1 ${
                activeTab === "abdichtungen"
                  ? "left-1 w-[calc(50%+10px)]"
                  : "left-[50%] w-[calc(50%-4px)]"
              }`}
            ></div>

            <button
              onClick={() => setActiveTab("abdichtungen")}
              className={`relative z-10 uppercase text-xs lg:text-[12px]  w-1/2 px-12  lg:px-8 py-3 lg:py-4 rounded-full transition-colors duration-300 text-center ${
                activeTab === "abdichtungen" ? "text-white" : "text-black"
              }`}
            >
              Abdichtungen
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`relative z-10 uppercase text-xs lg:text-[12px]  w-1/2 px-8 lg:px-8 py-3 lg:py-4 rounded-full transition-colors duration-300 text-center ${
                activeTab === "service" ? "text-white" : "text-black"
              }`}
            >
              Service
            </button>
          </div>

          <p className="text-[#555555] text-base lg:text-lg leading-relaxed">
            {activeTab === "abdichtungen"
              ? "Fachgerecht ausgeführte Fugen sind entscheidend für Dichtheit, Langlebigkeit und das Erscheinungsbild eines Bauwerks. Mit hochwertigen Materialien, sauberer Ausführung und langjähriger Erfahrung sorgen wir für präzise Abdichtungen im Innen- und Aussenbereich."
              : "Professioneller Unterhalt und umfassender Service für Ihre Immobilie. Wir bieten langfristige Betreuung und kompetente Lösungen für alle Anforderungen."}
          </p>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col lg:flex-row items-start justify-between gap-5">
          {contentData.length <= 4 ? (
            <div className="grid grid-cols-1 lg:grid-rows-3 gap-4 w-full">
              {contentData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 lg:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-between gap-6 lg:gap-10 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300"
                >
                  <h1 className="text-lg lg:text-[20px]">{item.id}</h1>
                  <h1 className="uppercase text-lg lg:text-[20px] font-medium">
                    {item.title}
                  </h1>
                  <p className="text-sm lg:text-[14px] group-hover:text-[#FFC1C2] mb-4 lg:mb-15">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center lg:flex-row gap-4 w-full">
              <div className="grid grid-cols-1 lg:grid-rows-3 gap-4 w-full lg:w-1/2">
                {contentData.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="p-6 lg:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-between gap-6 lg:gap-10 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300"
                  >
                    <h1 className="text-lg lg:text-[20px]">{item.id}</h1>
                    <h1 className="uppercase text-lg lg:text-[20px] font-medium">
                      {item.title}
                    </h1>
                    <p className="text-sm lg:text-[14px] group-hover:text-[#FFC1C2] mb-4 lg:mb-15">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-rows-4 gap-4 w-full lg:w-1/2">
                {contentData.slice(3).map((item, index) => (
                  <div
                    key={index}
                    className="p-6 lg:p-[30px] group hover:bg-[#A83552] flex flex-col items-start justify-between gap-6 lg:gap-10 text-black hover:text-white border border-[#E0E0E0] rounded-xl transition-all duration-300"
                  >
                    <h1 className="text-lg lg:text-[20px]">{item.id}</h1>
                    <h1 className="uppercase text-lg lg:text-[20px] font-medium">
                      {item.title}
                    </h1>
                    <p className="text-sm lg:text-[14px] group-hover:text-[#FFC1C2] mb-4 lg:mb-15">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Bieten;
