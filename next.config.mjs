/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'default',
      formats: ['image/webp', 'image/avif'], // Enable modern formats
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mastermind.thepurepharma.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'mastermind.thepurepharma.com',
          port: '1342',
          pathname: '/**',
        },
      ],
    },
    reactStrictMode: true,
    // Optimize bundle splitting
    experimental: {
      optimizePackageImports: ['motion/react', 'react-icons'],
    },
  };
  
  export default nextConfig;