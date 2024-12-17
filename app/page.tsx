import Image from "next/image";

import logo from "@/public/logo.svg";
import Links from "../components/links";
import ModeToggle from "@/components/mode-toggle";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <main className="w-screen h-screen flex relative bg-backgroungimg bg-center bg-no-repeat bg-cover">
      <div className="hidden md:block w-1/2 h-screen right-0 bg-light dark:bg-dark transition-colors duration-200 ease-in-out clip-desktop absolute "></div>
      <div className="md:hidden w-screen h-1/2 bottom-0 bg-light dark:bg-dark transition-colors duration-200 ease-in-out clip-mobile absolute "></div>

      <div className="w-full h-full z-10 flex flex-col md:flex-row justify-around items-center">
        <div className="space-y-8 flex flex-col items-center">
          <Image src={logo} alt="logo" />
          <h1 className="font-bold text-2xl text-light">AravindCodesAllDay</h1>
        </div>
        <Links />
      </div>
      <Resume />
      <ModeToggle />
    </main>
  );
}
