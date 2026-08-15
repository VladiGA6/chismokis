"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import { easeOutSoft, fadeUp, stagger } from "@/lib/motion";

type Item = {
    label: string;
    href?: string;
};

const items: Item[] = [
    { label: "Inicio", href: "/" },
    { label: "Pregunta", href: "/pregunta" },
    { label: "Tarjeta", href: "/tarjeta" },
    { label: "Instagram", href: "/instagram" },
];

type Props = {
    open: boolean;
    onClose: () => void;
};

const NavLabel = ({ text }: { text: string }) => (
    <span className={`${passionOne.className} question-hero-title is-nav`}>
        <span className="question-hero-title-shadow" aria-hidden>
            {text}
        </span>
        <span className="question-hero-title-fill">{text}</span>
    </span>
);

const NavLine = ({ text }: { text: string }) => (
    <span className="nav-line">
        <NavLabel text={text} />
    </span>
);

const FullMenu = ({ open, onClose }: Props) => {
    useEffect(() => {
        if (!open) return;

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="menu"
                    className="menu-root"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                        duration: 0.5,
                        ease: easeOutSoft,
                    }}
                >
                    <div className="menu-panel">
                        <motion.div
                            className="flex h-full flex-col"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.12,
                                ease: easeOutSoft,
                            }}
                        >
                            <div className="flex justify-end px-4 pt-5">
                                <motion.button
                                    type="button"
                                    onClick={onClose}
                                    whileTap={{ scale: 0.9, rotate: 90 }}
                                    className="flex size-12 items-center justify-center"
                                    aria-label="Cerrar menú"
                                >
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden
                                    >
                                        <path
                                            d="M5 5l14 14M19 5 5 19"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </motion.button>
                            </div>

                            <nav className="flex flex-1 items-center justify-center px-6 pb-16">
                                <motion.ul
                                    className="flex flex-col items-center gap-3"
                                    variants={stagger}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {items.map((item) => {
                                        const content = (
                                            <span className="nav-track">
                                                <NavLine text={item.label} />
                                                <NavLine text={item.label} />
                                            </span>
                                        );

                                        return (
                                            <motion.li
                                                key={item.label}
                                                className="nav-item"
                                                variants={fadeUp}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: easeOutSoft,
                                                }}
                                            >
                                                {item.href ? (
                                                    <Link
                                                        href={item.href}
                                                        className="nav-hit"
                                                        onClick={onClose}
                                                    >
                                                        {content}
                                                    </Link>
                                                ) : (
                                                    <span className="nav-hit nav-hit-static">
                                                        {content}
                                                    </span>
                                                )}
                                            </motion.li>
                                        );
                                    })}
                                </motion.ul>
                            </nav>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FullMenu;
