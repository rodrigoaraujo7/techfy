import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from ".";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
    variant: {
      description: "Button color",
      control: { type: "radio" },
      options: ["solid", "light", "dark"],
    },
    size: {
      description: "Button size",
      control: { type: "radio" },
      options: ["sm", "lg"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    size: "lg",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
