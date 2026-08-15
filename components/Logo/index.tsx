import Link from "next/link";

type Props = {
    className?: string;
    onlyIcon?: boolean;
};

const CookieMark = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
    >
        <circle cx="16" cy="16" r="13" fill="#001789" />
        <circle cx="16" cy="16" r="10.5" fill="#F8F0D8" />
        <circle cx="11.2" cy="13.2" r="1.55" fill="#001789" />
        <circle cx="17.8" cy="11.4" r="1.2" fill="#001789" />
        <circle cx="20.4" cy="17.6" r="1.45" fill="#001789" />
        <circle cx="13.6" cy="19.8" r="1.15" fill="#001789" />
        <circle cx="16.4" cy="15.6" r="0.85" fill="#001789" />
        <path
            d="M24.2 6.4c2.4.2 3.9 1.9 3.6 4.1-.2 1.6-1.4 2.7-3 3.1"
            stroke="#001789"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
        <circle cx="27.4" cy="6.2" r="2.4" fill="#001789" />
    </svg>
);

const Logo = ({ className, onlyIcon }: Props) => (
    <Link
        className={`inline-flex items-center gap-3 p-1 ${className || ""}`}
        href="/"
    >
        <CookieMark className="size-8" />
        {!onlyIcon && (
            <span className="text-[1.25rem] leading-none font-semibold tracking-[-0.04em] text-[#001789]">
                Chismokis
            </span>
        )}
    </Link>
);

export default Logo;
