"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Partner from "../components/home/Partner";
import Arbeiten from "../components/home/Arbeiten";
import Homepage from "../components/home/Homepage";
import Jahrzehnte from "../components/home/Jahrzehnte";
import ProjectEffect from "../components/home/ProjectEffect";
import Unterhalt from "../components/home/Unterhalt";
import Einige from "../components/home/Einige";

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

export default function Home() {
  return (
    <div>
      <Homepage />

      <RevealOnDesktop>
        <Jahrzehnte />
      </RevealOnDesktop>

      <RevealOnDesktop>
        <Arbeiten />
      </RevealOnDesktop>

      <RevealOnDesktop>
        <ProjectEffect />
      </RevealOnDesktop>

      <RevealOnDesktop>
        <Unterhalt />
      </RevealOnDesktop>

      <RevealOnDesktop>
        <Partner />
      </RevealOnDesktop>

      <RevealOnDesktop>
        <Einige />
      </RevealOnDesktop>
    </div>
  );
}
