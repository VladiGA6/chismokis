"use client";

import { motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import { easeOutSoft, fadeUp } from "@/lib/motion";

type Props = {
    title: string;
};

const QuestionHero = ({ title }: Props) => {
    return (
        <motion.section
            className="px-1 pt-5 text-center"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
            }}
        >
            <motion.div
                className="relative mx-auto max-w-[72rem] overflow-visible px-8 py-2"
                variants={fadeUp}
                transition={{ duration: 0.55, ease: easeOutSoft }}
            >
                <h1 className={`${passionOne.className} question-hero-title`}>
                    <span className="question-hero-title-shadow" aria-hidden>
                        {title}
                    </span>
                    <span className="question-hero-title-fill">{title}</span>
                </h1>
            </motion.div>

            <motion.p
                className="mt-5 text-[1.125rem] font-medium text-white"
                variants={fadeUp}
                transition={{ duration: 0.45, ease: easeOutSoft }}
            >
                La envoltura de hoy está abierta. Tres influencers ya mordieron. Tu puedes responder de forma anónima.
            </motion.p>
        </motion.section>
    );
};

export default QuestionHero;
