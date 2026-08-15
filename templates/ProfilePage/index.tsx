"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnonymousAvatar from "@/components/AnonymousAvatar";
import SignUpModal from "@/components/SignUpModal";
import { passionOne } from "@/app/fonts";
import { easeOutSoft, fadeUp, stagger } from "@/lib/motion";
import {
    formatCommentTime,
    login,
    logout,
    useSession,
} from "@/lib/session";

const providerLabel = {
    google: "Google",
    facebook: "Facebook",
    email: "correo",
} as const;

const seedFromHandle = (handle: string) =>
    Array.from(handle).reduce((sum, char) => sum + char.charCodeAt(0), 0);

const ProfilePage = () => {
    const { user, comments } = useSession();
    const [signUpOpen, setSignUpOpen] = useState(false);

    return (
        <div className="flex min-h-screen flex-col bg-[#001789]">
            <div className="mx-auto w-full max-w-[1100px] flex-1 px-4">
                <Header />
                <article className="mx-auto max-w-[40rem] pt-8 pb-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.h1
                            className={`${passionOne.className} mt-3 text-[2.6rem] leading-none uppercase text-white`}
                            variants={fadeUp}
                            transition={{ duration: 0.45, ease: easeOutSoft }}
                        >
                            Perfil
                        </motion.h1>

                        {user ? (
                            <>
                                <motion.div
                                    className="mt-8 flex items-center gap-3.5 rounded-[1.45rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-4 py-4 text-[#121212] shadow-[4px_4px_0_#121212]"
                                    variants={fadeUp}
                                    transition={{
                                        duration: 0.4,
                                        ease: easeOutSoft,
                                    }}
                                >
                                    <span className="shrink-0 overflow-hidden rounded-full border-[2.5px] border-[#121212] shadow-[2px_2px_0_#121212]">
                                        <AnonymousAvatar
                                            seed={seedFromHandle(user.handle)}
                                            size={52}
                                        />
                                    </span>
                                    <div className="min-w-0 grow">
                                        <p className="mt-0.5 truncate text-[1.0625rem] font-semibold">
                                            {user.handle}
                                        </p>
                                        <p className="mt-0.5 text-[0.875rem] text-[#7B7B7B]">
                                            Entraste con {providerLabel[user.provider]}
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.button
                                    type="button"
                                    onClick={logout}
                                    className="mt-4 inline-flex h-12 items-center justify-center rounded-xl border-[3px] border-[#121212] bg-[#E31B23] px-5 text-[1rem] font-semibold text-white shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212]"
                                    variants={fadeUp}
                                    transition={{
                                        duration: 0.4,
                                        ease: easeOutSoft,
                                    }}
                                >
                                    Cerrar sesión
                                </motion.button>

                                <motion.section
                                    className="mt-10"
                                    variants={fadeUp}
                                    transition={{
                                        duration: 0.45,
                                        ease: easeOutSoft,
                                    }}
                                >
                                    <div className="mb-4 flex items-end justify-between px-1">
                                        <h2 className="text-[1.125rem] font-bold text-white">
                                            Tus chismokis
                                        </h2>
                                        <span className="text-[0.8125rem] text-white/50">
                                            {comments.length === 0
                                                ? "Nada todavía"
                                                : `${comments.length} ${
                                                      comments.length === 1
                                                          ? "respuesta"
                                                          : "respuestas"
                                                  }`}
                                        </span>
                                    </div>

                                    {comments.length === 0 ? (
                                        <div className="rounded-[1.45rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-4 py-5 text-[#121212] shadow-[4px_4px_0_#121212]">
                                            <p className="text-[1rem] leading-snug font-semibold">
                                                Aún no sueltas el chisme.
                                            </p>
                                            <p className="mt-1.5 text-[0.9375rem] leading-snug text-[#7B7B7B]">
                                                Entra a una pregunta y responde
                                                en anónimo. Aquí se junta todo
                                                lo que hayas publicado.
                                            </p>
                                            <Link
                                                href="/pregunta"
                                                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border-[3px] border-[#121212] bg-[#001789] px-4 text-[0.9375rem] font-semibold text-white shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#121212]"
                                            >
                                                Ir a la pregunta
                                            </Link>
                                        </div>
                                    ) : (
                                        <ul className="flex flex-col gap-4">
                                            {comments.map((item) => (
                                                <li key={item.id}>
                                                    <Link
                                                        href={`/pregunta/${item.questionId}`}
                                                        className="block rounded-[1.45rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-4 py-3.5 text-[#121212] shadow-[4px_4px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_#121212]"
                                                    >
                                                        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#001789]">
                                                            {item.parentId
                                                                ? "Respuesta"
                                                                : "Comentario"}{" "}
                                                            ·{" "}
                                                            {formatCommentTime(
                                                                item.createdAt,
                                                            )}
                                                        </p>
                                                        <p className="mt-1.5 text-[1rem] leading-snug font-semibold">
                                                            {item.questionTitle}
                                                        </p>
                                                        <p className="mt-2 text-[1rem] leading-[1.45rem]">
                                                            {item.content}
                                                        </p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.section>
                            </>
                        ) : (
                            <motion.div
                                className="mt-8 rounded-[1.45rem] border-[3px] border-[#121212] bg-[#FCFCFC] px-4 py-5 text-[#121212] shadow-[4px_4px_0_#121212]"
                                variants={fadeUp}
                                transition={{
                                    duration: 0.4,
                                    ease: easeOutSoft,
                                }}
                            >
                                <p className="text-[1.125rem] leading-snug font-semibold">
                                    Aquí viven tus chismokis.
                                </p>
                                <p className="mt-2 text-[0.9375rem] leading-snug text-[#7B7B7B]">
                                    Entra con tu cuenta para ver lo que ya
                                    publicaste y cerrar sesión cuando quieras.
                                    En el hilo sigues siendo anónimo.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSignUpOpen(true)}
                                    className="mt-4 inline-flex h-12 items-center justify-center rounded-xl border-[3px] border-[#121212] bg-[#E31B23] px-5 text-[1rem] font-semibold text-white shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212]"
                                >
                                    Entrar
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </article>
            </div>
            <Footer />
            <SignUpModal
                open={signUpOpen}
                onClose={() => setSignUpOpen(false)}
                onComplete={(provider) => login(provider)}
            />
        </div>
    );
};

export default ProfilePage;
