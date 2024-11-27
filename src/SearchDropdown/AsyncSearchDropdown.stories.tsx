import styles from './AsyncSearchDropdown.module.scss';

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AsyncSearchDropdown from './AsyncSearchDropdown';

const meta: Meta<typeof AsyncSearchDropdown> = {
  title: 'Shared/AsyncSearchDropdown',
  component: AsyncSearchDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AsyncSearchDropdown>;

export const DefaultAsyncSearchDropdown: Story = {
  args: {
    label: 'Search',
    name: 'search-dropdown',
    noOptionsMessage: 'Ничего не найдено',
    debounceTime: 300,
  },
};

export const WithSelectedValue: Story = {
  args: {
    label: 'Search',
    name: 'search-dropdown',
    noOptionsMessage: 'Ничего не найдено',
    debounceTime: 300,
    selectedValue: 'Option 1',
  },
};

export const WithCustomDebounceTime: Story = {
  args: {
    label: 'Search',
    name: 'search-dropdown',
    noOptionsMessage: 'Ничего не найдено',
    debounceTime: 1000,
  },
};

export const WithFetchOptions: Story = {
  args: {
    label: 'Search',
    name: 'search-dropdown',
    noOptionsMessage: 'Ничего не найдено',
    debounceTime: 300,
    fetchOptions: async (query: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return ['Option 1', 'Option 2', 'Option 3'];
    },
  },
};

export const ChooseOption: Story = {
  args: {
    label: 'Search',
    name: 'search-dropdown',
    noOptionsMessage: 'Ничего не найдено',
    debounceTime: 300,
    fetchOptions: async (query: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return ['Option 1', 'Option 2', 'Option 3'];
    },
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
      <div>
        <AsyncSearchDropdown
          {...args}
          selectedValue={selectedValue}
          handleChange={(selectedOption) => {
            setSelectedValue(selectedOption);
          }}
        />
        <div>Selected value: {selectedValue}</div>
      </div>
    );
  },
};