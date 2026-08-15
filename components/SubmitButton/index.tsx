"use client";

import { motion } from "framer-motion";

type Props = {
    className?: string;
    active?: boolean;
    disabled?: boolean;
    isMedium?: boolean;
};

const SubmitButton = ({ className, active, disabled, isMedium }: Props) => (
    <motion.button
        type="submit"
        whileTap={disabled ? undefined : { scale: 0.92 }}
        className={`relative flex cursor-pointer items-center justify-center border-[2.5px] border-[#121212] shadow-[2px_2px_0_#121212] transition-[transform,box-shadow,background-color,color] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#121212] ${
            active
                ? "bg-[#001789] text-[#FCFCFC]"
                : "bg-[#FCFCFC] text-[#121212]"
        } ${isMedium ? "size-8 rounded-lg" : "size-10 rounded-xl"} ${
            disabled ? "pointer-events-none opacity-40" : ""
        } ${className || ""}`}
        aria-label="Publicar"
    >
        <svg
            className="relative size-4 fill-current"
            width={16}
            height={16}
            viewBox="0 0 16 16"
        >
            <path d="M12.701 5.607a.75.75 0 0 1-1.061 1.061L8.755 3.781l-.001 9.69a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.75-.75l.001-9.691-2.887 2.888a.75.75 0 0 1-.977.073l-.084-.073a.75.75 0 0 1 0-1.061l3.224-3.224c.814-.814 2.133-.814 2.946 0l3.224 3.224z" />
        </svg>
    </motion.button>
);

export default SubmitButton;
