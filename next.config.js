// next.config.js
module.exports = {
  env: {
    DEEPL_API_KEY: process.env.DEEPL_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crmcontent.betconstruct.com",
        pathname: "/**",
      },
    ],
  },

  output: "standalone",
};
