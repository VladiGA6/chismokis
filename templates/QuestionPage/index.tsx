"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionHero from "@/components/QuestionHero";
import InfluencerVideos from "@/components/InfluencerVideos";
import CommentThread from "@/components/CommentThread";
import {
    initialComments,
    type ArchiveQuestion,
    type CommentItem,
} from "@/lib/data";

type Props = {
    question: ArchiveQuestion;
};

const QuestionPage = ({ question }: Props) => {
    const [comments, setComments] = useState<CommentItem[]>(initialComments);

    const handleSubmit = (content: string) => {
        const next: CommentItem = {
            id: `local-${Date.now()}`,
            handle: "tú.anónimo",
            time: "ahora",
            content,
            likes: 0,
        };
        setComments((current) => [next, ...current]);
    };

    const handleReply = (parentId: string, content: string) => {
        const next: CommentItem = {
            id: `local-${Date.now()}`,
            handle: "tú.anónimo",
            time: "ahora",
            content,
            likes: 0,
        };
        setComments((current) =>
            current.map((comment) =>
                comment.id === parentId
                    ? { ...comment, replies: [...(comment.replies ?? []), next] }
                    : comment,
            ),
        );
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#001789]">
            <div className="mx-auto w-full max-w-[1100px] flex-1 px-4 pb-6">
                <Header />
                <QuestionHero title={question.title} />
                <InfluencerVideos />
                <CommentThread
                    comments={comments}
                    onSubmit={handleSubmit}
                    onReply={handleReply}
                />
            </div>
            <Footer />
        </div>
    );
};

export default QuestionPage;
