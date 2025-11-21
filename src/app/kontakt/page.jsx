"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import frame2 from "../../../public/images/frame2.jpg";
import StartPage from "../../components/general/StartPage";
import KontaktForm from "../../components/kontakt/KontaktForm";
import StudioLocations from "../../components/kontakt/StudioLocations";

const RevealOnDesktop = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div>
      <StartPage image={frame2} title="Kontakt" />

      <RevealOnDesktop>
        <KontaktForm />
      </RevealOnDesktop>

      <RevealOnDesktop>
        <StudioLocations />
      </RevealOnDesktop>
    </div>
  );
};

export default Page;
