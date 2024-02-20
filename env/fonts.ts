// Font from Google Fonts
import { Carattere } from "next/font/google";
import { Raleway } from "next/font/google";

const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
});

const raleway = Raleway({ subsets: ["latin"] });

export { carattere, raleway };
