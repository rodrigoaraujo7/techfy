import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Product } from ".";

const meta = {
  title: "ui/Product",
  component: Product.Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Product** is a set of reusable components for displaying product information.

**Example usage:**

\`\`\`tsx
<Product.Card>
  <Product.FavoriteButton />
  <Product.Title>Product Title</Product.Title>
  <Product.Price>500</Product.Price>
  <Product.Button />
</Product.Card>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: { disable: true },
      description:
        "The content inside the Card, usually composed of Product subcomponents.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Product.Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Product.Card>
      <Product.FavoriteButton />
      <Product.Title>Product Title</Product.Title>
      <Product.Price>500</Product.Price>
      <Product.Button />
    </Product.Card>
  ),
};
