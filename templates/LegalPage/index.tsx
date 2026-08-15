"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { passionOne } from "@/app/fonts";
import type { LegalBlock, LegalDoc } from "@/lib/legal";
import { easeOutSoft, fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Props = {
    doc: LegalDoc;
};

const Block = ({ block }: { block: LegalBlock }) => {
    if (block.type === "p") {
        return (
            <p className="text-[1.0625rem] leading-[1.7] text-white/80">{block.text}</p>
        );
    }

    if (block.type === "list") {
        return (
            <ul className="list-disc space-y-1.5 pl-5 text-[1.0625rem] leading-[1.7] text-white/80">
                {block.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <dl className="space-y-4">
            {block.items.map((item) => (
                <div
                    key={item.term}
                    className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3"
                >
                    <dt className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white/55">
                        {item.term}
                    </dt>
                    <dd className="mt-1.5 text-[1.0625rem] leading-[1.65] text-white/80">
                        {item.detail}
                    </dd>
                </div>
            ))}
        </dl>
    );
};

const LegalPage = ({ doc }: Props) => {
    return (
        <div className="flex min-h-screen flex-col bg-[#001789]">
            <div className="mx-auto w-full max-w-[1100px] px-4">
                <Header />
                <article className="mx-auto max-w-[40rem] pt-8 pb-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                    <motion.p
                        className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white/50"
                        variants={fadeUp}
                        transition={{ duration: 0.4, ease: easeOutSoft }}
                    >
                        {doc.kicker}
                        {doc.updated ? ` · ${doc.updated}` : ""}
                    </motion.p>
                    <motion.h1
                        className={`${passionOne.className} mt-3 text-[2.6rem] leading-none uppercase text-white`}
                        variants={fadeUp}
                        transition={{ duration: 0.45, ease: easeOutSoft }}
                    >
                        {doc.title}
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-[0.9375rem] text-white/45"
                        variants={fadeUp}
                        transition={{ duration: 0.4, ease: easeOutSoft }}
                    >
                        Contenido basado en el aviso oficial de Gamesa.{" "}
                        <a
                            href={doc.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-2 transition-colors hover:text-white"
                        >
                            Ver fuente
                        </a>
                    </motion.p>

                    <div className="mt-8 space-y-4">
                        {doc.intro.map((paragraph) => (
                            <motion.p
                                key={paragraph}
                                className="text-[1.0625rem] leading-[1.7] text-white/80"
                                variants={fadeUp}
                                transition={{ duration: 0.4, ease: easeOutSoft }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                    </motion.div>

                    {doc.sections.map((section) => (
                        <motion.section
                            key={section.title}
                            className="mt-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={fadeUp}
                            transition={{ duration: 0.45, ease: easeOutSoft }}
                        >
                            <h2
                                className={`${passionOne.className} text-[1.45rem] leading-none uppercase text-white`}
                            >
                                {section.title}
                            </h2>
                            <div className="mt-4 space-y-4">
                                {section.blocks.map((block, index) => (
                                    <Block
                                        key={`${section.title}-${index}`}
                                        block={block}
                                    />
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default LegalPage;
