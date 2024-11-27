import styles from './Spoiler.module.scss'

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spoiler from './Spoiler';

const meta: Meta<typeof Spoiler> = {
  title: 'Shared/Spoiler',
  component: Spoiler,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {

  //   }
  tags: ['autodocs'],

  }

	export default meta;

	type Story = StoryObj<typeof Spoiler>;

	export const DefaultSpoiler: Story = {
		args: {

		},
	};