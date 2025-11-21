/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // <--- Add this line
  },
  reactCompiler: true,
};

export default nextConfig;
