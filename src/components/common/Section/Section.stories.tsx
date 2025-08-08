import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Section } from ".";

import ProductProvider from "@/providers/ProductProvider";

const meta = {
  title: "common/Section",
  component: Section.Hero,
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {};

export const Products: Story = {
  render: () => (
    <ProductProvider>
      <Section.Products />
    </ProductProvider>
  ),
};

export const Banner: Story = {
  render: () => <Section.Banner />,
};
