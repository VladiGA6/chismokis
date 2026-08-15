import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuestionPage from "@/templates/QuestionPage";
import { archiveQuestions, getQuestionById } from "@/lib/data";

type Props = {
    params: Promise<{ id: string }>;
};

export const generateStaticParams = () =>
    archiveQuestions.map((item) => ({ id: item.id }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { id } = await params;
    const selected = getQuestionById(id);
    if (!selected) return {};

    return {
        title: `${selected.title} • Chismokis`,
        description:
            "Tres influencers ya mordieron. Tú puedes responder de forma anónima.",
    };
};

export default async function Page({ params }: Props) {
    const { id } = await params;
    const selected = getQuestionById(id);
    if (!selected) notFound();

    return <QuestionPage question={selected} />;
}
