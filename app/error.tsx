"use client";

import Image from "next/image";
import imposible from "@/public/imposible.png";

interface ErrorProps {
  error: Error;
}

export default function ErrorPage({ error }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen text-lg font-semibold">
      <Image src={imposible} alt="thanos impossible" width={300} height={200} />
      <p>Impossible🪬</p>
      <p>An Error Occurred</p>
      <p>{error.message}</p>
    </div>
  );
}
