import type { Transition, Variants } from "framer-motion";

export const easeOutSoft = [0.22, 0.8, 0.28, 1] as const;
export const easeInSoft = [0.76, 0, 0.24, 1] as const;

export const duration = {
    fast: 0.22,
    base: 0.4,
    slow: 0.55,
} as const;

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

export const fade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
};

export const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.06,
        },
    },
};

export const staggerFast: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.04,
        },
    },
};

/** Dispara en cuanto entra un píxel; margen inferior anticipa la animación al acercarse al borde. */
export const viewportOnce = {
    once: true,
    amount: 0,
    margin: "0px 0px 120px 0px",
} as const;

export const springPop: Transition = {
    type: "spring",
    stiffness: 420,
    damping: 28,
    mass: 0.7,
};

export const tweenSoft = (delay = 0, ms = duration.base): Transition => ({
    duration: ms,
    delay,
    ease: easeOutSoft,
});
