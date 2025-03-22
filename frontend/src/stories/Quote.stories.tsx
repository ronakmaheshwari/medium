import { Meta, StoryFn } from "@storybook/react";
import Quote from "../components/Quotes";// Adjust path if needed

export default {
  title: "Components/Quote",
  component: Quote,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
} as Meta;

const Template: StoryFn = () => <Quote />;

export const Default = Template.bind({});
