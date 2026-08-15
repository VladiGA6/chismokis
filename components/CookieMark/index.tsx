type Props = {
    className?: string;
};

const CookieMark = ({ className }: Props) => (
    <svg
        className={className}
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden
    >
        <ellipse cx="60" cy="68" rx="46" ry="14" fill="#000" opacity="0.22" />
        <circle cx="60" cy="54" r="46" fill="#C68642" />
        <circle cx="60" cy="54" r="42" fill="#E0A35A" />
        <circle cx="38" cy="40" r="7" fill="#4A2A14" />
        <circle cx="62" cy="36" r="6" fill="#3A1F10" />
        <circle cx="80" cy="48" r="8" fill="#4A2A14" />
        <circle cx="48" cy="62" r="7" fill="#3A1F10" />
        <circle cx="72" cy="68" r="6" fill="#4A2A14" />
        <circle cx="88" cy="62" r="5" fill="#3A1F10" />
        <circle cx="32" cy="58" r="5" fill="#4A2A14" />
        <path
            d="M28 46c8-10 22-14 34-12"
            stroke="#F3D19A"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
        />
    </svg>
);

export default CookieMark;
