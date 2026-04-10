"use client";

import JourneyCard from "@/components/JourneyCard";
import JourneyChild from "@/components/JourneyChild";
import { data } from "@/data/JourneyData";
import { nohemi, outfit } from "@/lib/font";

const Journey = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="px-2 sm:px-5 md:px-8 lg:px-18 xl:px-25 py-6 ">
        <div>
          <p
            className={`${outfit.className} mt-3 text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-[#414141]`}
          >
            Your SkillShikshya Journey
          </p>
          <p
            className={`${nohemi.className}  mt-1 sm:mt-2 md:mt-4 lg:mt-6 tracking-wide font-bold text-lg sm:text-2xl lg:text-3xl `}
          >
            <span className="text-[#1DA077]"> Step </span>In.
            <span className="text-[#1DA077]"> Skill </span>Up.
            <span className="text-[#1DA077]"> Stand </span>Out.🚀
          </p>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:gap-x-8 gap-5 sm:gap-x-4 sm:gap-y-8 lg:gap-y-10">
          {data.map((item) => (
            <div
              key={item.id}
              className={`${item.children && "group"} h-40 sm:h-50 md:h-55 lg:h-70  xl:h-87  relative`}
            >
              {item.children && <JourneyChild item={item} />}
              <JourneyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
