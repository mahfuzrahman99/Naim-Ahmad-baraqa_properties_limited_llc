/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.decorilla.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "houseofhipsters.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.architecturaldigest.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fiverr-res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
