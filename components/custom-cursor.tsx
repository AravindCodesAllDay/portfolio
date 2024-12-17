"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import lightCursor from "@/public/cursor-light.png";
import darkCursor from "@/public/cursor-dark.png";
import { useTheme } from "./theme-provider";

export default function CustomCursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsLinkHovered(true);
    const handleMouseOut = () => setIsLinkHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div
      className={`hidden md:block fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-200 ease-out ${
        isLinkHovered ? "w-10 h-10" : "w-7 h-7"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {theme == "light" ? (
        <Image src={lightCursor} alt="cursor" />
      ) : (
        <Image src={darkCursor} alt="cursor" />
      )}
    </div>
  );
}
