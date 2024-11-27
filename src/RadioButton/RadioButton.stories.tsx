import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import RadioButton, { SizeEnum } from './RadioButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: [SizeEnum.small, SizeEnum.large]
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { color: 'red' },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmallRadioButton: Story = {
  args: {
    value: 'M',
    label: 'Male',
    name: 'alsls',
    checked: true,
    size: SizeEnum.small
  },
};

export const BigRadioButton: Story = {
  args: {
    value: 'M',
    name: 'alsls',
    label: 'Female',
    size: SizeEnum.large
  },
};

export const DisabledBigRadioButton: Story = {
  args: {
    value: 'M',
    name: 'alsls',
    label: 'Male',
    size: SizeEnum.large,
    disabled: true,
    checked: true
  },
};

export const RadioGroup: StoryObj<typeof RadioButton> = {
  args: {
   
    name: 'adasdas',
  },
  render: (args) => (
    <>
    <RadioButton {...args} value='M' label='Male' size={SizeEnum.small} />
    <RadioButton {...args} value='F' label='Female' size={SizeEnum.small} />
    </>
  )
};
