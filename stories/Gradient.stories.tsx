import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IPropsMain } from '../src/components/Colorpicker/types';
import ReactGPicker from './ReactGPicker';

const meta: Meta<typeof ReactGPicker> = {
  title: 'Example/Gradient',
  component: ReactGPicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Gradient: Story = {
  args: {
    value:
      'linear-gradient(315deg, hsl(199, 88%, 87%) 8.00%,hsl(217, 96%, 81%) 92.00%)',
    format: 'hsl',
    solid: false,
    gradient: true,
    debounceMS: 300,
    debounce: true,
    showAlpha: true,
    colorBoardHeight: 120,
    popupWidth: 267,
    onChange: (value: string) => value
  }
};
