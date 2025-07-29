/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'default',
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
  };
  
  export default nextConfig;