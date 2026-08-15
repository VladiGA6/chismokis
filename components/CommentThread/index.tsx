"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CommentMessage from "@/components/CommentMessage";
import CommentComposer from "@/components/CommentComposer";
import type { CommentItem } from "@/lib/data";
import { easeOutSoft, fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
    comments: CommentItem[];
    onSubmit: (content: string) => void;
    onReply: (parentId: string, content: string) => void;
};

const countThread = (items: CommentItem[]): number =>
    items.reduce((sum, item) => sum + 1 + countThread(item.replies ?? []), 0);

const CommentThread = ({ comments, onSubmit, onReply }: Props) => {
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
        };
    }, []);

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
