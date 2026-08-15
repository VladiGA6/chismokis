"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { passionOne } from "@/app/fonts";

type Props = {
    id: string;
    title: string;
};

const QuestionRevealCard = ({ id, title }: Props) => (
    <motion.div
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
        <Link
            href={`/pregunta/${id}`}
            className="group relative block aspect-square w-full overflow-hidden rounded-[1.15rem] bg-[#001789] outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{
                boxShadow:
                    "0 1px 0 rgba(255,255,255,0.18) inset, 0 18px 40px -20px rgba(0,0,0,0.55)",
            }}
        >
            <div className="flex h-full flex-col items-center px-4 py-5 text-center sm:px-5 sm:py-6">
                <div className="flex w-full flex-1 items-center justify-center overflow-visible px-0.5">
                    <h3 className={`${passionOne.className} question-hero-title is-reveal`}>
                        <span className="question-hero-title-shadow" aria-hidden>
                            {title}
                        </span>
                        <span className="question-hero-title-fill">{title}</span>
                    </h3>
                </div>
                <Image
                    src="/chismokis-logo.png"
                    alt=""
                    width={2172}
                    height={724}
                    className="h-5 w-auto sm:h-6"
                />
            </div>
        </Link>
    </motion.div>
);

export default QuestionRevealCard;
