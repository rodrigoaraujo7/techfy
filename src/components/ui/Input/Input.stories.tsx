import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from ".";

const meta = {
  title: "ui/Input",
  component: Input.Container,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Input** is a set of reusable components.

**Example usage:**

\`\`\`tsx
<Input.Container>
  <Input.Label>From</Input.Label>
  <Input.Wrapper>
    <Input.Field placeholder="0" />
  </Input.Wrapper>
</Input.Container>
\`\`\`
        `,
      },
    },
  },
  args: {
    children: "",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Input.Container>
      <Input.Label>Label</Input.Label>
      <Input.Wrapper>
        <Input.Field placeholder="placeholder" type="text" />
      </Input.Wrapper>
    </Input.Container>
  ),
};
