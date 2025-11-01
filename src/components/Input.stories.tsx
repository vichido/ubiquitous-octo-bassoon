import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import Input from './Input';
import { EyeIcon, EyeOffIcon } from './Icons';

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    secureTextEntry: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic text input with label.
 */
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

/**
 * Input in focused state (simulated).
 * Shows the orange border when the input is active.
 */
export const Focused: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: 'user@example.com',
  },
};

/**
 * Input with error message.
 * Displays validation feedback in red below the input.
 */
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

/**
 * Password input with toggle visibility icon.
 * Demonstrates the secureTextEntry prop with a right icon.
 */
export const Password: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    return (
      <Input
        {...args}
        label="Password"
        placeholder="Enter your password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        rightIcon={
          showPassword ? <EyeOffIcon size={24} /> : <EyeIcon size={24} />
        }
        onRightIconPress={() => setShowPassword(!showPassword)}
      />
    );
  },
};

/**
 * Password input with error state.
 */
export const PasswordWithError: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        {...args}
        label="Password"
        placeholder="Enter your password"
        secureTextEntry={!showPassword}
        value="123"
        error="Password must be at least 8 characters"
        rightIcon={
          showPassword ? <EyeOffIcon size={24} /> : <EyeIcon size={24} />
        }
        onRightIconPress={() => setShowPassword(!showPassword)}
      />
    );
  },
};

/**
 * Multiline text input example.
 * Can be used for longer text entries like comments or descriptions.
 */
export const Multiline: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    multiline: true,
    numberOfLines: 4,
  },
};
