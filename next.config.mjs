/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port:"5000",
                pathname:"/uploads/**"
            }
        ],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
