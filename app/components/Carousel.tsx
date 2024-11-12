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
            active === idx ? "border-[4px] active basis-1/3" : ""
          )}
          style={{
            borderImage: "linear-gradient(135deg, black, white, black) 1",
          }}
        >
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
