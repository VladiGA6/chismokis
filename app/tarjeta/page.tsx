import type { Metadata } from "next";
import PassPage from "@/templates/PassPage";

export const metadata: Metadata = {
    title: "Tarjeta • Chismokis",
    description:
        "Tu tarjeta anónima de hoy. Escanea el QR o voltéala para ver la pregunta incómoda.",
};

export default function Page() {
    return <PassPage />;
}
