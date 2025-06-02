/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       new URL(
//         "https://xwmbmvmfyxfomalwylij.supabase.co/storage/v1/object/public/cabin-images/**"
//       ),
//     ],
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xwmbmvmfyxfomalwylij.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "qfvpyreitzgxuimnvjpy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
