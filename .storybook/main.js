module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: { builder: "@storybook/builder-vite" },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
