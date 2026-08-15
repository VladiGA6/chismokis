import QRCode from "react-qr-code";

type Props = {
    value: string;
    size?: number;
};

const QrMark = ({ value, size = 196 }: Props) => (
    <QRCode
        value={value}
        size={size}
        bgColor="#FFFFFF"
        fgColor="#001789"
        level="M"
        aria-label="Código QR de la tarjeta"
    />
);

export default QrMark;
