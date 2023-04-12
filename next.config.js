const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
module.exports = withPayload(
  {
    nextConfig,
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies.

    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./payload.config.ts"),

    // Point to custom Payload CSS (optional)
    // cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./src/payload.ts"),
  }
);
