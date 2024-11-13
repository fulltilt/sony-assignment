import React from "react";
import clsx from "clsx";

const Carousel = ({
  images,
  setActive,
  active,
}: {
  images: { idx: string; hasForeground: boolean }[];
  setActive: (x: number) => void;
  active: number;
}) => {
  return (
    <div className="lg:w-[75%] mt-20 text-white z-20 absolute bottom-0 p-12 sm:p-20 grid grid-cols-3 md:flex gap-2 md:gap-4 md:items-end">
      {images.map((pic, idx) => (
        <div
          key={idx}
          className={clsx(
            "rounded-2xl cursor-pointer md:w-[20%] hover:scale-110 duration-200 p-2",
            active === idx ? "active basis-1/3" : ""
          )}
        >
          <div
            className="absolute -inset-1 rounded-2xl z-[-1]"
            style={{
              background: "linear-gradient(135deg, black, white, black) 1",
            }}
          ></div>
          <img
            src={`./${pic.idx}-thumbnail.png`}
            onClick={() => setActive(idx)}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
