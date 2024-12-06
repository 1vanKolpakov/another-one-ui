import styles from './CircularProgress.module.scss'

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CircularProgress from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Shared/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {

  //   }
  tags: ['autodocs'],

  }

	export default meta;

	type Story = StoryObj<typeof CircularProgress>;

	export const DefaultCircularProgress: Story = {
		args: {

		},
	};