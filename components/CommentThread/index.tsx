"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import CommentMessage from "@/components/CommentMessage";
import CommentComposer from "@/components/CommentComposer";
import { getAdjacentQuestions, type CommentItem } from "@/lib/data";
import { easeOutSoft, fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
    comments: CommentItem[];
    questionId: string;
    onSubmit: (content: string) => void;
    onReply: (parentId: string, content: string) => void;
};

const countThread = (items: CommentItem[]): number =>
    items.reduce((sum, item) => sum + 1 + countThread(item.replies ?? []), 0);

const pagerClass =
    "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border-[3px] border-[#121212] bg-[#FCFCFC] px-4 text-[0.9375rem] font-semibold text-[#121212] shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212]";

const CommentThread = ({ comments, questionId, onSubmit, onReply }: Props) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const footer = document.getElementById("site-footer");
        if (!section) return;

        let sectionVisible = false;
        let footerVisible = false;
        const sync = () => setSticky(sectionVisible && !footerVisible);

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                sectionVisible = entry.isIntersecting;
                sync();
            },
            { threshold: 0 },
        );
        sectionObserver.observe(section);

        const footerObserver = footer
            ? new IntersectionObserver(
                  ([entry]) => {
                      footerVisible = entry.isIntersecting;
                      sync();
                  },
                  { threshold: 0 },
              )
            : null;
        if (footer) footerObserver?.observe(footer);

        return () => {
            sectionObserver.disconnect();
            footerObserver?.disconnect();
            delete document.documentElement.dataset.stickyComment;
        };
    }, []);

    useEffect(() => {
        if (sticky) {
            document.documentElement.dataset.stickyComment = "";
            return;
        }
        delete document.documentElement.dataset.stickyComment;
    }, [sticky]);

    const { prev, next } = getAdjacentQuestions(questionId);

    return (
        <motion.section
            ref={sectionRef}
            className="mt-7 pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: easeOutSoft }}
        >
            <div className="mb-4 flex items-end justify-between px-1">
                <h2 className="text-[1.125rem] font-bold text-white">
                    Respuestas anónimas
                </h2>
                <span className="text-[0.8125rem] text-white/50">
                    {countThread(comments)} en este hilo
                </span>
            </div>

            <div className="flex flex-col gap-4">
                <AnimatePresence initial={false}>
                    {comments.map((comment) => (
                        <CommentMessage
                            key={comment.id}
                            item={comment}
                            onReply={onReply}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {(prev || next) && (
                <nav
                    aria-label="Otras preguntas"
                    className="mt-6 flex gap-3"
                >
                    {prev && (
                        <Link
                            href={`/pregunta/${prev.id}`}
                            className={pagerClass}
                            onClick={() =>
                                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
                            }
                        >
                            <span aria-hidden>←</span>
                            Anterior
                        </Link>
                    )}
                    {next && (
                        <Link
                            href={`/pregunta/${next.id}`}
                            className={pagerClass}
                            onClick={() =>
                                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
                            }
                        >
                            Siguiente
                            <span aria-hidden>→</span>
                        </Link>
                    )}
                </nav>
            )}

            <div className="h-[8.5rem]" aria-hidden />

            <div
                inert={!sticky || undefined}
                className={`pointer-events-none fixed inset-x-0 bottom-0 z-30 transition-[opacity,transform] duration-300 ease-out ${
                    sticky
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                }`}
            >
                <div
                    className={`mx-auto w-full max-w-[1100px] bg-gradient-to-t from-[#001789] from-45% to-transparent px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 ${
                        sticky ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                >
                    <CommentComposer className="!mt-0" onSubmit={onSubmit} />
                </div>
            </div>
        </motion.section>
    );
};

export default CommentThread;
