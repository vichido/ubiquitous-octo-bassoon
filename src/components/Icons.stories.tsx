import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { EyeIcon, EyeOffIcon, AppleIcon, GoogleIcon, CoversLogo } from './Icons';

const meta = {
  title: 'Components/Icons',
  component: EyeIcon,
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 64, step: 4 } },
    color: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof EyeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Eye icon used to toggle password visibility.
 * Default size is 24px with gray color (#9CA3AF).
 */
export const Eye: Story = {
  render: (args) => <EyeIcon {...args} />,
  args: {
    size: 24,
    color: '#9CA3AF',
  },
};

/**
 * Eye-off icon shown when password is visible.
 * Used in conjunction with EyeIcon for toggling password visibility.
 */
export const EyeOff: Story = {
  render: (args) => <EyeOffIcon {...args} />,
  args: {
    size: 24,
    color: '#9CA3AF',
  },
};

/**
 * Apple logo icon for social authentication.
 * Default white color on dark backgrounds.
 */
export const Apple: Story = {
  render: (args) => <AppleIcon {...args} />,
  args: {
    size: 20,
    color: '#FFFFFF',
  },
};

/**
 * Google logo icon for social authentication.
 * Multi-colored icon that maintains brand colors.
 * Note: Color prop doesn't affect this icon as it uses brand colors.
 */
export const Google: Story = {
  render: () => <GoogleIcon size={20} />,
};

/**
 * Covers app logo.
 * Brand logo with orange accent color (#FF5722).
 * Default size is 40px.
 */
export const Logo: Story = {
  render: () => <CoversLogo size={40} />,
};

/**
 * Large logo variant for splash screens or headers.
 */
export const LogoLarge: Story = {
  render: () => <CoversLogo size={64} />,
};

/**
 * All icons displayed together for reference.
 */
export const AllIcons: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
        <EyeIcon size={24} />
        <EyeOffIcon size={24} />
      </View>
      <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
        <AppleIcon size={20} />
        <GoogleIcon size={20} />
      </View>
      <View>
        <CoversLogo size={40} />
      </View>
    </View>
  ),
};
