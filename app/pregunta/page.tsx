import type { Metadata } from "next";
import QuestionPage from "@/templates/QuestionPage";

export const metadata: Metadata = {
    title: "Pregunta del día — Chismokis",
    description:
        "La pregunta incómoda de hoy. Tres influencers ya mordieron. Tú puedes responder de forma anónima.",
};

export default function Page() {
    return <QuestionPage />;
}
