import type { Metadata } from "next";
import QuestionPage from "@/templates/QuestionPage";
import { defaultQuestion } from "@/lib/data";

export const metadata: Metadata = {
    title: `${defaultQuestion.title} — Chismokis`,
    description:
        "La pregunta incómoda de hoy. Tres influencers ya mordieron. Tú puedes responder de forma anónima.",
};

export default function Page() {
    return <QuestionPage question={defaultQuestion} />;
}
