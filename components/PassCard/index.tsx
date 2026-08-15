"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import { passCard } from "@/lib/data";
import { easeOutSoft } from "@/lib/motion";
import QrMark from "./QrMark";

const MAX_TILT = 10;


const DisplayQuestion = ({ text }: { text: string }) => (
    <h2 className={`${passionOne.className} question-hero-title is-card`}>
        <span className="question-hero-title-shadow" aria-hidden>
            {text}
        </span>
        <span className="question-hero-title-fill">{text}</span>
    </h2>
);

type Props = {
    interactive?: boolean;
};

const PassCard = ({ interactive = true }: Props) => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const tiltRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);
    const backGlareRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const target = { x: 0, y: 0, gx: 50, gy: 36 };
        const current = { x: 0, y: 0, gx: 50, gy: 36 };
        let frame = 0;

        const apply = () => {
            current.x += (target.x - current.x) * 0.14;
            current.y += (target.y - current.y) * 0.14;
            current.gx += (target.gx - current.gx) * 0.16;
            current.gy += (target.gy - current.gy) * 0.16;

            if (tiltRef.current) {
                tiltRef.current.style.transform = `rotateX(${current.x}deg) rotateY(${current.y}deg)`;
            }
            if (shadowRef.current) {
                const ox = current.y * -1.4;
                const oy = 22 + current.x * 0.9;
                shadowRef.current.style.transform = `translate3d(${ox}px, ${oy}px, 0)`;
            }
            const glare = `radial-gradient(circle at ${current.gx}% ${current.gy}%, rgba(255,255,255,0.22) 0%, transparent 52%)`;
            if (glareRef.current) glareRef.current.style.background = glare;
            if (backGlareRef.current) backGlareRef.current.style.background = glare;

            frame = requestAnimationFrame(apply);
        };

        const onMove = (event: PointerEvent) => {
            const rect = scene.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            target.y = (px - 0.5) * (MAX_TILT * 2);
            target.x = (0.5 - py) * (MAX_TILT * 2);
            target.gx = px * 100;
            target.gy = py * 100;
        };

        const onLeave = () => {
            target.x = 0;
            target.y = 0;
            target.gx = 50;
            target.gy = 36;
        };

        frame = requestAnimationFrame(apply);

        if (!interactive) {
            return () => cancelAnimationFrame(frame);
        }

        scene.addEventListener("pointermove", onMove);
        scene.addEventListener("pointerleave", onLeave);

        return () => {
            cancelAnimationFrame(frame);
            scene.removeEventListener("pointermove", onMove);
            scene.removeEventListener("pointerleave", onLeave);
        };
    }, [interactive]);

    return (
        <motion.div
            ref={sceneRef}
            className="relative mx-auto w-full max-w-[24rem]"
            style={{ perspective: "1400px" }}
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: easeOutSoft }}
        >
            <div
                ref={shadowRef}
                className="pointer-events-none absolute inset-[10%] rounded-[1.4rem] bg-black/50 blur-2xl"
                aria-hidden
            />

            <div
                ref={tiltRef}
                className="relative will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
            >
                <button
                    type="button"
                    disabled={!interactive}
                    onClick={() => {
                        if (!interactive) return;
                        setFlipped((value) => !value);
                    }}
                    aria-pressed={flipped}
                    aria-label={
                        flipped
                            ? "Voltear card para ver el código QR"
                            : "Voltear card para ver la pregunta"
                    }
                    className={`relative block aspect-square w-full rounded-[1.25rem] border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-100 ${
                        interactive ? "cursor-pointer" : "cursor-default"
                    }`}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateY(${flipped ? 180 : 0}deg)`,
                        transition: "transform 0.7s cubic-bezier(0.22, 0.8, 0.28, 1)",
                    }}
                >
                    <div
                        className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-[#001789]"
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            boxShadow:
                                "0 1px 0 rgba(255,255,255,0.18) inset, 0 18px 40px -20px rgba(0,0,0,0.45)",
                        }}
                    >
                        <div
                            ref={glareRef}
                            className="pointer-events-none absolute inset-0"
                        />
                        <div className="relative flex h-full flex-col items-center justify-between px-6 py-7 text-center">
                            <p
                                className={`${passionOne.className} px-1 text-[1.35rem] leading-[1.05] uppercase text-white`}
                            >
                                {passCard.scanHeadline}
                            </p>
                            <div className="flex w-full flex-col items-center">
                                <div className="mb-4 h-px w-[72%] bg-white/80" />
                                <div className="rounded-2xl bg-white p-3">
                                    <QrMark
                                        value={passCard.qrUrl}
                                        size={168}
                                    />
                                </div>
                            </div>
                            <p className="max-w-[16.5rem] text-[0.6875rem] leading-[1.35] text-white/45">
                                {passCard.legal}
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-[#001789]"
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            boxShadow:
                                "0 1px 0 rgba(255,255,255,0.18) inset, 0 18px 40px -20px rgba(0,0,0,0.45)",
                        }}
                    >
                        <div
                            ref={backGlareRef}
                            className="pointer-events-none absolute inset-0"
                        />
                        <div className="relative flex h-full flex-col items-center px-6 py-8 text-center">
                            <p
                                className={`${passionOne.className} text-[1.5rem] uppercase leading-none text-white`}
                            >
                                {passCard.prompt}
                            </p>
                            <div className="flex w-full flex-1 items-center justify-center overflow-visible px-1">
                                <DisplayQuestion text={passCard.question} />
                            </div>
                            <Image
                                src="/chismokis-logo.png"
                                alt="Chismokis"
                                width={2172}
                                height={724}
                                className="h-8 w-auto"
                            />
                        </div>
                    </div>
                </button>
            </div>
        </motion.div>
    );
};

export default PassCard;
