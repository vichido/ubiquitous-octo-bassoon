import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import { AppleIcon, GoogleIcon } from './Icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'social'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    title: 'Button',
    variant: 'primary',
    disabled: false,
    loading: false,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The primary button variant is used for main CTAs.
 * Features a bold orange background (#FF5722) with white text.
 */
export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
  },
};

/**
 * The outline button variant has a transparent background with a white border.
 * Used for secondary actions or alternatives to the primary CTA.
 */
export const Outline: Story = {
  args: {
    title: 'Outline Button',
    variant: 'outline',
  },
};

/**
 * The social button variant is designed for social login buttons.
 * Features a transparent background with a gray border.
 */
export const Social: Story = {
  args: {
    title: 'Continue with Apple',
    variant: 'social',
    leftIcon: <AppleIcon size={20} />,
  },
};

/**
 * Social login button with Google icon.
 */
export const SocialGoogle: Story = {
  args: {
    title: 'Continue with Google',
    variant: 'social',
    leftIcon: <GoogleIcon size={20} />,
  },
};

/**
 * Disabled state - button cannot be interacted with.
 */
export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

/**
 * Loading state - shows a spinner and disables interaction.
 */
export const Loading: Story = {
  args: {
    title: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

/**
 * Loading state with outline variant.
 */
export const LoadingOutline: Story = {
  args: {
    title: 'Loading',
    variant: 'outline',
    loading: true,
  },
};
