"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import { easeOutSoft } from "@/lib/motion";

type Provider = "google" | "facebook" | "email";

type Props = {
    open: boolean;
    onClose: () => void;
    onComplete?: (provider: Provider) => void;
};

const GoogleMark = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
        <path
            fill="#4285F4"
            d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62Z"
        />
        <path
            fill="#34A853"
            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.81.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18Z"
        />
        <path
            fill="#FBBC05"
            d="M3.95 10.7A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.17.29-1.7V4.97H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.03l2.99-2.33Z"
        />
        <path
            fill="#EA4335"
            d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.97L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58Z"
        />
    </svg>
);

const FacebookMark = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
        <path
            fill="currentColor"
            d="M17 9.05C17 4.59 13.42 1 9 1S1 4.59 1 9.05c0 4.02 2.92 7.35 6.75 7.95v-5.62H5.9V9.05h1.85V7.2c0-1.84 1.09-2.86 2.76-2.86.8 0 1.64.14 1.64.14v1.82h-.92c-.91 0-1.2.57-1.2 1.15v1.6h2.04l-.33 2.33H10.03V17c3.83-.6 6.75-3.93 6.75-7.95Z"
        />
    </svg>
);

const MailMark = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect
            x="2"
            y="4"
            width="14"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        <path
            d="M3.2 5.4 9 9.6l5.8-4.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CookieMark = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" aria-hidden>
        <circle cx="7" cy="7" r="6.2" fill="#E0A35A" />
        <circle cx="4.4" cy="5.2" r="1.15" fill="#4A2A14" />
        <circle cx="8.2" cy="4.4" r="0.95" fill="#3A1F10" />
        <circle cx="9.4" cy="7.6" r="1.1" fill="#4A2A14" />
        <circle cx="5.6" cy="8.8" r="0.9" fill="#3A1F10" />
    </svg>
);

const SignUpModal = ({ open, onClose, onComplete }: Props) => {
    const titleId = useId();
    const [mounted, setMounted] = useState(false);
    const [emailOpen, setEmailOpen] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) {
            setEmailOpen(false);
            setEmail("");
            return;
        }

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    if (!mounted) return null;

    const finish = (provider: Provider) => {
        onComplete?.(provider);
        onClose();
    };

    return createPortal(
        <AnimatePresence>
            {open && (
        <motion.div
            key="signup"
            className="signup-root"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.button
                type="button"
                className="signup-backdrop"
                aria-label="Cerrar registro"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
            />
            <motion.div
                className="signup-card"
                initial={{ opacity: 0, y: 14, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: easeOutSoft }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full text-[#7B7B7B] transition-colors hover:bg-[#F1F1F1] hover:text-[#121212]"
                    aria-label="Cerrar"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M5 5l14 14M19 5 5 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <p className="text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-[#001789]">
                    Chismokis
                </p>
                <h2
                    id={titleId}
                    className={`${passionOne.className} mt-1 text-center text-[2rem] uppercase leading-none text-[#121212]`}
                >
                    Regístrate para el premio
                </h2>
                <p className="mx-auto mt-2 max-w-[19rem] text-center text-[0.9375rem] leading-snug font-medium text-[#7B7B7B]">
                    Tu chisme sigue anónimo. El registro es solo para
                    enviarte la gift card si ganas.
                </p>

                <div className="mt-4 rounded-2xl border border-[#F0D7B4] bg-[#FFF4E8] px-3.5 py-3">
                    <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1px_0px_0px_rgba(255,255,255,0.8)_inset,0px_0px_0px_1px_#F0D7B4]">
                            <CookieMark />
                        </span>
                        <div>
                            <p className="text-[0.9375rem] leading-snug font-semibold text-[#121212]">
                                La historia con más chokis se lleva una gift
                                card de Amazon.
                            </p>
                            <p className="mt-1 text-[0.875rem] leading-snug text-[#7B7B7B]">
                                La comunidad vota con cookies. Al cierre, si
                                la tuya gana, te mandamos el premio. Por eso
                                pedimos tu cuenta.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex flex-col gap-2.5">
                    <button
                        type="button"
                        onClick={() => finish("google")}
                        className="relative inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-[#E5E5E5] to-[#E2E2E2] px-5 text-[1rem] font-semibold text-[#121212] shadow-[0_3px_4px_-1px_rgba(0,0,0,0.15),0px_1px_0px_0px_rgba(255,255,255,0.33)_inset,0px_0px_0px_1px_#D4D4D4] transition-all hover:shadow-[0px_3px_8px_-2px_rgba(0,0,0,0.30),0px_1px_0px_0px_rgba(255,255,255,0.70)_inset,0px_0px_0px_1px_#E6E6E6]"
                    >
                        <GoogleMark />
                        Continuar con Google
                    </button>
                    <button
                        type="button"
                        onClick={() => finish("facebook")}
                        className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#1877F2] px-5 text-[1rem] font-semibold text-white shadow-[0px_1px_0px_0px_rgba(255,255,255,0.22)_inset,0px_0px_0px_1px_#0F5FCC,0px_3px_4px_-1px_rgba(24,119,242,0.45)] transition-opacity hover:opacity-90"
                    >
                        <FacebookMark />
                        Continuar con Facebook
                    </button>
                    <button
                        type="button"
                        onClick={() => setEmailOpen(true)}
                        className="relative inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-[#1A2FA3] to-[#001789] px-5 text-[1rem] font-semibold text-[#FCFCFC] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.22)_inset,0px_0px_0px_1px_#00125F,0px_3px_4px_-1px_rgba(0,23,137,0.55)] transition-opacity hover:opacity-90"
                    >
                        <MailMark />
                        Continuar con correo
                    </button>
                </div>

                <AnimatePresence>
                {emailOpen && (
                    <motion.form
                        className="mt-3 overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: easeOutSoft }}
                        onSubmit={(event) => {
                            event.preventDefault();
                            if (!email.trim()) return;
                            finish("email");
                        }}
                    >
                        <label className="sr-only" htmlFor={`${titleId}-email`}>
                            Correo electrónico
                        </label>
                        <input
                            id={`${titleId}-email`}
                            type="email"
                            required
                            autoFocus
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="tu@correo.com"
                            className="h-12 w-full rounded-xl border border-[#E2E2E2] bg-[#F1F1F1] px-3.5 text-[1rem] text-[#121212] outline-none placeholder:text-[#7B7B7B] focus:border-[#001789] focus:bg-[#FCFCFC]"
                        />
                        <button
                            type="submit"
                            disabled={email.trim().length === 0}
                            className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#E31B23] text-[1rem] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                        >
                            Crear cuenta
                        </button>
                    </motion.form>
                )}
                </AnimatePresence>

                <p className="mt-4 text-center text-[0.8125rem] leading-snug text-[#7B7B7B]">
                    Al continuar aceptas los{" "}
                    <Link
                        href="/terminos"
                        className="font-semibold text-[#001789] underline-offset-2 hover:underline"
                        onClick={onClose}
                    >
                        términos
                    </Link>{" "}
                    y la{" "}
                    <Link
                        href="/privacidad"
                        className="font-semibold text-[#001789] underline-offset-2 hover:underline"
                        onClick={onClose}
                    >
                        privacidad
                    </Link>
                    .
                </p>
            </motion.div>
        </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
};

export default SignUpModal;
