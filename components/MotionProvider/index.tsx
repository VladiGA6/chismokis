"use client";

import { MotionConfig } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

const MotionProvider = ({ children }: Props) => (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
