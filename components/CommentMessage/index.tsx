"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnonymousAvatar from "@/components/AnonymousAvatar";
import ChokisButton from "@/components/ChokisButton";
import CommentComposer from "@/components/CommentComposer";
import type { CommentItem } from "@/lib/data";
import { easeOutSoft } from "@/lib/motion";

type Props = {
    item: CommentItem;
    onReply?: (parentId: string, content: string) => void;
};

const seedFromId = (id: string) =>
    Array.from(id).reduce((sum, char) => sum + char.charCodeAt(0), 0);

const BubbleTail = () => (
    <>
        <svg
            className="absolute top-5 -left-[18px] h-[28px] w-[19px] overflow-visible"
            viewBox="0 0 19 28"
            aria-hidden
        >
            <path
                d="M18.5 2.5 1.5 24 18.5 13.5"
                fill="#FCFCFC"
                stroke="#121212"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
        <span className="absolute top-6 left-0 h-4 w-1.5 -translate-x-[2px] bg-[#FCFCFC]" />
    </>
);

const CommentMessage = ({ item, onReply }: Props) => {
    const [likes, setLikes] = useState(item.likes);
    const [liked, setLiked] = useState(false);
    const [replying, setReplying] = useState(false);
    const replies = item.replies ?? [];

    return (
        <div>
            <motion.div
                layout
                className="flex items-start gap-2.5"
                initial={{ opacity: 0, y: -14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: easeOutSoft }}
            >
                <div className="mt-3 shrink-0">
                    {item.avatar ? (
                        <span className="relative block size-9 overflow-hidden rounded-full border-[2.5px] border-[#121212] bg-[#E2E2E2] shadow-[2px_2px_0_#121212]">
                            <Image
                                src={item.avatar}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="36px"
                            />
                        </span>
                    ) : (
                        <span className="block overflow-hidden rounded-full border-[2.5px] border-[#121212] shadow-[2px_2px_0_#121212]">
                            <AnonymousAvatar seed={seedFromId(item.id)} size={36} />
                        </span>
                    )}
                </div>
                <div className="relative min-w-0 grow">
                    <div className="relative rounded-[1.45rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-3.5 py-3 text-[#121212] shadow-[4px_4px_0_#121212]">
                        <BubbleTail />
                        <div className="text-[0.875rem] leading-[1.15rem] font-semibold">
                            {item.handle}
                            <span className="ml-2 text-[0.8125rem] font-medium text-[#7B7B7B]">
                                {item.time}
                            </span>
                        </div>
                        <div className="mt-1.5 text-[1rem] leading-[1.45rem]">
                            {item.content}
                        </div>
                        <div className="mt-2.5 flex items-center gap-2">
                            <ChokisButton
                                count={likes}
                                pressed={liked}
                                onClick={() => {
                                    setLiked((was) => !was);
                                    setLikes((count) => (liked ? count - 1 : count + 1));
                                }}
                            />
                            {onReply && (
                                <button
                                    type="button"
                                    onClick={() => setReplying((open) => !open)}
                                    className="h-8 rounded-lg border border-[#E2E2E2] bg-[#FCFCFC] px-2.5 text-[0.875rem] font-semibold text-[#121212] hover:bg-[#F8F7F7]"
                                >
                                    {replying ? "Cancelar" : "Responder"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {replying && onReply && (
                <div className="mt-3 ml-11">
                    <CommentComposer
                        compact
                        onSubmit={(content) => {
                            onReply(item.id, content);
                            setReplying(false);
                        }}
                    />
                </div>
            )}

            {replies.length > 0 && (
                <div className="mt-3 ml-11 flex flex-col gap-3">
                    {replies.map((reply) => (
                        <CommentMessage key={reply.id} item={reply} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentMessage;
