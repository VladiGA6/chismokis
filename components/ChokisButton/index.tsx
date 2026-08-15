"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutSoft } from "@/lib/motion";

type Props = {
    count: number;
    pressed?: boolean;
    onClick?: () => void;
};

const CookieIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
        <circle cx="7" cy="7" r="6.2" fill="#E0A35A" />
        <circle cx="4.4" cy="5.2" r="1.15" fill="#4A2A14" />
        <circle cx="8.2" cy="4.4" r="0.95" fill="#3A1F10" />
        <circle cx="9.4" cy="7.6" r="1.1" fill="#4A2A14" />
        <circle cx="5.6" cy="8.8" r="0.9" fill="#3A1F10" />
    </svg>
);

const ChokisButton = ({ count, pressed = false, onClick }: Props) => {
    const [popping, setPopping] = useState(false);

    return (
        <motion.button
            type="button"
            onClick={() => {
                setPopping(true);
                onClick?.();
            }}
            whileTap={{ scale: 0.92 }}
            aria-pressed={pressed}
            className={`relative flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#E2E2E2] px-2.5 text-[0.875rem] leading-[1.15rem] font-semibold text-[#121212] ${
                pressed
                    ? "bg-[#FFF4E8]"
                    : "bg-[#FCFCFC] hover:bg-[#F8F7F7] active:bg-[#F8F7F7] active:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)_inset]"
            }`}
        >
            <AnimatePresence>
                {popping && (
                    <motion.span
                        className="pointer-events-none absolute inset-[-6px] rounded-xl border-2 border-[#E0A35A]"
                        initial={{ opacity: 0.7, scale: 0.45 }}
                        animate={{ opacity: 0, scale: 2.1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.48, ease: "easeOut" }}
                        onAnimationComplete={() => setPopping(false)}
                        aria-hidden
                    />
                )}
            </AnimatePresence>
            <motion.span
                className="flex items-center gap-1.5"
                animate={popping ? { scale: [1, 1.16, 1] } : { scale: 1 }}
                transition={{ duration: 0.38, ease: easeOutSoft }}
            >
                <CookieIcon />
                <span>{count}</span>
            </motion.span>
        </motion.button>
    );
};

export default ChokisButton;
