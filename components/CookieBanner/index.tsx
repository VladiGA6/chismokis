"use client";

import { useCallback, useId, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { passionOne } from "@/app/fonts";
import CookieMark from "@/components/CookieMark";
import { easeOutSoft } from "@/lib/motion";

const STORAGE_KEY = "chismokis-cookie-consent";

const subscribe = (onStoreChange: () => void) => {
    window.addEventListener("storage", onStoreChange);
    return () => window.removeEventListener("storage", onStoreChange);
};

const getSnapshot = () =>
    window.localStorage.getItem(STORAGE_KEY) === "accepted";

const CookieBanner = () => {
    const titleId = useId();
    const storedAccepted = useSyncExternalStore(
        subscribe,
        getSnapshot,
        () => true,
    );
    const [dismissed, setDismissed] = useState(false);
    const visible = !storedAccepted && !dismissed;

    const accept = useCallback(() => {
        window.localStorage.setItem(STORAGE_KEY, "accepted");
        setDismissed(true);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.aside
                    className="cookie-banner"
                    role="dialog"
                    aria-labelledby={titleId}
                    aria-describedby={`${titleId}-desc`}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: easeOutSoft }}
                >
                    <div className="cookie-card">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-[2.5px] border-[#121212] bg-[#FFF4E8] shadow-[2px_2px_0_#121212]">
                            <CookieMark className="size-7" />
                        </span>
                        <div className="min-w-0">
                            <h2
                                id={titleId}
                                className={`${passionOne.className} text-[1.5rem] uppercase leading-none text-[#121212]`}
                            >
                                ¿Quieres chokis?
                            </h2>
                            <p
                                id={`${titleId}-desc`}
                                className="mt-1 text-[0.875rem] leading-snug font-medium text-[#7B7B7B]"
                            >
                                Utilizamos cookies para recordar tu visita y
                                que el sitio sepa más rico.{" "}
                                <Link
                                    href="/privacidad"
                                    className="font-semibold text-[#001789] underline-offset-2 hover:underline"
                                >
                                    Privacidad
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="cookie-actions">
                            <button
                                type="button"
                                onClick={accept}
                                className="inline-flex h-10 items-center justify-center rounded-xl border-[3px] border-[#121212] bg-[#FCFCFC] px-3.5 text-[0.9375rem] font-semibold text-[#121212] shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212]"
                            >
                                Gestionar
                            </button>
                            <button
                                type="button"
                                onClick={accept}
                                className="inline-flex h-10 items-center justify-center rounded-xl border-[3px] border-[#121212] bg-[#E31B23] px-3.5 text-[0.9375rem] font-semibold text-white shadow-[3px_3px_0_#121212] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212]"
                            >
                                Sí, quiero
                            </button>
                        </div>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
