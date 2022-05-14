import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./header";
import { DarkToggle } from "../darkToggle/darkToggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    illuminate: { control: "radio" },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <DarkToggle isDark={args.illuminate} />
  </Header>
);

export const HeaderLightOn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeaderLightOn.args = {
  illuminate: false,
};

export const HeaderLightOff = Template.bind({});
HeaderLightOff.args = {
  illuminate: true,
};
