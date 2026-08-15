"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FullMenu from "@/components/FullMenu";

const Header = ({ sticky = true }: { sticky?: boolean }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header
                id="site-header"
                className={`flex items-center justify-center bg-[#001789] pt-5 pb-2 ${
                    sticky ? "sticky top-0 z-40 -mx-4 px-4" : "relative"
                }`}
            >
                <motion.button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-0 top-5 flex size-10 items-center justify-center"
                    aria-label="Abrir menú"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M4 7h16M4 12h16M4 17h16"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.button>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/" aria-label="Ir al inicio">
                        <Image
                            src="/chismokis-logo.png"
                            alt="Chismokis"
                            width={2172}
                            height={724}
                            priority
                            className="h-[64px] w-auto"
                        />
                    </Link>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 top-5"
                >
                    <Link
                        href="/perfil"
                        className="flex size-10 items-center justify-center"
                        aria-label="Perfil"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                        >
                            <circle
                                cx="12"
                                cy="8.2"
                                r="3.3"
                                stroke="white"
                                strokeWidth="1.8"
                            />
                            <path
                                d="M5.2 18.8c.9-3.3 3.3-5.1 6.8-5.1s5.9 1.8 6.8 5.1"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </header>
            <FullMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Header;
