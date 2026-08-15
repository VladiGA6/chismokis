"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import { easeOutSoft, fadeUp, springPop } from "@/lib/motion";

const Verified = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
        <circle cx="6" cy="6" r="6" fill="#3B82F6" />
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

const PackageHero = () => {
    return (
        <section className="relative w-full">
            <div className="relative w-full overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: easeOutSoft }}
                >
                    <Image
                        src="/assets/chulisimo.webp"
                        alt="Persona sosteniendo un paquete de Chokis"
                        width={1344}
                        height={752}
                        priority
                        sizes="100vw"
                        className="h-auto w-full max-md:w-[128%] max-md:max-w-none max-md:-translate-x-[16%] md:w-full"
                    />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#001789]/50 via-[#001789]/18 to-[#001789]/0" />

                <motion.div
                    className="absolute top-[52%] right-3 z-10 w-[min(16.5rem,calc(100%-1.5rem))] md:top-[22%] md:right-auto md:left-[60%] md:w-[18.5rem]"
                    initial={{ opacity: 0, scale: 0.82, rotate: 10, y: 12 }}
                    animate={{ opacity: 1, scale: 1, rotate: 2, y: 0 }}
                    transition={{ ...springPop, delay: 0.28 }}
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link href="/pregunta/peor-cita">
                        <span className="relative block rounded-[1.6rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-3.5 py-3 text-left text-[#121212] shadow-[5px_5px_0_#121212]">
                            <span className="flex flex-wrap items-center gap-x-1 text-[0.8125rem] leading-snug font-semibold">
                                <span>El</span>
                                <span className="inline-flex items-center gap-1 text-[#001789]">
                                    @chulisimotl
                                    <Verified />
                                </span>
                                <span className="font-medium text-[#5C5C5C]">
                                    (500k seguidores)
                                </span>
                                <span>responde:</span>
                            </span>
                            <span
                                className={`${passionOne.className} mt-1.5 block text-[1.35rem] leading-[1.05] uppercase`}
                            >
                                “¿Cuál es la peor cita que has tenido?”
                            </span>
                            <svg
                                className="absolute top-7 -left-[21px] h-[34px] w-[22px] overflow-visible"
                                viewBox="0 0 22 34"
                                aria-hidden
                            >
                                <path
                                    d="M21.5 2.5 1.5 30 21.5 16.5"
                                    fill="#FCFCFC"
                                    stroke="#121212"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="absolute top-8 left-0 h-5 w-1.5 -translate-x-[2px] bg-[#FCFCFC]" />
                        </span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="px-4 pt-5 pb-6 text-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                }}
            >
                <motion.h1
                    className={`${passionOne.className} question-hero-title is-pack`}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: easeOutSoft }}
                >
                    <span className="question-hero-title-shadow" aria-hidden>
                        Encuentra el chismokis
                    </span>
                    <span className="question-hero-title-fill">
                        Encuentra el chismokis
                    </span>
                </motion.h1>
                <motion.p
                    className="mx-auto mt-3 max-w-[24rem] text-[1.125rem] font-medium leading-snug text-white/75"
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: easeOutSoft }}
                >
                    El chisme ya salió del paquete. Elige una pregunta y
                    responde en anónimo.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default PackageHero;
