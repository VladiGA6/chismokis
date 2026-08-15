"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeOutSoft, fadeUp, viewportOnce } from "@/lib/motion";

const links = [
    { href: "/terminos", label: "Términos y condiciones" },
    { href: "/privacidad", label: "Política de privacidad" },
];

const Footer = () => {
    return (
        <motion.footer
            id="site-footer"
            className="mt-auto border-t border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: easeOutSoft }}
        >
            <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4 px-4 py-6">
                <Link href="/" aria-label="Ir al inicio">
                    <Image
                        src="/chismokis-logo.png"
                        alt="Chismokis"
                        width={2172}
                        height={724}
                        className="h-8 w-auto"
                    />
                </Link>
                <nav aria-label="Legal">
                    <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[0.9375rem] text-white/55">
                        {links.map((link, index) => (
                            <li key={link.href} className="flex items-center gap-3">
                                {index > 0 && (
                                    <span aria-hidden className="text-white/25">
                                        ·
                                    </span>
                                )}
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.footer>
    );
};

export default Footer;
