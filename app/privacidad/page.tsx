import type { Metadata } from "next";
import LegalPage from "@/templates/LegalPage";
import { privacyDoc } from "@/lib/legal";

export const metadata: Metadata = {
    title: "Política de privacidad — Chismokis",
    description:
        "Aviso de privacidad de Gamesa: qué información se recopila, cómo se usa y qué opciones tienes.",
};

export default function Page() {
    return <LegalPage doc={privacyDoc} />;
}
