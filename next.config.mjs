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
  async redirects() {
    return [
      // 1. Redirect /category/{categorySlug}/{productSlug} to /product/{categorySlug}/{productSlug}
      {
        source: '/category/:categorySlug/:productSlug',
        destination: '/product/:categorySlug/:productSlug',
        permanent: true,
      },
      // 2. Special product redirects (category or slug normalization)
      {
        source: '/product/anti-diarrhea-ulcerative-colitis/:productSlug',
        destination: '/product/anti-diarrhea/:productSlug',
        permanent: true,
      },
      {
        source: '/product/cardio-metabolic/Irbesartan-hct',
        destination: '/product/cardio-metabolic/irbesartan-hct',
        permanent: true,
      },
      {
        source: '/product/cardio-metabolic/Losartan-hct',
        destination: '/product/cardio-metabolic/losartan-hct',
        permanent: true,
      },
      {
        source: '/product/anti-infective/ciprofloxacin-hcl',
        destination: '/product/anti-infective/ciprofloxacin',
        permanent: true,
      },
      {
        source: '/product/nsaids-pain-killers/n-acetylcysteine',
        destination: '/product/nsaids-pain-killers/n-acetylcysteine-effervescent',
        permanent: true,
      },
      {
        source: '/product/diuretics/fresemide',
        destination: '/product/diuretics/furosemide',
        permanent: true,
      },
      // Add more as needed
    ];
  },
};

export default nextConfig;