/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'default',
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'http://localhost:1337',
          port: '1337',
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