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
                protocol: "https",
                hostname: "zintrest-api.liara.run",
                pathname:"/uploads/**"
            }
        ],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
