import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from ".";

const meta = {
  title: "common/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
