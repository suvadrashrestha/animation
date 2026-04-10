"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { nohemi } from "../lib/font";

export interface DataItem {
  id: number;
  title: string;
  subTitle: string;
  path: string;
  background_color: string;
  description: string;
  children: { title: string; path: string; sticker?: string }[];
}

const JourneyChild = ({ item }: { item: DataItem }) => {
  const [dataIndex, setDataIndex] = React.useState(0);

  const handleNext = () => {
    setDataIndex((prevIndex) =>
      prevIndex === item.children!.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setDataIndex((prevIndex) =>
      prevIndex === 0 ? item.children!.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div
      style={{ backgroundColor: item.background_color }}
      className={`sm:rounded-[20px] rounded-sm lg:rounded-[30px] h-40 sm:h-50 overflow-hidden opacity-0  group-hover:opacity-100  transition-all duration-1000 ease-in-out  md:h-55 lg:h-70 flex-col xl:h-87 w-full absolute flex justify-between  items-center  `}
    >
      <div className="bg-[#FAFAFA] z-1 sm:w-22 sm:h-17 md:w-25 md:h-20 w-20 h-15 lg:w-40 lg:h-25 top-1/2 -translate-y-1/2 -left-10 lg:-left-20 absolute flex justify-end   items-center rounded-full">
        <div
          onClick={handlePrev}
          className="  w-10 h-10 md:w-15 md:h-15 cursor-pointer bg-[#10182814] flex justify-center items-center mr-2 md:mr-4  rounded-full shadow-lg"
        >
          <FaArrowLeft className="text-[20px]" />
        </div>
      </div>

      <div className="bg-[#FAFAFA] z-1  sm:w-22 sm:h-17 md:w-25 md:h-20 w-20 h-15 lg:w-40 lg:h-25 top-1/2 -translate-y-1/2 -right-10 lg:-right-20 absolute flex justify-start   items-center rounded-full">
        <div
          onClick={handleNext}
          className="w-10 h-10 md:w-15 md:h-15 cursor-pointer bg-[#10182814] flex justify-center items-center ml-2 md:ml-4  rounded-full shadow-lg"
        >
          <FaArrowRight className="text-[20px]" />
        </div>
      </div>
      <p
        className={`pt-5 sm:pt-10 lg:pt-15 text-center ${nohemi.className} text-[#FAFAFA] font-bold xl:text-xl text-sm md:text-lg px-5 lg:px-20  tracking-wide`}
      >
        {item.children[dataIndex].title}
      </p>
      <div className="w-full h-40 sm:h-50  md:h-55 lg:h-70 xl:h-87 relative">
        {item.children[dataIndex].sticker && (
          <Image
            src={item.children[dataIndex].sticker!}
            alt="sticker "
            width={50}
            height={50}
            className=" absolute left-15 sm:left-20 w-15 h-15 lg:w-25 lg:h-25"
          />
        )}
        <Image
          src={item.children[dataIndex].path}
          alt={item.title}
          fill
          loading="eager"
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.children[dataIndex].sticker && (
          <Image
            src={item.children[dataIndex].sticker!}
            alt="sticker"
            width={50}
            height={50}
            className=" absolute bottom-5 right-15 sm:right-10 w-15 h-15 lg:w-25 lg:h-25"
          />
        )}
      </div>
    </div>
  );
};

export default JourneyChild;
