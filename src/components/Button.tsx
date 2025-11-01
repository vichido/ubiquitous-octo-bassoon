import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  ActivityIndicator,
  Platform,
} from 'react-native';

type ButtonVariant = 'primary' | 'outline' | 'social';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  leftIcon,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'outline' && styles.outlineButton,
    variant === 'social' && styles.socialButton,
    (disabled || loading) && styles.disabledButton,
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'outline' && styles.outlineText,
    variant === 'social' && styles.socialText,
    (disabled || loading) && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress || (() => {})}
      disabled={disabled || loading}
      activeOpacity={0.7}
      // iOS-specific optimization for haptic feedback feel
      {...Platform.select({
        ios: {
          activeOpacity: 0.8,
        },
      })}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? '#FFFFFF' : '#FF5722'}
          size="small"
        />
      ) : (
        <>
          {leftIcon && leftIcon}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    backgroundColor: '#FF5722',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  socialButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontWeight: 'bold',
      },
    }),
  },
  primaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#FFFFFF',
  },
  socialText: {
    color: '#FFFFFF',
  },
  disabledText: {
    opacity: 1,
  },
});
