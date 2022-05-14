import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/CardDisplay",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "radio" },
    text: { control: "text" },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const WhiteCardNoText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WhiteCardNoText.args = {
  color: "white",
};

export const BlackCardNoText = Template.bind({});
BlackCardNoText.args = {
  color: "black",
};

export const BlackCardWithShortText = Template.bind({});
BlackCardWithShortText.args = {
  color: "black",
  text: "What brings all the boys to the yard?",
};

export const WhiteCardWithShortText = Template.bind({});
WhiteCardWithShortText.args = {
  color: "white",
  text: "Explosive diarrhea that hits everyone in the room. ",
};

export const BlackCardWithMinHeight = Template.bind({});
BlackCardWithMinHeight.args = {
  color: "black",
  text: "Once you pop, the ______ don't stop!",
  height: "min",
};

export const WhiteCardWithMinHeight = Template.bind({});
WhiteCardWithMinHeight.args = {
  color: "white",
  text: "The horrific mental scarring of childbirth.",
  height: "min",
};
