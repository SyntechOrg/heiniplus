"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import arrow from "../../../public/images/arrow.svg";
import rectangle from "../../../public/images/Rectangle.svg";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  // Helper to check active state (requires both Path AND Hash to match)
  // Default targetHash is "" (empty), meaning "active only if there is no hash"
  const isActive = (path, targetHash = "") => {
    return pathname === path && currentHash === targetHash;
  };

  // Update hash on mount, scroll (optional), and path change
  useEffect(() => {
    // Function to update hash state
    const updateHash = () => {
      // window.location.hash includes the '#', e.g., "#Bieten"
      setCurrentHash(window.location.hash);
    };

    // Initial check
    updateHash();

    // Listen for hash changes (e.g. clicking anchor links)
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  // Also update hash when pathname changes (e.g. navigating from another page)
  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:py-6 relative z-[10000]">
        <Link href="/">
          <div className="shrink-0">
            <Image src={logo} alt="Logo" className="w-[80%]" />
          </div>
        </Link>

        <nav className="hidden lg:block text-white uppercase">
          <ul className="flex items-baseline justify-center gap-8 lg:gap-10">
            {/* Startseite Link (Active only if hash is empty) */}
            <Link href="/">
              <li
                className={`group flex cursor-pointer flex-col items-center gap-1 transition-transform duration-200 ${
                  isActive("/", "")
                    ? "-translate-y-1 scale-[1.03]"
                    : "hover:-translate-y-1 hover:scale-[1.03]"
                }`}
              >
                <p className="text-sm md:text-base">Startseite</p>
                <Image
                  src={rectangle}
                  alt="underline"
                  className={`transition-all duration-200 ${
                    isActive("/", "")
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                  }`}
                />
              </li>
            </Link>

            {/* Leistungen Link (Active only if hash is #Bieten) */}
            <Link href="/uberuns#Bieten">
              <li
                className={`group flex cursor-pointer flex-col items-center gap-1 transition-transform duration-200 ${
                  isActive("/uberuns", "#Bieten")
                    ? "-translate-y-1 scale-[1.03]"
                    : "hover:-translate-y-1 hover:scale-[1.03]"
                }`}
              >
                <p className="text-sm md:text-base">Leistungen</p>
                <Image
                  src={rectangle}
                  alt="underline"
                  className={`transition-all duration-200 ${
                    isActive("/uberuns", "#Bieten")
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                  }`}
                />
              </li>
            </Link>

            {/* Über uns Link (Active only if hash is EMPTY) */}
            <Link href="/uberuns">
              <li
                className={`group flex cursor-pointer flex-col items-center gap-1 transition-transform duration-200 ${
                  isActive("/uberuns", "")
                    ? "-translate-y-1 scale-[1.03]"
                    : "hover:-translate-y-1 hover:scale-[1.03]"
                }`}
              >
                <p className="text-sm md:text-base">Über uns</p>
                <Image
                  src={rectangle}
                  alt="underline"
                  className={`transition-all duration-200 ${
                    isActive("/uberuns", "")
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                  }`}
                />
              </li>
            </Link>

            {/* Referenzen Link */}
            <Link href="/referenzen">
              <li
                className={`group flex cursor-pointer flex-col items-center gap-1 transition-transform duration-200 ${
                  isActive("/referenzen", "")
                    ? "-translate-y-1 scale-[1.03]"
                    : "hover:-translate-y-1 hover:scale-[1.03]"
                }`}
              >
                <p className="text-sm md:text-base">Referenzen</p>
                <Image
                  src={rectangle}
                  alt="underline"
                  className={`transition-all duration-200 ${
                    isActive("/referenzen", "")
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                  }`}
                />
              </li>
            </Link>

            <Link href="/kontakt">
              <li>
                <button className="flex flex-row items-center gap-4 rounded-full bg-[#A83552] px-8 py-3 text-sm md:text-base tracking-wide transition-transform duration-200 hover:scale-105">
                  <span>Kontakt</span>
                  <Image
                    src={arrow}
                    alt="Pfeil"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                </button>
              </li>
            </Link>
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[9998] bg-black h-screen transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-screen w-full text-white uppercase space-y-8">
          <Link
            href="/"
            className={`text-2xl font-medium tracking-wider transition-colors ${
              isActive("/", "") ? "text-[#A83552]" : "hover:text-[#A83552]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Startseite
          </Link>
          <Link
            href="/uberuns#Bieten"
            className={`text-2xl font-medium tracking-wider transition-colors ${
              isActive("/uberuns", "#Bieten")
                ? "text-[#A83552]"
                : "hover:text-[#A83552]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Leistungen
          </Link>
          <Link
            href="/uberuns"
            className={`text-2xl font-medium tracking-wider transition-colors ${
              isActive("/uberuns", "")
                ? "text-[#A83552]"
                : "hover:text-[#A83552]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Über uns
          </Link>
          <Link
            href="/referenzen"
            className={`text-2xl font-medium tracking-wider transition-colors ${
              isActive("/referenzen", "")
                ? "text-[#A83552]"
                : "hover:text-[#A83552]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Referenzen
          </Link>

          <button
            className="mt-4 flex items-center gap-3 rounded-full bg-[#A83552] px-10 py-4 text-xl tracking-wide hover:bg-[#8a2b42] transition-colors"
            onClick={() => {
              window.location.href = "/kontakt";
              setIsOpen(false);
            }}
          >
            <span>Kontakt</span>
            <Image src={arrow} alt="Pfeil" className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
