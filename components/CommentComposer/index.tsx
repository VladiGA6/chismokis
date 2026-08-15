"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { motion } from "framer-motion";
import AnonymousAvatar from "@/components/AnonymousAvatar";
import SubmitButton from "@/components/SubmitButton";
import SignUpModal from "@/components/SignUpModal";
import { easeOutSoft } from "@/lib/motion";

type Props = {
    onSubmit: (message: string) => void;
    compact?: boolean;
    className?: string;
};

const CommentComposer = ({ onSubmit, compact = false, className = "" }: Props) => {
    const [message, setMessage] = useState("");
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [pending, setPending] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const next = message.trim();
        if (!next) return;
        setPending(next);
        setSignUpOpen(true);
    };

    return (
        <>
        <motion.form
            className={`relative rounded-[1.5rem] border-[3px] border-dashed border-[#121212] bg-[#FCFCFC] p-3 shadow-[4px_4px_0_#121212] ${
                compact ? "mt-0" : "mt-5"
            } ${className}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: compact ? 0 : 0.12, ease: easeOutSoft }}
        >
            <div className="flex items-start gap-3">
                <div className="mt-1.5 shrink-0 overflow-hidden rounded-full border-[2.5px] border-[#121212] shadow-[2px_2px_0_#121212]">
                    <AnonymousAvatar seed={0} size={32} />
                </div>
                <div className="grow min-w-0">
                    <div className="flex items-start rounded-xl border-[2px] border-[#121212] bg-[#F1F1F1] p-1.5">
                        <TextareaAutosize
                            className="grow h-9 p-2 text-[1rem] leading-[1.25rem] text-[#121212] outline-none resize-none placeholder:text-[#7B7B7B]"
                            maxRows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={
                                compact
                                    ? "Responde este chisme…"
                                    : "Responde en anónimo…"
                            }
                            autoFocus={compact}
                            onKeyDown={(event) => {
                                if (
                                    event.key === "Enter" &&
                                    !event.shiftKey
                                ) {
                                    event.preventDefault();
                                    event.currentTarget.form?.requestSubmit();
                                }
                            }}
                        />
                        <SubmitButton
                            className="shrink-0"
                            isMedium
                            active={message.trim().length > 0}
                            disabled={message.trim().length === 0}
                        />
                    </div>
                    {!compact && (
                    <p className="mt-2 px-1 text-center text-[0.8125rem] leading-[1.15rem] font-medium text-[#7B7B7B]">
                        {" "}
                        <span className="font-semibold text-[#001789]">
                            Tú · anónimo
                        </span>
                        . Nadie va a saber quién se comió el chisme.
                    </p>
                    )}
                </div>
            </div>
        </motion.form>
        <SignUpModal
            open={signUpOpen}
            onClose={() => setSignUpOpen(false)}
            onComplete={() => {
                if (!pending) return;
                onSubmit(pending);
                setPending("");
                setMessage("");
            }}
        />
        </>
    );
};

export default CommentComposer;
