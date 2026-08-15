import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";

export const passionOne = localFont({
    src: "./fonts/PassionOne-Regular.ttf",
    weight: "400",
    style: "normal",
    variable: "--font-passion",
    display: "swap",
});

export const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-nunito",
    display: "swap",
});
