import styles from './SearchDropdown.module.scss'

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchDropdown from './SearchDropdown';

const meta: Meta<typeof SearchDropdown> = {
  title: 'Shared/SearchDropdown',
  component: SearchDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof SearchDropdown>;

export const DefaultSearchDropdown: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selectedValue: 'Option 1',
    handleChange: (selectedOption: string) => console.log(selectedOption),
    label: 'Select an option',
    className: '',
    name: 'search-dropdown',
    noOptionsMessage: 'No options found',
  },
};

export const EmptyOptionsSearchDropdown: Story = {
  args: {
    options: [],
    selectedValue: '',
    handleChange: (selectedOption: string) => console.log(selectedOption),
    label: 'Select an option',
    className: '',
    name: 'search-dropdown',
    noOptionsMessage: 'No options found',
  },
};

export const CustomNoOptionsMessageSearchDropdown: Story = {
  args: {
    options: [],
    selectedValue: '',
    handleChange: (selectedOption: string) => console.log(selectedOption),
    label: 'Select an option',
    className: '',
    name: 'search-dropdown',
    noOptionsMessage: 'Nothing found',
  },
};