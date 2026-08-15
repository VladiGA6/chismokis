import type { Metadata } from "next";
import { nunitoSans, passionOne } from "./fonts";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Chismokis — el chisme, en anónimo",
    description:
        "La pregunta del día, tres influencers y tu historia. Anónimo, como la última galleta del paquete.",
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
                <MotionProvider>{children}</MotionProvider>
            </body>
        </html>
    );
}
