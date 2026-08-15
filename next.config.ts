import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        root: path.resolve(process.cwd()),
    },
    async redirects() {
        return [{ source: "/pase", destination: "/tarjeta", permanent: true }];
    },
};

export default nextConfig;
