// app/loading.tsx (or app/users/loading.tsx)
import { outfit } from "@/lib/font";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="w-16 h-16 border-4 border-t-[#1DA077] border-gray-300 rounded-full animate-spin"></div>
      <p
        className={` ${outfit.className} text-lg sm:text-xl md:text-2xl font-semibold `}
      >
        Loading...
      </p>
    </div>
  );
}
