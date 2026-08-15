"use client";

import { useMemo } from "react";
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
import {
    addSavedComment,
    formatCommentTime,
    useSession,
    type SavedComment,
} from "@/lib/session";

type Props = {
    question: ArchiveQuestion;
};

const toItem = (saved: SavedComment): CommentItem => ({
    id: saved.id,
    handle: "tú.anónimo",
    time: formatCommentTime(saved.createdAt),
    content: saved.content,
    likes: 0,
});

const QuestionPage = ({ question }: Props) => {
    const { comments: saved } = useSession();

    const comments = useMemo(() => {
        const mine = saved.filter((item) => item.questionId === question.id);
        const tops = mine.filter((item) => !item.parentId).map(toItem);
        let thread = [...tops, ...initialComments];

        for (const reply of mine.filter((item) => item.parentId)) {
            thread = thread.map((comment) =>
                comment.id === reply.parentId
                    ? {
                          ...comment,
                          replies: [
                              ...(comment.replies ?? []).filter(
                                  (item) => item.id !== reply.id,
                              ),
                              toItem(reply),
                          ],
                      }
                    : comment,
            );
        }

        return thread;
    }, [saved, question.id]);

    const handleSubmit = (content: string) => {
        addSavedComment({
            content,
            questionId: question.id,
            questionTitle: question.title,
        });
    };

    const handleReply = (parentId: string, content: string) => {
        addSavedComment({
            content,
            questionId: question.id,
            questionTitle: question.title,
            parentId,
        });
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#001789]">
            <div className="mx-auto w-full max-w-[1100px] flex-1 px-4 pb-6">
                <Header />
                <QuestionHero title={question.title} />
                <InfluencerVideos />
                <CommentThread
                    comments={comments}
                    questionId={question.id}
                    onSubmit={handleSubmit}
                    onReply={handleReply}
                />
            </div>
            <Footer />
        </div>
    );
};

export default QuestionPage;
