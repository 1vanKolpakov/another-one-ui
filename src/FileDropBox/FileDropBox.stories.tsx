import styles from './FileDropBox.module.scss'

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FileDropBox from './FileDropBox';

const meta: Meta<typeof FileDropBox> = {
  title: 'Shared/FileDropBox',
  component: FileDropBox,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {

  //   }
  tags: ['autodocs'],

  }

	export default meta;

	type Story = StoryObj<typeof FileDropBox>;

	export const DefaultFileDropBox: Story = {
		args: {

		},
	};