"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AnonymousAvatar from "@/components/AnonymousAvatar";
import SubmitButton from "@/components/SubmitButton";

type Props = {
    onSubmit: (message: string) => void;
};

const FloatingComposer = ({ onSubmit }: Props) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const next = message.trim();
        if (!next) return;
        onSubmit(next);
        setMessage("");
    };

    return (
        <div className="fixed bottom-5 left-0 right-0 z-30 px-5 pointer-events-none">
            <form
                className="pointer-events-auto mx-auto max-w-[42rem] p-3 border border-[#ececec] bg-[#fcfcfc] rounded-3xl shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.13),0px_2px_0px_0px_#FFF_inset,0px_8px_16px_-12px_rgba(0,0,0,0.18)] transition-colors hover:border-[#E2E2E2]"
                onSubmit={handleSubmit}
            >
                <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5">
                        <AnonymousAvatar seed={0} size={36} />
                    </div>
                    <div className="grow min-w-0">
                        <div className="flex items-start p-1.5 bg-[#F1F1F1] rounded-xl">
                            <TextareaAutosize
                                className="grow h-9 p-2 text-[1rem] leading-[1.25rem] text-[#121212] outline-none resize-none placeholder:text-[#7B7B7B]"
                                maxRows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Responde en anónimo…"
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
                        <p className="mt-2 px-1 text-[0.8125rem] leading-[1.15rem] font-medium text-[#7B7B7B]">
                            Tu handle de hoy es{" "}
                            <span className="text-[#001789]">Tú · anónimo</span>
                            . Nadie va a saber quién se comió el chisme.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FloatingComposer;
