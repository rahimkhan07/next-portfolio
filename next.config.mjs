/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ghchart.rshah.org' },
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' },
      { protocol: 'https', hostname: 'streak-stats.demolab.com' },
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
    ],
  },
};

export default nextConfig;
