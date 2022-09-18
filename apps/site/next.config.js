const withTM = require("next-transpile-modules")(["@indonesia-api/data"]);

/**
 * @type {import('next').NextConfig}
 **/
const config = {
  reactStrictMode: true,
};

module.exports = withTM(config);
