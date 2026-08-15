"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
    onSubmit: (message: string) => void;
};

const ResponseCard = ({ onSubmit }: Props) => {
    const [message, setMessage] = useState("");
    const [recording, setRecording] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const next = message.trim();
        if (!next) return;
        onSubmit(next);
        setMessage("");
        setRecording(false);
    };

    return (
        <section className="relative mt-6 rounded-[1.75rem] bg-[#00115C] px-5 pb-5 pt-5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)]">
            <div className="flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#E31B23]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M5 6.2A2.2 2.2 0 0 1 7.2 4h9.6A2.2 2.2 0 0 1 19 6.2v7.2A2.2 2.2 0 0 1 16.8 15.6h-5.1L7 19.2a.7.7 0 0 1-1.12-.57V15.6A2.2 2.2 0 0 1 5 13.4V6.2Z"
                            fill="white"
                        />
                        <path
                            d="M12 10.2c.7 0 1.1.45 1.1 1.05 0 .7-.55 1.15-1.1 1.7-.55-.55-1.1-1-1.1-1.7 0-.6.4-1.05 1.1-1.05Z"
                            fill="#E31B23"
                        />
                    </svg>
                </div>
                <div className="min-w-0 pt-0.5">
                    <h2 className="text-[1.25rem] font-bold leading-tight text-white">
                        ¿Y tú qué opinas?
                    </h2>
                    <p className="mt-0.5 text-[0.9375rem] leading-snug text-white/70">
                        Responde esta pregunta y comparte tu historia.
                    </p>
                </div>
            </div>

            <svg
                className="pointer-events-none absolute right-16 top-[4.4rem] text-white/80"
                width="54"
                height="36"
                viewBox="0 0 54 36"
                fill="none"
                aria-hidden
            >
                <path
                    d="M4 4c10 2 28 6 32 16"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
                <path
                    d="M30 14c4 6 6 10 6 14"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
                <path
                    d="M28 26h16l-6 6"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <form className="mt-5" onSubmit={handleSubmit}>
                <TextareaAutosize
                    className="min-h-[88px] w-full resize-none rounded-2xl bg-[#000C40] px-4 py-3.5 text-[1rem] leading-6 text-white outline-none placeholder:text-white/35"
                    minRows={3}
                    maxRows={8}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuenta tu historia..."
                />
                <div className="mt-3 flex gap-2.5">
                    <button
                        type="button"
                        onClick={() => setRecording((on) => !on)}
                        className={`inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-[0.9375rem] font-semibold transition ${
                            recording
                                ? "bg-[#E31B23] text-white"
                                : "bg-[#2F4FD0] text-white"
                        }`}
                    >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.2 4.4h5.6A1.8 1.8 0 0 1 14.6 6.2v5.2a2.8 2.8 0 0 1-2.2 2.74V16h1.4a.8.8 0 1 1 0 1.6H6.2a.8.8 0 1 1 0-1.6h1.4v-1.86A2.8 2.8 0 0 1 5.4 11.4V6.2A1.8 1.8 0 0 1 7.2 4.4Z" />
                        </svg>
                        {recording ? "Grabando…" : "Grabar video"}
                    </button>
                    <button
                        type="submit"
                        disabled={message.trim().length === 0}
                        className="inline-flex h-11 flex-[1.35] items-center justify-center gap-2 rounded-full bg-[#E31B23] text-[0.9375rem] font-semibold text-white disabled:opacity-40"
                    >
                        Publicar respuesta
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3.2 3.1 17.1 9.4c.7.32.7 1.3 0 1.62L3.2 17.3c-.78.35-1.58-.48-1.24-1.28l2.2-5.22H9.2a.8.8 0 0 0 0-1.6H4.16L1.96 4.38C1.62 3.58 2.42 2.75 3.2 3.1Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ResponseCard;
