import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IPropsMain } from '../src/components/Colorpicker/types';
import ReactGPicker from './ReactGPicker';

const meta: Meta<typeof ReactGPicker> = {
  title: 'Example/Solid',
  component: ReactGPicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    value: '#fff',
    format: 'rgb',
    solid: true,
    gradient: false,
    debounceMS: 300,
    debounce: true,
    showAlpha: true,
    colorBoardHeight: 120,
    popupWidth: 267,
    onChange: (value: string) => value
  }
};
