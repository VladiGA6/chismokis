"use client";

import { useEffect, useRef, useState, type ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { influencers, type InfluencerClip } from "@/lib/data";
import { easeOutSoft, fadeUp, viewportOnce } from "@/lib/motion";

const MOBILE_MQ = "(max-width: 767px)";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(MOBILE_MQ);
        const sync = () => setIsMobile(media.matches);
        sync();
        media.addEventListener("change", sync);
        return () => media.removeEventListener("change", sync);
    }, []);

    return isMobile;
};

const Verified = () => (
    <svg width="13" height="13" viewBox="0 0 12 12" aria-hidden>
        <circle cx="6" cy="6" r="5.35" fill="#3B82F6" stroke="#121212" strokeWidth="1.3" />
        <path
            d="M3.4 6.15 5.1 7.8 8.6 4.3"
            fill="none"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const PlayIcon = ({ paused }: { paused: boolean }) => (
    <span className="flex size-11 items-center justify-center rounded-xl border-[3px] border-[#121212] bg-[#FCFCFC] shadow-[3px_3px_0_#121212]">
        <svg width="16" height="16" viewBox="0 0 20 20" className="ml-0.5 fill-[#121212]">
            <path
                d={
                    paused
                        ? "M5 5.2h3.2v9.6H5V5.2zm6.8 0H15v9.6h-3.2V5.2z"
                        : "M6.2 4.4 16 10 6.2 15.6V4.4z"
                }
            />
        </svg>
    </span>
);

const BrutalButton = ({
    children,
    danger = false,
    className = "",
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { danger?: boolean }) => (
    <button
        type="button"
        className={`flex size-11 items-center justify-center rounded-xl border-[3px] border-[#121212] shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212] ${
            danger ? "bg-[#E31B23] text-white" : "bg-[#FCFCFC] text-[#121212]"
        } ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
            d={dir === "left" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ClipCard = ({
    clip,
    active,
    paused,
    onPlay,
    onToggle,
    onEnded,
}: {
    clip: InfluencerClip;
    active: boolean;
    paused: boolean;
    onPlay: () => void;
    onToggle: () => void;
    onEnded: () => void;
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playing = active && !paused;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (!active) {
            video.pause();
            video.currentTime = 0;
            return;
        }

        if (paused) {
            video.pause();
            return;
        }

        video.muted = false;
        video.volume = 1;
        void video.play();
    }, [active, paused]);

    return (
        <motion.article
            className="min-w-0 flex-1 transition-transform hover:-translate-y-0.5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: easeOutSoft }}
        >
            <div
                className={`relative aspect-[9/16] w-full overflow-hidden rounded-[1.15rem] border-[3px] bg-[#000C40] transition-[border-color,box-shadow,transform] ${
                    active
                        ? "border-[#E31B23] shadow-[4px_4px_0_#E31B23]"
                        : "border-[#121212] shadow-[4px_4px_0_#121212]"
                }`}
            >
                <Image
                    src={clip.image}
                    alt={clip.handle}
                    fill
                    className="object-cover"
                    sizes="140px"
                />
                <video
                    ref={videoRef}
                    className={
                        active
                            ? "absolute inset-0 z-[1] h-full w-full object-cover"
                            : "invisible absolute inset-0 h-full w-full object-cover"
                    }
                    src={clip.video}
                    poster={clip.image}
                    playsInline
                    preload="auto"
                    onEnded={onEnded}
                />
                <button
                    type="button"
                    onClick={active ? onToggle : onPlay}
                    className="absolute inset-0 z-[2] flex items-center justify-center"
                    aria-label={
                        playing
                            ? `Pausar a ${clip.handle}`
                            : `Reproducir a ${clip.handle}`
                    }
                >
                    <AnimatePresence>
                        {!playing && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.18, ease: easeOutSoft }}
                            >
                                <PlayIcon paused={false} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
                <span className="pointer-events-none absolute right-2 bottom-2 z-[3] rounded-md border-[2.5px] border-[#121212] bg-[#FCFCFC] px-1.5 py-0.5 text-[0.75rem] leading-none font-bold text-[#121212] shadow-[2px_2px_0_#121212]">
                    {clip.duration}
                </span>
            </div>
            <div className="mt-2 flex items-start gap-1.5">
                <div className="relative mt-0.5 size-6 shrink-0 overflow-hidden rounded-full border-[2.5px] border-[#121212] shadow-[2px_2px_0_#121212]">
                    <Image
                        src={clip.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="24px"
                    />
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-1">
                        <p className="truncate text-[0.875rem] font-semibold text-white">
                            {clip.handle}
                        </p>
                        <Verified />
                    </div>
                    <p className="truncate text-[0.75rem] text-white/55">
                        {clip.followers}
                    </p>
                </div>
            </div>
        </motion.article>
    );
};

const MobileTheater = ({
    clips,
    index,
    paused,
    direction,
    onToggle,
    onClose,
    onPrev,
    onNext,
    onEnded,
}: {
    clips: InfluencerClip[];
    index: number;
    paused: boolean;
    direction: 1 | -1;
    onToggle: () => void;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    onEnded: () => void;
}) => {
    const clip = clips[index];
    const videoRef = useRef<HTMLVideoElement>(null);
    const playing = !paused;
    const hasPrev = index > 0;
    const hasNext = index < clips.length - 1;

    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowLeft") onPrev();
            if (event.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose, onPrev, onNext]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (paused) {
            video.pause();
            return;
        }
        video.muted = false;
        video.volume = 1;
        void video.play();
    }, [paused, clip.id]);

    return (
        <div className="fixed inset-0 z-50 bg-[#001789]">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={clip.id}
                    className="absolute inset-0"
                    custom={direction}
                    initial={{ x: direction * 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction * -80, opacity: 0 }}
                    transition={{ duration: 0.28, ease: easeOutSoft }}
                >
                    <video
                        ref={videoRef}
                        className="h-full w-full bg-[#001789] object-contain"
                        src={clip.video}
                        poster={clip.image}
                        playsInline
                        preload="auto"
                        onEnded={onEnded}
                    />
                </motion.div>
            </AnimatePresence>

            <button
                type="button"
                onClick={onToggle}
                className="absolute inset-0 z-[2] flex items-center justify-center"
                aria-label={
                    playing ? `Pausar a ${clip.handle}` : `Reproducir a ${clip.handle}`
                }
            >
                <AnimatePresence>
                    {!playing && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.18, ease: easeOutSoft }}
                        >
                            <PlayIcon paused={false} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            {hasPrev && (
                <BrutalButton
                    onClick={onPrev}
                    className="absolute top-1/2 left-[max(0.75rem,env(safe-area-inset-left))] z-[3] -translate-y-1/2"
                    aria-label="Video anterior"
                >
                    <Chevron dir="left" />
                </BrutalButton>
            )}
            {hasNext && (
                <BrutalButton
                    onClick={onNext}
                    className="absolute top-1/2 right-[max(0.75rem,env(safe-area-inset-right))] z-[3] -translate-y-1/2"
                    aria-label="Video siguiente"
                >
                    <Chevron dir="right" />
                </BrutalButton>
            )}

            <BrutalButton
                danger
                onClick={onClose}
                className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-[4]"
                aria-label="Cerrar video"
            >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                        d="M5 5l10 10M15 5 5 15"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                </svg>
            </BrutalButton>

            <div className="pointer-events-none absolute right-0 bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 z-[3] flex items-center justify-center gap-1.5 px-4">
                <p className="text-[0.9375rem] font-semibold text-white drop-shadow">
                    {clip.handle}
                </p>
                <Verified />
            </div>
        </div>
    );
};

const InfluencerVideos = () => {
    const isMobile = useIsMobile();
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [paused, setPaused] = useState(false);
    const [direction, setDirection] = useState<1 | -1>(1);

    const playingIndex = influencers.findIndex((clip) => clip.id === playingId);

    const playAt = (id: string) => {
        setPlayingId(id);
        setPaused(false);
    };

    const close = () => {
        setPlayingId(null);
        setPaused(false);
    };

    const goTo = (nextIndex: number, dir: 1 | -1) => {
        const next = influencers[nextIndex];
        if (!next) return;
        setDirection(dir);
        playAt(next.id);
    };

    return (
        <section className="mt-4 pb-2">
            <div className="flex gap-3">
                {influencers.map((clip) => (
                    <ClipCard
                        key={clip.id}
                        clip={clip}
                        active={!isMobile && playingId === clip.id}
                        paused={paused}
                        onPlay={() => playAt(clip.id)}
                        onToggle={() => setPaused((was) => !was)}
                        onEnded={close}
                    />
                ))}
            </div>

            <AnimatePresence>
                {isMobile && playingId && playingIndex >= 0 && (
                    <MobileTheater
                        clips={influencers}
                        index={playingIndex}
                        paused={paused}
                        direction={direction}
                        onToggle={() => setPaused((was) => !was)}
                        onClose={close}
                        onPrev={() => goTo(playingIndex - 1, -1)}
                        onNext={() => goTo(playingIndex + 1, 1)}
                        onEnded={() => {
                            if (playingIndex < influencers.length - 1) {
                                goTo(playingIndex + 1, 1);
                                return;
                            }
                            close();
                        }}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default InfluencerVideos;
