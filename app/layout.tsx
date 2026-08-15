import type { Metadata } from "next";
import { nunitoSans, passionOne } from "./fonts";
import MotionProvider from "@/components/MotionProvider";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
    title: "Chismokis • Saborea tu momento",
    description:
        "La pregunta del día, tres influencers y tu historia. Anónima, como la última galleta del paquete.",
    icons: {
        icon: "/assets/chokis-avatar.webp",
        apple: "/assets/chokis-avatar.webp",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${passionOne.variable} ${nunitoSans.variable} text-[1rem]`} lang="es">
            <body className={`${nunitoSans.className} min-h-screen bg-[#001789] text-white antialiased`}>
                <MotionProvider>
                    {children}
                    <CookieBanner />
                </MotionProvider>
            </body>
        </html>
    );
}
