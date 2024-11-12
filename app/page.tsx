"use client";

import clsx from "clsx";
import Carousel from "./components/Carousel";
import { useState } from "react";
import useWindowSize from "./hooks/useWindowSize";

const images = [
  { idx: "1", hasForeground: true },
  { idx: "2", hasForeground: false },
  { idx: "3", hasForeground: false },
  { idx: "4", hasForeground: false },
  { idx: "5", hasForeground: false },
  { idx: "6", hasForeground: false },
];

export default function Home() {
  const windowSize = useWindowSize();

  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        backgroundImage:
          windowSize.width > 768
            ? `linear-gradient(to left, rgba(37, 45, 55, 0) 40%, #000000 72.92%, #09101A 100%),
          linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, #000000 100%), url("./${images[active].idx}-background.png")`
            : `linear-gradient(to left, rgba(37, 45, 55, 0) 60%, #000000 95%, #09101A 100%),
          linear-gradient(180deg, rgba(0, 0, 0, 0) 15%, #000000 60%), url("./${images[active].idx}-background.png")`,
      }}
      className="h-screen bg-cover bg-center relative overflow-clip overlay"
    >
      <div className="absolute p-12 sm:p-20 z-10">
        <h2 className="text-[17px] sm:text-[31px] font-black text-white leading-5 sm:leading-8 w-32 sm:w-56">
          MORE FROM RICO THE DOG
        </h2>

        <button className="text-[12px] sm:text-[14px] font-extrabold text-white border-solid border-2 rounded-3xl p-2 mt-24">
          RICO IS BACK!
        </button>

        <h1 className="text-[49px] sm:text-[35px] font-black text-white mt-2 ">
          RICOBOT
        </h1>

        <p className="text-[14px] sm:text-[16px] font-medium text-white w-72 sm:w-96 mt-2">
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </p>

        <button className="text-[14px] sm:text-[16px] font-black text-black bg-white rounded-[2rem] mt-6 p-4">
          LEARN MORE
        </button>
      </div>
      <Carousel images={images} setActive={setActive} active={active} />

      {images[active].hasForeground && (
        <img
          src={`./${images[active].idx}-foreground-cutout.png`}
          className={clsx(
            "absolute left-[50%] w-1/2 h-auto top-[-70px] sm:top-[-90px] z-0"
          )}
        />
      )}
    </div>
  );
}
