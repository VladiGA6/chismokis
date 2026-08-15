import type { Metadata } from "next";
import PassPage from "@/templates/PassPage";

export const metadata: Metadata = {
    title: "Pase digital — Chismokis",
    description:
        "Tu pase anónimo de hoy. Escanea el QR o voltéalo para ver la pregunta incómoda.",
};

export default function Page() {
    return <PassPage />;
}
