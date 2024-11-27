import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup, { Direction } from './RadioGroup';
import { SizeEnum } from '../RadioButton/RadioButton';

const meta: Meta<typeof RadioGroup> = {
  title: 'Shared/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      control: {
        type: 'select'
      },
      options: [Direction.column, Direction.row],
      description: 'desc',
      table: {
        type: { summary: Object.keys(Direction).join(' | ') },
        defaultValue: { summary: Direction.column }
      },
      
    },
    size: {
      control: {
        type: 'select'
      },
      options: [SizeEnum.small, SizeEnum.large],
      description: 'desc',
      table: { 
        type: { summary: Object.keys(SizeEnum).join(' | ') },
        defaultValue: { summary: SizeEnum.small} 
      }
    }

  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const DefaultRadioGroup: Story = {
  args: {
    title: 'Select your gender',
    name: 'gender',
    options: [
      { value: 'M', label: 'Male', name: 'adasdas', },
      { value: 'F', label: 'Female', name: 'adasdas' },
    ],
  },
};


export const RowRadioGroup: Story = {
  args: {
    title: 'Choose a size',
    direction: Direction.row,
    name: 'size',
    options: [
      { value: 'S', label: 'Small', name: 'adasdas' },
      { value: 'M', label: 'Medium', name: 'adasdas' },
      { value: 'L', label: 'Large', name: 'adasdas' },
    ],
  },
};

export const RowRadioGroupLarge: Story = {
  args: {
    title: 'Choose a size',
    direction: Direction.row,
    size: SizeEnum.large,
    name: 'size',
    options: [
      { value: 'S', label: 'Small', name: 'adasdas' },
      { value: 'M', label: 'Medium', name: 'adasdas' },
      { value: 'L', label: 'Large', name: 'adasdas' },
    ],
  },
};

export const columnRadioGroup: Story = {
  args: {
    title: 'Choose a size',
    direction: Direction.column,
    name: 'size',
    options: [
      { value: 'S', label: 'Small', name: 'adasdas' },
      { value: 'M', label: 'Medium', name: 'adasdas' },
      { value: 'L', label: 'Large', name: 'adasdas' },
    ],
  },
};


export const RowRadioGroupWithDisable: Story = {
  args: {
    title: 'Choose a size',
    direction: Direction.column,
    name: 'size',
    options: [
      { value: 'S', label: 'Small', name: 'adasdas' },
      { value: 'M', label: 'Medium', name: 'adasdas' },
      { value: 'L', label: 'Large', name: 'adasdas', disabled: true },
    ],
  },
};

// export const DisabledOptionsRadioGroup: Story = {
//   args: {
//     title: 'Availability',
//     direction: 'column',
//     name: 'availability',
//     options: [
//       { value: 'available', label: 'Available', checked: true },
//       { value: 'unavailable', label: 'Unavailable', checked: false, disabled: true },
//     ],
//   },
// };
