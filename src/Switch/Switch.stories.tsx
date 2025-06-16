import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Shared/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // direction: {
    //   control: {
    //     type: 'select'
    //   },
    //   options: [Direction.column, Direction.row],
    //   description: 'desc',
    //   table: {
    //     type: { summary: Object.keys(Direction).join(' | ') },
    //     defaultValue: { summary: Direction.column }
    //   },
      
    // },
    // size: {
    //   control: {
    //     type: 'select'
    //   },
    //   options: [SizeEnum.small, SizeEnum.large],
    //   description: 'desc',
    //   table: { 
    //     type: { summary: Object.keys(SizeEnum).join(' | ') },
    //     defaultValue: { summary: SizeEnum.small} 
    //   }
    // }

  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
  args: {
    name: 'Сельская',
  },
};

