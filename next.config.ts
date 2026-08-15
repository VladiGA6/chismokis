import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [{ source: "/pase", destination: "/tarjeta", permanent: true }];
    },
};

export default nextConfig;
