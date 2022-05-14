import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ToggleLight } from "./toggleLight";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ToggleLight",
  component: ToggleLight,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    illuminate: { control: "radio" },
  },
} as ComponentMeta<typeof ToggleLight>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleLight> = (args) => (
  <ToggleLight {...args} />
);

export const LightOn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightOn.args = {
  illuminate: false,
};

export const LightOff = Template.bind({});
LightOff.args = {
  illuminate: true,
};
