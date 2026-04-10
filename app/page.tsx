"use client";
import { outfit } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";

const RootPage = () => {
  return (
    <div
      className={`${outfit.className} flex flex-col justify-center items-center min-h-screen gap-8 px-4 py-10`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Trainee Tasks 🚀🚀
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {/* Task 1 */}
        <Link
          className="flex flex-col items-center p-4 shadow-md rounded-lg hover:shadow-xl transition w-full sm:w-[45%] md:w-[30%]"
          href="journey"
        >
          <div className="w-full relative aspect-square">
            <Image
              src="/images/Task_1.png"
              alt="journey"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-center mt-2">View Task 1 ...</p>
        </Link>

        {/* Task 2 */}
        <Link
          className="flex flex-col items-center p-4 shadow-md rounded-lg hover:shadow-xl transition w-full sm:w-[45%] md:w-[30%]"
          href="course"
        >
          <div className="w-full relative aspect-square">
            <Image
              src="/images/Task_2.png"
              alt="task2"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-center mt-2">View Task 2 ...</p>
        </Link>

        {/* Task 3 */}
        <Link
          className="flex flex-col items-center p-4 shadow-md rounded-lg hover:shadow-xl transition w-full sm:w-[45%] md:w-[30%]"
          href="users"
        >
          <div className="w-full relative aspect-square">
            <Image
              src="/images/task_3.png"
              alt="task3"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-center mt-2">View Task 3 ...</p>
        </Link>
      </div>
    </div>
  );
};

export default RootPage;
