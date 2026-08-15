"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutSoft } from "@/lib/motion";

type InstagramPost = {
    id: number;
    likes: string;
    comments: number;
    time: string;
    caption: string;
    video?: string;
    image?: string;
    collabWith?: string;
};

const posts: InstagramPost[] = [
    {
        id: 1,
        likes: "2,184",
        comments: 48,
        time: "2 h",
        caption:
            "Así nace un Chismokis 🍪 Se entrega la galleta, aparece la pregunta y el chisme queda suelto: ¿Cuál es la mentira más grande que le dijiste a tus papás?",
        video: "/assets/chismokis-v1.mp4",
    },
    {
        id: 2,
        likes: "1,672",
        comments: 31,
        time: "1 d",
        caption:
            "(Ejemplo de collab) @beligzl 👀 Nos cuenta cómo se enteró que su ligue tenía novia. El chisme completo, sin filtro. #chismokis #saboreatumomento #chokis #galletas",
        video: "/assets/chismokis-mi-ligue-tenia-novia.mp4",
        collabWith: "beligzl",
    },
    {
        id: 3,
        likes: "3,041",
        comments: 86,
        time: "2 d",
        caption:
            "Elige tu chisme 🎮 A) Mi ex  B) Mi mejor amigo  C) La oficina  D) Mi familia  E) Universidad. ¿Cuál desbloqueas primero?",
        image: "/assets/chismokis_v3.webp",
    },
    {
        id: 4,
        likes: "984",
        comments: 19,
        time: "4 d",
        caption:
            "Dos amigas, un paquete de Chokis y la tarjeta escondida 🍪 El chisme ya salió del empaque.",
        video: "/assets/chismokis_video.mp4",
    },
    {
        id: 5,
        likes: "2,510",
        comments: 54,
        time: "1 sem",
        caption: "Pasa la Chokis, pasa el Chismokis 🍪 El chisme no se guarda: se comparte.",
        image: "/assets/chismokis_v6.webp",
    },
    {
        id: 6,
        likes: "1,208",
        comments: 27,
        time: "2 sem",
        caption:
            "Con Chokis en la mano y el chisme suelto 👀 Me enteré que mi novio todavía hablaba con su ex.",
        video: "/assets/chismokis_v5.mp4",
    },
];

const InstagramPhone = () => {
    const [openPostId, setOpenPostId] = useState<number | null>(null);
    const [activePostId, setActivePostId] = useState<number | null>(null);
    const feedRef = useRef<HTMLDivElement>(null);
    const postRefs = useRef<Record<number, HTMLElement | null>>({});

    useLayoutEffect(() => {
        if (openPostId == null) return;
        const container = feedRef.current;
        const target = postRefs.current[openPostId];
        if (!container || !target) return;
        container.scrollTop =
            target.getBoundingClientRect().top -
            container.getBoundingClientRect().top +
            container.scrollTop;
        setActivePostId(openPostId);
    }, [openPostId]);

    useEffect(() => {
        if (openPostId == null) {
            setActivePostId(null);
            return;
        }

        const root = feedRef.current;
        if (!root) return;

        const ratios = new Map<number, number>();

        const pickActive = () => {
            let bestId = openPostId;
            let bestRatio = -1;
            for (const [id, ratio] of ratios) {
                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    bestId = id;
                }
            }
            if (bestRatio >= 0.45) {
                setActivePostId(bestId);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const id = Number(
                        (entry.target as HTMLElement).dataset.postId,
                    );
                    if (!Number.isFinite(id)) continue;
                    ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
                }
                pickActive();
            },
            {
                root,
                threshold: [0, 0.25, 0.45, 0.6, 0.75, 1],
            },
        );

        for (const post of posts) {
            const node = postRefs.current[post.id];
            if (!node) continue;
            node.dataset.postId = String(post.id);
            observer.observe(node);
        }

        return () => observer.disconnect();
    }, [openPostId]);

    return (
        <motion.figure
            className="mx-auto w-[min(92vw,24rem)] shrink-0"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: easeOutSoft }}
        >
            <div
                className="relative rounded-[3.1rem] bg-[#111214] p-[11px] ring-1 ring-white/12"
                style={{
                    boxShadow:
                        "0 1px 0 rgba(255,255,255,0.12) inset, 0 28px 70px -24px rgba(0,0,0,0.7)",
                }}
            >
                <span className="absolute top-28 -left-[3px] h-16 w-[3px] rounded-l-sm bg-[#2a2a2e]" />
                <span className="absolute top-48 -left-[3px] h-10 w-[3px] rounded-l-sm bg-[#2a2a2e]" />
                <span className="absolute top-40 -right-[3px] h-14 w-[3px] rounded-r-sm bg-[#2a2a2e]" />

                <div className="relative flex aspect-[9/17.5] w-full flex-col overflow-hidden rounded-[2.45rem] bg-black">
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-11 items-start justify-center pt-[11px]">
                        <div className="absolute left-6 top-[14px] text-[12px] font-semibold tracking-tight text-white">
                            8:29
                        </div>
                        <div className="h-[22px] w-[82px] rounded-full bg-black" />
                        <div className="absolute right-5 top-[15px] flex items-center gap-1.5 text-white">
                            <SignalIcon />
                            <WifiIcon />
                            <BatteryIcon />
                        </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col pt-11">
                        <AnimatePresence mode="wait" initial={false}>
                        {openPostId == null ? (
                            <motion.div
                                key="profile"
                                className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.28, ease: easeOutSoft }}
                            >
                                <ProfileGrid onOpenPost={setOpenPostId} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="feed"
                                className="flex min-h-0 flex-1 flex-col"
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 16 }}
                                transition={{ duration: 0.28, ease: easeOutSoft }}
                            >
                                <div className="flex h-11 shrink-0 items-center border-b border-white/10 px-2">
                                    <button
                                        type="button"
                                        onClick={() => setOpenPostId(null)}
                                        className="flex size-10 items-center justify-center text-white"
                                        aria-label="Volver al perfil"
                                    >
                                        <BackIcon />
                                    </button>
                                    <div className="min-w-0 flex-1 pr-10 text-center">
                                        <p className="text-[11px] font-semibold tracking-[0.12em] text-white/55 uppercase">
                                            chokis_mx
                                        </p>
                                        <p className="text-[16px] font-semibold leading-none text-white">
                                            Posts
                                        </p>
                                    </div>
                                </div>
                                <div
                                    ref={feedRef}
                                    className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                                >
                                    {posts.map((post) => (
                                        <article
                                            key={post.id}
                                            ref={(node) => {
                                                postRefs.current[post.id] = node;
                                            }}
                                            className="border-b border-white/10"
                                        >
                                            <PostDetail
                                                post={post}
                                                active={activePostId === post.id}
                                                onBack={() => setOpenPostId(null)}
                                            />
                                        </article>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        </AnimatePresence>

                        <nav
                            className="grid shrink-0 grid-cols-5 border-t border-white/10 bg-black px-1 py-2 text-white"
                            aria-label="Navegación de Instagram"
                        >
                            <button
                                type="button"
                                className="flex justify-center"
                                onClick={() => setOpenPostId(null)}
                                aria-label="Inicio"
                            >
                                <HomeIcon />
                            </button>
                            <span className="flex justify-center">
                                <SearchIcon />
                            </span>
                            <span className="flex justify-center">
                                <CreateIcon />
                            </span>
                            <span className="flex justify-center">
                                <ReelsIcon />
                            </span>
                            <button
                                type="button"
                                className="flex justify-center"
                                onClick={() => setOpenPostId(null)}
                                aria-label="Perfil"
                            >
                                <span className="size-[22px] overflow-hidden rounded-full ring-1 ring-white">
                                    <ChokisAvatar className="size-full" />
                                </span>
                            </button>
                        </nav>
                        <div className="flex shrink-0 justify-center bg-black pb-2 pt-1">
                            <div className="h-[4px] w-28 rounded-full bg-white" />
                        </div>
                    </div>
                </div>
            </div>
            <figcaption className="sr-only">
                Mockup del perfil de Instagram de chokis_mx con seis posts en formato 4:5.
            </figcaption>
        </motion.figure>
    );
};

const ProfileGrid = ({ onOpenPost }: { onOpenPost: (id: number) => void }) => (
    <>
        <header className="px-3.5 pt-1">
            <div className="flex items-start gap-3">
                <ChokisAvatar className="size-[5.35rem]" />
                <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-center gap-1">
                        <p className="truncate text-[15px] font-semibold leading-none text-white">
                            chokis_mx
                        </p>
                        <VerifiedBadge />
                        <span className="ml-auto text-white/80" aria-hidden>
                            ···
                        </span>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-none text-white">
                        Chokis Mx
                    </p>
                    <dl className="mt-2.5 flex gap-4 text-[12px] leading-tight text-white">
                        <Stat value="18" label="posts" />
                        <Stat value="27.8K" label="followers" />
                        <Stat value="22" label="following" />
                    </dl>
                </div>
            </div>

            <p className="mt-3 text-[13px] leading-snug text-white">
                Saborea el momento con Chokis® 💙 🍪
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[13px] text-white">
                <ThreadsIcon />
                <span>chokis_mx</span>
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                    href="https://instagram.com/chokis_mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 items-center justify-center rounded-lg bg-[#0095F6] text-[13px] font-semibold text-white"
                >
                    Follow
                </a>
                <button
                    type="button"
                    className="h-8 rounded-lg bg-[#2a2a2a] text-[13px] font-semibold text-white"
                >
                    Message
                </button>
            </div>
        </header>

        <div className="mt-3 flex border-b border-white/10">
            <span className="flex h-10 flex-1 items-center justify-center border-b-[1.5px] border-white text-white">
                <GridIcon />
            </span>
            <span className="flex h-10 flex-1 items-center justify-center text-white/35">
                <ReelsIcon />
            </span>
            <span className="flex h-10 flex-1 items-center justify-center text-white/35">
                <TaggedIcon />
            </span>
        </div>

        <div className="grid grid-cols-3 gap-[1.5px] bg-black">
            {posts.map((post) => {
                const loopInGrid = post.video === "/assets/chismokis-v1.mp4";
                return (
                    <button
                        key={post.id}
                        type="button"
                        onClick={() => onOpenPost(post.id)}
                        className="relative aspect-[4/5] bg-[#3d3d3d] text-left"
                        aria-label={`Abrir post ${post.id}`}
                    >
                        <PostMedia post={post} autoPlay={loopInGrid} muted />
                        {post.video ? (
                            <span className="absolute top-1.5 right-1.5 text-white drop-shadow">
                                <ClipIcon />
                            </span>
                        ) : null}
                    </button>
                );
            })}
        </div>
    </>
);

const PostDetail = ({
    post,
    active,
    onBack,
}: {
    post: InstagramPost;
    active: boolean;
    onBack: () => void;
}) => {
    const [muted, setMuted] = useState(false);
    const onAutoplayBlocked = useCallback(() => setMuted(true), []);

    return (
        <div>
            <div className="flex items-center gap-2.5 px-3 py-2">
                <button
                    type="button"
                    onClick={onBack}
                    className="shrink-0"
                    aria-label="Volver al perfil"
                >
                    <ChokisAvatar className="size-8" />
                </button>
                <button
                    type="button"
                    onClick={onBack}
                    className="min-w-0 flex-1 text-left"
                >
                    {post.collabWith ? (
                        <p className="flex flex-wrap items-center gap-x-1 text-[13px] font-semibold text-white">
                            <span className="inline-flex items-center gap-1">
                                chokis_mx
                                <VerifiedBadge />
                            </span>
                            <span className="text-white/55">&</span>
                            <span>{post.collabWith}</span>
                        </p>
                    ) : (
                        <p className="flex items-center gap-1 text-[13px] font-semibold text-white">
                            chokis_mx
                            <VerifiedBadge />
                        </p>
                    )}
                </button>
                <span className="text-white/80" aria-hidden>
                    ···
                </span>
            </div>

            <div className="relative aspect-[4/5] bg-[#3d3d3d]">
                <PostMedia
                    post={post}
                    autoPlay={active}
                    muted={muted}
                    onAutoplayBlocked={onAutoplayBlocked}
                />
                {post.video ? (
                    <button
                        type="button"
                        onClick={() => setMuted((current) => !current)}
                        className="absolute inset-0 z-[1]"
                        aria-label={muted ? "Activar audio" : "Silenciar audio"}
                    />
                ) : null}
                {post.video ? (
                    <span className="pointer-events-none absolute right-2.5 bottom-2.5 z-[2] flex size-8 items-center justify-center rounded-full bg-black/55 text-white">
                        {muted ? <MuteIcon /> : <UnmuteIcon />}
                    </span>
                ) : null}
            </div>

            <div className="flex items-center px-2.5 pt-2 text-white">
                <div className="flex items-center gap-3.5">
                    <HeartIcon />
                    <CommentIcon />
                    <ShareIcon />
                </div>
                <span className="ml-auto">
                    <SaveIcon />
                </span>
            </div>

            <div className="px-3 pt-2 pb-3 text-[13px] text-white">
                <p className="font-semibold">{post.likes} likes</p>
                <p className="mt-1 leading-snug">
                    <span className="font-semibold">chokis_mx</span>{" "}
                    <span className="text-white/90">{post.caption}</span>
                </p>
                <p className="mt-1 text-white/45">View all {post.comments} comments</p>
                <p className="mt-1 text-[11px] tracking-wide text-white/40 uppercase">
                    {post.time}
                </p>
            </div>
        </div>
    );
};

const PostMedia = ({
    post,
    autoPlay,
    muted,
    onAutoplayBlocked,
}: {
    post: InstagramPost;
    autoPlay: boolean;
    muted: boolean;
    onAutoplayBlocked?: () => void;
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !post.video) return;

        video.muted = muted;
        video.volume = 1;

        if (!autoPlay) {
            video.pause();
            video.currentTime = 0;
            return;
        }

        void video.play().catch(() => {
            if (!muted) {
                video.muted = true;
                onAutoplayBlocked?.();
                void video.play();
            }
        });
    }, [autoPlay, muted, onAutoplayBlocked, post.video]);

    if (post.video) {
        return (
            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={post.video}
                muted={muted}
                loop
                playsInline
                autoPlay={autoPlay}
                preload="auto"
                onLoadedData={(event) => {
                    if (!autoPlay) {
                        event.currentTarget.currentTime = 0.01;
                    }
                }}
                aria-label={`Video del post ${post.id}`}
            />
        );
    }

    if (post.image) {
        return (
            <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 420px) 90vw, 360px"
            />
        );
    }

    return <PostWireframe n={post.id} />;
};

const PostWireframe = ({ n }: { n: number }) => (
    <>
        <div className="absolute inset-2 border border-white/15" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-white/35">
            <ImagePlaceholderIcon />
            <span className="text-[10px] font-medium tracking-[0.14em]">4:5</span>
            <span className="text-[9px] text-white/25">Post {n}</span>
        </div>
    </>
);

const ClipIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 6.5h11.5a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2Zm15.2 1.3 3.3-1.9v12.2l-3.3-1.9V7.8Z" />
    </svg>
);

const MuteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M11 5 6.5 9H3v6h3.5L11 19V5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
        <path
            d="m16 9.5 5 5M21 9.5l-5 5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
    </svg>
);

const UnmuteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M11 5 6.5 9H3v6h3.5L11 19V5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
        <path
            d="M15.2 9.2a4.2 4.2 0 0 1 0 5.6M17.8 6.6a7.5 7.5 0 0 1 0 10.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
    </svg>
);

const ChokisAvatar = ({ className }: { className?: string }) => (
    <div
        className={`relative shrink-0 overflow-hidden rounded-full bg-[#001789] ${className ?? ""}`}
    >
        <Image
            src="/assets/chokis-avatar.webp"
            alt=""
            fill
            className="object-cover"
            sizes="86px"
        />
    </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
    <div>
        <dt className="sr-only">{label}</dt>
        <dd>
            <span className="font-semibold">{value}</span>{" "}
            <span className="text-white/90">{label}</span>
        </dd>
    </div>
);

const VerifiedBadge = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-label="Verificada">
        <circle cx="7" cy="7" r="7" fill="#0095F6" />
        <path
            d="M4 7.1 6.1 9.2 10 5.2"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ThreadsIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12.2 7.2c2.8 0 4.6 1.6 4.6 4.4 0 3.8-2.4 6.6-6.1 6.6-2.6 0-4.5-1.5-4.5-3.8 0-1.6 1.1-2.7 2.6-2.7 1.3 0 2.2.8 2.2 2 0 .7-.3 1.2-.8 1.5"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
        <path
            d="M8.4 10.2c.7-2.4 2.6-3.6 5.3-3.6 1.4 0 2.6.4 3.4 1.2"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
    </svg>
);

const SignalIcon = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden>
        <rect x="0" y="8" width="3" height="4" rx="0.6" />
        <rect x="4.3" y="5.5" width="3" height="6.5" rx="0.6" />
        <rect x="8.6" y="3" width="3" height="9" rx="0.6" />
        <rect x="12.9" y="0" width="3" height="12" rx="0.6" />
    </svg>
);

const WifiIcon = () => (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden>
        <path
            d="M1 4.2C3.6 1.8 11.4 1.8 14 4.2M3.2 6.6c1.8-1.6 6.8-1.6 8.6 0M5.6 9c.9-.8 2.9-.8 3.8 0"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
        />
        <circle cx="7.5" cy="11" r="0.9" fill="currentColor" />
    </svg>
);

const BatteryIcon = () => (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
        <rect x="0.6" y="0.6" width="21" height="10.8" rx="2.4" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2.2" y="2.2" width="16.4" height="7.6" rx="1.2" fill="currentColor" />
        <path d="M23.2 4.2v3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const GridIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
);

const ReelsIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 9h18M8 4l2.4 5M14 4l2.4 5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M11 12.2v4.2l3.6-2.1-3.6-2.1Z" fill="currentColor" />
    </svg>
);

const TaggedIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path
            d="M5 19.2c.8-3.2 3.4-5 7-5s6.2 1.8 7 5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
    </svg>
);

const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.8Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
    </svg>
);

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M15.8 15.8 20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
);

const CreateIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
);

const ImagePlaceholderIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="10" r="1.6" fill="currentColor" />
        <path d="M3.8 16.4 8.6 12l4.2 3.4 2.4-2 5 3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
);

const BackIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M15 5 8 12l7 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12 20s-7.2-4.4-9.2-8.2C1.2 9 2.4 6 5.4 5.4 7.2 5 8.8 5.8 12 8.6c3.2-2.8 4.8-3.6 6.6-3.2 3 .6 4.2 3.6 2.6 6.4C19.2 15.6 12 20 12 20Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
    </svg>
);

const CommentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12 20.2c-4.6 0-8.4-3.2-8.4-7.2S7.4 5.8 12 5.8s8.4 3.2 8.4 7.2c0 1.6-.6 3-1.7 4.2L20 20l-3.4-1.2c-1.3.9-2.9 1.4-4.6 1.4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
    </svg>
);

const ShareIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M21 4 10.4 10.2M21 4l-6.2 16-4.4-9.8L21 4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
    </svg>
);

const SaveIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M6.5 4.5h11v16L12 16.4 6.5 20.5v-16Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
    </svg>
);

export default InstagramPhone;
