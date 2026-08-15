type Props = {
    payload: string;
    size?: number;
};

const MODULES = 25;

const hashString = (value: string) => {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i += 1) {
        hash ^= value.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
};

const inFinder = (x: number, y: number, ox: number, oy: number) => {
    const dx = x - ox;
    const dy = y - oy;
    return dx >= 0 && dx < 7 && dy >= 0 && dy < 7;
};

const finderOn = (x: number, y: number, ox: number, oy: number) => {
    const dx = x - ox;
    const dy = y - oy;
    const border = dx === 0 || dx === 6 || dy === 0 || dy === 6;
    const center = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
    return border || center;
};

const inAlignment = (x: number, y: number) =>
    x >= 16 && x <= 20 && y >= 16 && y <= 20;

const alignmentOn = (x: number, y: number) => {
    const dx = x - 16;
    const dy = y - 18 + 2;
    const border = dx === 0 || dx === 4 || dy === 0 || dy === 4;
    const center = dx === 2 && dy === 2;
    return border || center;
};

const isReserved = (x: number, y: number) => {
    if (inFinder(x, y, 0, 0) || inFinder(x, y, 18, 0) || inFinder(x, y, 0, 18)) {
        return true;
    }
    if (x < 8 && y < 8) return true;
    if (x > 16 && y < 8) return true;
    if (x < 8 && y > 16) return true;
    if (inAlignment(x, y)) return true;
    if (y === 6 || x === 6) return true;
    return false;
};

const buildGrid = (payload: string) => {
    const grid: boolean[][] = Array.from({ length: MODULES }, () =>
        Array<boolean>(MODULES).fill(false),
    );

    for (let y = 0; y < MODULES; y += 1) {
        for (let x = 0; x < MODULES; x += 1) {
            if (inFinder(x, y, 0, 0)) grid[y][x] = finderOn(x, y, 0, 0);
            else if (inFinder(x, y, 18, 0)) grid[y][x] = finderOn(x, y, 18, 0);
            else if (inFinder(x, y, 0, 18)) grid[y][x] = finderOn(x, y, 0, 18);
            else if (inAlignment(x, y)) grid[y][x] = alignmentOn(x, y);
            else if (y === 6 || x === 6) grid[y][x] = (x + y) % 2 === 0;
        }
    }

    let entropy = hashString(payload);
    for (let y = 0; y < MODULES; y += 1) {
        for (let x = 0; x < MODULES; x += 1) {
            if (isReserved(x, y)) continue;
            entropy = (Math.imul(entropy, 1664525) + 1013904223) >>> 0;
            grid[y][x] = (entropy & 1) === 1;
        }
    }

    return grid;
};

const QrMark = ({ payload, size = 196 }: Props) => {
    const grid = buildGrid(payload);
    const quiet = 2;
    const view = MODULES + quiet * 2;
    const modules: string[] = [];

    for (let y = 0; y < MODULES; y += 1) {
        for (let x = 0; x < MODULES; x += 1) {
            if (!grid[y][x]) continue;
            modules.push(
                `M${x + quiet} ${y + quiet}h1v1h-1z`,
            );
        }
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${view} ${view}`}
            shapeRendering="crispEdges"
            aria-label="Código QR del pase"
        >
            <rect width={view} height={view} fill="#FFFFFF" />
            <path d={modules.join("")} fill="#001789" />
        </svg>
    );
};

export default QrMark;
