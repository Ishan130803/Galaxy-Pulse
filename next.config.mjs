/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'witty-stars-stare.loca.lt',
        port: '',
        pathname: '/image',
      },
    ],
  },
};

export default nextConfig;
