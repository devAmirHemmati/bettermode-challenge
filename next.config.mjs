/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: ['src/gql/generated.tsx'],
  },
  reactStrictMode: false,
};

export default nextConfig;
