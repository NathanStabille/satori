// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crmcontent.betconstruct.com",
        pathname: "/**",
      },
    ],
  },
};
