"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/motion";

type Props = {
    children: React.ReactNode;
};

const Template = ({ children }: Props) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOutSoft }}
    >
        {children}
    </motion.div>
);

export default Template;
