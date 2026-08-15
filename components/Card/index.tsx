type Props = {
    className?: string;
    title?: string;
    span?: 1 | 2 | 3 | 4;
    center?: boolean;
    children: React.ReactNode;
    isGray?: boolean;
};

const Card = ({
    className,
    title,
    span = 1,
    center,
    children,
    isGray,
}: Props) => {
    return (
        <div
            className={`group relative mt-2 mx-1 border border-[#ECECEC] ${
                span > 3 ? "rounded-[1.375rem]" : "rounded-2xl"
            } ${
                span === 2
                    ? "w-[calc(50%-0.5rem)] max-[1023px]:w-[calc(100%-0.5rem)]"
                    : span === 3
                      ? "w-[calc(33.333%-0.5rem)] max-[1259px]:w-[calc(50%-0.5rem)] max-[1023px]:w-[calc(100%-0.5rem)]"
                      : span === 4
                        ? "w-[calc(25%-0.5rem)] max-[1259px]:w-[calc(33.333%-0.5rem)] max-[1023px]:w-[calc(50%-0.5rem)]"
                        : "w-[calc(100%-0.5rem)]"
            } ${center ? "flex justify-center items-center" : ""} ${
                isGray ? "bg-[#F8F7F7]" : "bg-[#FCFCFC]"
            } ${className || ""}`}
        >
            {title && (
                <div
                    className={`absolute top-2 left-2 z-2 px-3 py-1 border rounded-xl text-[0.8125rem] leading-[1.15rem] font-medium ${
                        isGray
                            ? "bg-[#FCFCFC] border-[#ECECEC]"
                            : "bg-[#F1F1F1] border-transparent"
                    }`}
                >
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};

export default Card;
