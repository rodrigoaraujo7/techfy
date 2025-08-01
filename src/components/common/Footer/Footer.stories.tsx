import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from ".";

const meta = {
  title: "common/Footer",
  parameters: {
    layout: "bottom",
  },
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
