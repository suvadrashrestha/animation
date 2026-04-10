"use client";
import { useState } from "react";

import { nohemi, outfit } from "@/lib/font";
import courseData from "@/data/CourseData";
import CourseCard from "@/components/CourseCard";

const CoursesPage = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className=" px-5 sm:px-8 md:px-10 lg:px-18 xl:px-25 py-6 flex  justify-center items-center min-h-screen">
      <div className="w-full h-full ">
        <p
          className={`${outfit.className} text-sm sm:text-lg text-gray-700 md:text-xl lg:text-2xl mb-2 md:mb-4 `}
        >
          Explore our classes and master trending skills!
        </p>
        <p
          className={`${nohemi.className} text-[#2B2B2B] text-xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12`}
        >
          <span className="text-[#1DA077]">What&apos;s Hot Right Now! 🔥</span>
        </p>
        <div className="md:hidden flex h-[80vh] w-full items-center justify-center">
          <p
            className={`${outfit.className} text-[50px] text-gray-500 font-bold`}
          >
            Coming Soon
          </p>
        </div>

        <div className=" flex flex-col md:flex-row gap-4 md:gap-8 w-full">
          {courseData.map((data) => (
            <CourseCard
              key={data.id}
              data={data}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
