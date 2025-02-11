/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'default',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '7f35-2-50-150-167.ngrok-free.app',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/**',
        },
      ],
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;