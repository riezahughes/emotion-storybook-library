const { mergeConfig } = require("vite");

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: "bar" },
      },
    });
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: { builder: "@storybook/builder-vite" },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
