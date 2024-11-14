import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button, { BtnTypesEnum } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { color: 'red' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButton: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Обычная кнопка */}
      <Button {...args}>Active Button</Button>
      {/* Отключенная кнопка */}
      <Button {...args} disabled>
        Disabled Button
      </Button>
    </div>
  ),
  args: {
    children: 'Button', // это можно переопределить в каждой кнопке вручную
  },
};

export const GoldButton: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Обычная кнопка */}
      <Button {...args}>Active Button</Button>
      {/* Отключенная кнопка */}
      <Button {...args} disabled>
        Disabled Button
      </Button>
    </div>
  ),
  args: {
    type: BtnTypesEnum.gold,
    children: 'Button', // это можно переопределить в каждой кнопке вручную
  },
};

export const WhiteButton: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Обычная кнопка */}
      <Button {...args}>Active Button</Button>
      {/* Отключенная кнопка */}
      <Button {...args} disabled>
        Disabled Button
      </Button>
    </div>
  ),
  args: {
    type: BtnTypesEnum.white,
    children: 'Button', // это можно переопределить в каждой кнопке вручную
  },
};

export const BlueButton: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Обычная кнопка */}
      <Button {...args}>Active Button</Button>
      {/* Отключенная кнопка */}
      <Button {...args} disabled>
        Disabled Button
      </Button>
    </div>
  ),
  args: {
    type: BtnTypesEnum.blue,
    children: 'Button', // это можно переопределить в каждой кнопке вручную
  },
};



export const GreyButton: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Обычная кнопка */}
      <Button {...args}>Active Button</Button>
      {/* Отключенная кнопка */}
      <Button {...args} disabled>
        Disabled Button
      </Button>
    </div>
  ),
  args: {
    type: BtnTypesEnum.grey,
    children: 'Button', // это можно переопределить в каждой кнопке вручную
  },
};