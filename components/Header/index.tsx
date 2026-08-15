"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FullMenu from "@/components/FullMenu";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="relative flex items-center justify-center pt-5 pb-2">
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
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 top-5 flex size-10 items-center justify-center"
                    aria-label="Notificaciones"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M12 3.5c-3.4 0-5.5 2.4-5.5 5.6v2.2c0 .7-.4 1.7-1.1 2.3l-.4.3c-.6.5-.3 1.6.5 1.6h13c.8 0 1.1-1.1.5-1.6l-.4-.3c-.7-.6-1.1-1.6-1.1-2.3V9.1c0-3.2-2.1-5.6-5.5-5.6Z"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.8 18.2a2.4 2.4 0 0 0 4.4 0"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute right-2 top-2 size-2 rounded-full bg-[#E31B23]" />
                </motion.button>
            </header>
            <FullMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Header;
