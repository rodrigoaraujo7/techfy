import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Sidebar } from ".";

const meta = {
  title: "common/Sidebar",
  parameters: {
    layout: "center",
  },
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
