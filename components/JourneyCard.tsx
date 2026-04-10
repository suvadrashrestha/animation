import { nohemi, outfit } from "@/lib/font";
import Image from "next/image";

const JourneyCard = ({
  item,
}: {
  item: {
    background_color: string;
    id: number;
    title: string;
    subTitle: string;
    description: string;
    path: string;
  };
}) => {
  return (
    <div
      style={{ backgroundColor: item.background_color }}
      className={` group-hover:-translate-x-full pointer-events-none group-hover:opacity-0 transition-all duration-1000 ease-in-out h-40 sm:h-50 md:h-55 lg:h-70  xl:h-87 absolute rounded-sm sm:rounded-[20px] lg:rounded-[30px]`}
    >
      <div
        className={` ${item.id % 2 != 0 && "flex-row-reverse"} p-3 sm:py-5 lg:p-10 xl:py-14 xl:px-9 flex   relative  h-full `}
      >
        <div
          className={`absolute ${item.id === 0 && "bottom-[-5%] sm:bottom-[-10%] left-[-2%] sm:left-[-8%] lg:left-[-10%]"} ${item.id == 1 && "top-0 lg:top-8 right-0"}
                  ${item.id === 2 && "left-[-2%]  lg:left-[-10%] sm:bottom-[-8%] bottom-[-8%] lg:bottom-[-5%]"}  ${item.id === 3 && " bottom-[-8%] sm:bottom-[-12%] lg:bottom-[-10%] right-[-2%] sm:right-[-3%] "}   flex justify-center items-center  `}
        >
          <Image
            className={` ${item.id === 0 && " sm:w-35 lg:w-50 xl:w-65"} 
                    ${item.id === 1 && "w-20 lg:w-30 xl:w-45"}  ${item.id === 2 && " w-28 sm:w-35 lg:w-55 xl:w-75"}  ${item.id === 3 && "sm:w-35 lg:w-45 xl:w-55"} w-25 object-contain inline-flex  `}
            width={`${item.id == 1 ? 200 : 300}`}
            height={0}
            loading="eager"
            style={{ height: "auto" }}
            src={item.path}
            alt={item.title}
          />
        </div>
        <div
          className={` flex-3 ${outfit.className} ${item.id % 2 === 0 ? "text-right" : "text-left"} text-[#FAFAFA] h-full flex flex-col justify-center`}
        >
          <p
            className={`${nohemi.className} ${item.id === 2 && "text-nowrap"} font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-wide`}
          >
            {item.title}
          </p>
          <p className="mt-[-6] text-sm md:text-base lg:text-xl xl:text-2xl ">
            {item.subTitle}
          </p>
          <p
            className={`${item.id % 2 === 0 ? "ml-20 sm:ml-25 lg:ml-30 xl:ml-40" : "mr-20 sm:mr-25 lg:mr-30 xl:mr-40"}  text-xs xl:text-lg mt-2 xl:mt-8`}
          >
            {item.description}
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default JourneyCard;
