import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DarkToggle } from "./darkToggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DarkToggle",
  component: DarkToggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDark: { control: "radio" },
  },
} as ComponentMeta<typeof DarkToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DarkToggle> = (args) => (
  <DarkToggle {...args} />
);

export const LightMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightMode.args = {
  isDark: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  isDark: true,
};
