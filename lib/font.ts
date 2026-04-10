import { Outfit } from "next/font/google";
import localFont from "next/font/local";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const nohemi = localFont({
  src: [
    {
      path: "../public/fonts/Nohemi-Font/Nohemi-Regular-BF6438cc579d934.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Font/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
