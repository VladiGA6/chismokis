"use client";

import { motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import { archiveQuestions } from "@/lib/data";
import QuestionRevealCard from "@/components/QuestionRevealCard";
import { easeOutSoft, fadeUp, stagger, viewportOnce } from "@/lib/motion";

const QuestionMasonry = () => {
    return (
        <section className="pb-8 pt-4">
            <motion.div
                className="mb-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: easeOutSoft }}
            >
                <h2
                    className={`${passionOne.className} mt-2 text-[2.4rem] uppercase leading-none text-white`}
                >
                    Preguntas incómodas
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={stagger}
            >
                {archiveQuestions.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={fadeUp}
                        transition={{ duration: 0.45, ease: easeOutSoft }}
                    >
                        <QuestionRevealCard id={item.id} title={item.title} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default QuestionMasonry;
