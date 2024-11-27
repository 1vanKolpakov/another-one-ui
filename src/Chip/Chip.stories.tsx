import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Shared/Chip',
  component: Chip,
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

type Story = StoryObj<typeof Chip>;

export const DefaultChip: Story = {
  args: {
    name: 'Сельская',
    isActive: true
  },
};

