"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import ChokisButton from "@/components/ChokisButton";
import { easeOutSoft, fadeUp, viewportOnce } from "@/lib/motion";

const rows = [
    { id: "w1", bars: ["w-[38%]", "w-[92%]", "w-[74%]"], likes: 24 },
    { id: "w2", bars: ["w-[46%]", "w-[88%]", "w-[61%]"], likes: 16 },
    { id: "w3", bars: ["w-[32%]", "w-[95%]", "w-[70%]"], likes: 9 },
];

const WireRow = ({
    bars,
    likes,
}: {
    bars: string[];
    likes: number;
}) => {
    const [count, setCount] = useState(likes);
    const [pressed, setPressed] = useState(false);
    const [flash, setFlash] = useState(false);

    return (
        <motion.div
            className="flex flex-1 gap-3 border-b border-[#ECECEC] p-4 last:border-b-0"
            animate={
                flash
                    ? { backgroundColor: ["#FCFCFC", "#FFF4E8", "#FCFCFC"] }
                    : { backgroundColor: "#FCFCFC" }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            onAnimationComplete={() => setFlash(false)}
        >
            <div className="size-8 shrink-0 rounded-full bg-[#E2E2E2]" />
            <div className="flex min-w-0 grow flex-col justify-center">
                <div className={`h-2 rounded-full bg-[#E2E2E2] ${bars[0]}`} />
                <div className={`mt-2 h-2 rounded-full bg-[#E8E8E8] ${bars[1]}`} />
                <div className={`mt-1.5 h-2 rounded-full bg-[#E8E8E8] ${bars[2]}`} />
                <div className="mt-2">
                    <ChokisButton
                        count={count}
                        pressed={pressed}
                        onClick={() => {
                            setFlash(true);
                            setPressed((was) => !was);
                            setCount((value) => (pressed ? value - 1 : value + 1));
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const PrizeSection = () => {
    return (
        <section className="pb-16 pt-4">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
                <motion.div
                    className="text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: easeOutSoft }}
                >
                    <h2
                        className={`${passionOne.className} mt-2 text-[2.2rem] uppercase leading-none text-white sm:text-[2.5rem]`}
                    >
                        La respuesta con más chokis se lleva una gift card
                    </h2>
                    <p className="mx-auto mt-4 max-w-[28rem] text-[1.125rem] font-medium leading-snug text-white/70 md:mx-0">
                        Responde en anónimo. La comunidad vota con chokis. Al
                        cierre, la historia con más cookies gana una gift card
                        de Amazon. El registro es solo para enviártela si ganas.
                    </p>
                </motion.div>

                <div className="relative mx-auto w-full max-w-[28rem] overflow-visible md:ml-auto md:mr-0">
                    <motion.div
                        className="flex aspect-square flex-col overflow-hidden rounded-2xl border border-[#ECECEC] bg-[#FCFCFC] shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.13),0px_2px_0px_0px_#FFF_inset,0px_8px_16px_-12px_rgba(0,0,0,0.08)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, ease: easeOutSoft, delay: 0.08 }}
                    >
                        {rows.map((row) => (
                            <WireRow
                                key={row.id}
                                bars={row.bars}
                                likes={row.likes}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="pointer-events-none absolute top-[8%] right-3 z-10 w-[34%] max-w-[9.75rem] sm:right-4 sm:w-[36%] sm:max-w-[11rem]"
                        initial={{ opacity: 0, y: 24, rotate: 22, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 11, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.55, ease: easeOutSoft, delay: 0.22 }}
                    >
                        <Image
                            src="/assets/amazon-gift-card.webp"
                            alt="Gift card de Amazon de $500"
                            width={530}
                            height={811}
                            className="h-auto w-full drop-shadow-[0_16px_28px_rgba(0,0,0,0.32)]"
                            sizes="(max-width: 640px) 34vw, 176px"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrizeSection;
