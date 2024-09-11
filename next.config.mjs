/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: ['src/gql/generated.tsx'],
  },
};

export default nextConfig;
