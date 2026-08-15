"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { motion } from "framer-motion";
import AnonymousAvatar from "@/components/AnonymousAvatar";
import SubmitButton from "@/components/SubmitButton";
import SignUpModal from "@/components/SignUpModal";
import { login, useSession } from "@/lib/session";
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
    const { user } = useSession();

    const publish = (next: string) => {
        onSubmit(next);
        setPending("");
        setMessage("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const next = message.trim();
        if (!next) return;
        if (user) {
            publish(next);
            return;
        }
        setPending(next);
        setSignUpOpen(true);
    };

    return (
        <>
        <motion.form
            className={`relative ${compact ? "mt-0" : "mt-5"} ${className}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: compact ? 0 : 0.12, ease: easeOutSoft }}
        >
            <div className="flex items-start gap-2.5">
                <div className="mt-3 shrink-0 overflow-hidden rounded-full border-[2.5px] border-[#121212] shadow-[2px_2px_0_#121212]">
                    <AnonymousAvatar seed={0} size={36} />
                </div>
                <div className="relative min-w-0 grow rounded-[1.45rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-3.5 py-3 shadow-[4px_4px_0_#121212]">
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
                    <div className="flex items-start rounded-xl border-[3px] border-[#121212] bg-[#F1F1F1] p-1.5 shadow-[2px_2px_0_#121212]">
                        <TextareaAutosize
                            className="h-9 grow resize-none p-2 text-[1rem] leading-[1.25rem] text-[#121212] outline-none placeholder:text-[#7B7B7B]"
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
                            Estás en anónimo
                        </span>
                        . Nadie va a saber quién se comió la última galleta del paquete.
                    </p>
                    )}
                </div>
            </div>
        </motion.form>
        <SignUpModal
            open={signUpOpen}
            onClose={() => setSignUpOpen(false)}
            onComplete={(provider) => {
                login(provider);
                if (!pending) return;
                publish(pending);
            }}
        />
        </>
    );
};

export default CommentComposer;
