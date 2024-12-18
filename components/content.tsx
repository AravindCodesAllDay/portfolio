import Image from "next/image";

import LinksComponent from "./links";
import logo from "@/public/logo.svg";

export default function Content() {
  return (
    <div className="w-full h-full z-10 flex flex-col md:flex-row justify-around items-center">
      <div className="space-y-8 flex flex-col items-center">
        <Image src={logo} alt="logo" priority width={200} height={200} />
        <h1 className="font-bold text-2xl text-light">AravindCodesAllDay</h1>
      </div>
      <LinksComponent />
    </div>
  );
}
