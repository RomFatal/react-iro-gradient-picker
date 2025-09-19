import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IPropsMain } from '../src/components/Colorpicker/types';
import ReactGPicker from './ReactGPicker';

const meta: Meta<typeof ReactGPicker> = {
  title: 'Example/Both',
  component: ReactGPicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Both: Story = {
  args: {
    value: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    format: 'rgb',
    solid: true,
    gradient: true,
    debounceMS: 300,
    debounce: true,
    showAlpha: true,
    colorBoardHeight: 120,
    popupWidth: 267,
    onChange: (value: string) => value
  }
};
