import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  agentRules: false,
  // Dev assets are blocked off-origin. The preview tunnel and 127.0.0.1 need to be named or the UI never hydrates.
  allowedDevOrigins: ["127.0.0.1", "*.trycloudflare.com"],
};

export default nextConfig;
