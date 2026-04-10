import { nohemi, outfit } from "@/lib/font";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ICourseData {
  id: number;
  title: string;
  description: string;
  number: number;
}

const CourseCard = ({
  data,
  activeId,
  setActiveId,
}: {
  data: ICourseData;
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isActive = data.id === activeId;

  return (
    <div
      onClick={() => {
        setActiveId(data.id);
      }}
      className={` hidden relative group md:flex   rounded-3xl h-55 sm:h-52 md:h-96  2xl:h-110 cursor-pointer transition-all bg-[#C33241] duration-700 ease-in-out ${isActive ? "md:flex-[2.5] " : "md:flex-1"} `}
    >
      <div
        className={`-top-[10%] left-1/2 -translate-x-1/2  ${outfit.className} ${isActive ? "hidden" : "flex opacity-0"} flex-col items-center  group-hover:opacity-100 transition-all duration-500 ease-in-out absolute z-10`}
      >
        <p>Click me</p>
        <Image src={"/images/group.png"} width={30} height={30} alt="arrow" />
      </div>
      <div className="bg-[#C33241]  w-full relative overflow-hidden rounded-3xl h-full  flex">
        <div
          className={`${isActive ? "scale-0" : "scale-100"} origin-bottom-left absolute rounded-full w-[130%]  md:h-[140%] pointer-events-none transition-transform z-1 duration-1000 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  aspect-square `}
        >
          <div
            className={` bg-[#F9EBEC]  relative h-full  aspect-square    rounded-full  flex flex-col justify-center items-center `}
          >
            <div className="flex-[1.5] h-full  w-full flex justify-start items-start  relative">
              <div
                className={` ${outfit.className} ${isActive ? "rotate-90" : ""} transition-all duration-500 ease-in-out  text-[#C33241] flex flex-col  left-1/2 -translate-x-1/2 absolute bottom-0  h-50 w-49 -rotate-90 justify-center  gap-3 `}
              >
                <span className="md:text-2xl lg:text-3xl font-bold">
                  {data.title}
                </span>
                <span className="md:text-sm lg:text-md">
                  {data.description}
                </span>
              </div>
            </div>
            <div className="flex-1 text-[#C33241] flex justify-center relative items-start ">
              <p
                className={`mb-12 ${nohemi.className}  md:text-[85px] lg:text-[130px] font-bold`}
              >
                {data.number}
              </p>
              <p
                className={` ${nohemi.className} absolute md:text-[50px] lg:text-[60px] font-extrabold -right-4 -top-4`}
              >
                +
              </p>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden bg-[#C33241] w-full     h-full text-white px-8 flex-col">
          <div
            className={`relative ${isActive ? "left-0" : "-left-full"} transition-all duration-1000 ease-in-out flex-[1.5]`}
          >
            <div
              className={`flex items-center ${outfit.className} gap-2 pt-3 justify-end `}
            >
              <p>View all Courses</p>
              <FaArrowRight className="animate-bounce" />
            </div>
            <div className={` flex mt-10 relative`}>
              <Image
                className="flex-1 "
                src={"/icon/react.svg"}
                width={50}
                height={50}
                alt="icon"
              />
              <Image
                className="flex-1"
                src={"/icon/like.svg"}
                width={50}
                height={50}
                alt="icon"
              />
              <Image
                className="flex-1"
                src={"/icon/vue.svg"}
                width={50}
                height={50}
                alt="icon"
              />
              <Image
                className="flex-1"
                src={"/icon/pencil.svg"}
                width={50}
                height={50}
                alt="icon"
              />
            </div>
          </div>
          <div
            className={`flex-1 ${isActive ? "" : "hidden h-0 w-0"} overflow-hidden flex  lg:px-10 md:gap-10 lg:gap-8 items-center  ${isActive ? "right-0" : "-right-full"} transition-all duration-1000 ease-in-out`}
          >
            <div className=" relative ">
              <p
                className={`${nohemi.className} leading-none md:text-[90px]  lg:text-[130px] font-bold `}
              >
                {data.number}
              </p>
              <span
                className={`${nohemi.className} md:text-[50px] lg:text-[60px] absolute -top-10 -right-5 font-bold`}
              >
                +
              </span>
            </div>
            <div
              className={`${outfit.className}  relative flex flex-col gap-3`}
            >
              <p className=" md:text-2xl lg:text-3xl -mt-6 font-bold">
                {data.title}
              </p>
              <p className="md:text-sm lg:text-md">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
