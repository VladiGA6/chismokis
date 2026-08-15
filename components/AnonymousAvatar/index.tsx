type Props = {
    seed: number;
    size?: number;
    className?: string;
};

const palettes = [
    { dough: "#F8F0D8", chip: "#001789", blush: "#E8B4B4" },
    { dough: "#F3E4C0", chip: "#1A2FA3", blush: "#D9A08A" },
    { dough: "#EFE6CF", chip: "#00125F", blush: "#E0C0B0" },
    { dough: "#F6EBD2", chip: "#2438B0", blush: "#E7C4A8" },
    { dough: "#F1E2B8", chip: "#001789", blush: "#DDB8A4" },
    { dough: "#FAF3E0", chip: "#0A228F", blush: "#E6B8B0" },
];

const AnonymousAvatar = ({ seed, size = 32, className }: Props) => {
    const palette = palettes[Math.abs(seed) % palettes.length];
    const offset = (seed % 5) - 2;

    return (
        <svg
            className={`rounded-full ${className || ""}`}
            width={size}
            height={size}
            viewBox="0 0 32 32"
            aria-hidden
        >
            <circle cx="16" cy="16" r="16" fill={palette.chip} />
            <circle cx="16" cy="17" r="11.5" fill={palette.dough} />
            <circle cx={11 + offset * 0.2} cy="13.5" r="1.4" fill={palette.chip} />
            <circle cx={21 - offset * 0.15} cy="13.2" r="1.4" fill={palette.chip} />
            <circle cx="16" cy="16.8" r="0.9" fill={palette.chip} />
            <circle cx={12.5 + offset} cy="20.4" r="1.1" fill={palette.blush} />
            <circle cx={19.5 - offset} cy="20.4" r="1.1" fill={palette.blush} />
            <path
                d="M13.2 22.2c1.1 1.3 4.5 1.3 5.6 0"
                stroke={palette.chip}
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx={9.5} cy="17.8" r="1.05" fill={palette.chip} />
            <circle cx={22.4} cy="16.6" r="0.95" fill={palette.chip} />
        </svg>
    );
};

export default AnonymousAvatar;
