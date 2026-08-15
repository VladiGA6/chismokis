import type { Metadata } from "next";
import LegalPage from "@/templates/LegalPage";
import { termsDoc } from "@/lib/legal";

export const metadata: Metadata = {
    title: "Términos y condiciones • Chismokis",
    description:
        "Términos de uso y descargos de responsabilidad de Gamesa aplicables a Chismokis.",
};

export default function Page() {
    return <LegalPage doc={termsDoc} />;
}
