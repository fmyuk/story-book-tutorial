import Circle from "./Circle";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Example/Circle",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["orange", "green", "yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Orange color circle
 */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};

/**
 * Green color circle
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

/**
 * Yellow color circle
 */
export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
