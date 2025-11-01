import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

export function EyeIcon({ size = 24, color = '#9CA3AF' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5C7.5 5 3.73 7.61 2 11.5C3.73 15.39 7.5 18 12 18C16.5 18 20.27 15.39 22 11.5C20.27 7.61 16.5 5 12 5ZM12 16C9.24 16 7 13.76 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 13.76 14.76 16 12 16ZM12 8C10.34 8 9 9.34 9 11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11C15 9.34 13.66 8 12 8Z"
        fill={color}
      />
    </Svg>
  );
}

export function EyeOffIcon({ size = 24, color = '#9CA3AF' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 12 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
        fill={color}
      />
    </Svg>
  );
}

export function AppleIcon({ size = 20, color = '#FFFFFF' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.3 10.4C15.3 7.8 17.3 6.5 17.4 6.5C16.2 4.8 14.3 4.6 13.7 4.6C12.2 4.4 10.8 5.5 10 5.5C9.2 5.5 8.1 4.6 6.9 4.6C5.3 4.6 3.8 5.6 2.9 7.1C1.2 10.2 2.5 14.7 4.1 17.1C4.9 18.3 5.8 19.6 7 19.6C8.2 19.6 8.6 18.9 10.1 18.9C11.5 18.9 12 19.6 13.2 19.6C14.4 19.6 15.2 18.4 16 17.2C16.9 15.8 17.3 14.5 17.3 14.4C17.3 14.4 15.3 13.6 15.3 10.4ZM13.3 3C14 2.2 14.4 1.1 14.3 0C13.3 0 12.1 0.7 11.4 1.5C10.8 2.2 10.3 3.3 10.4 4.4C11.5 4.5 12.6 3.8 13.3 3Z"
        fill={color}
      />
    </Svg>
  );
}

export function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M19.6 10.2C19.6 9.5 19.5 8.8 19.4 8.2H10V12H15.3C15.1 13.1 14.4 14 13.4 14.6V17H16.6C18.4 15.4 19.6 13 19.6 10.2Z"
        fill="#4285F4"
      />
      <Path
        d="M10 19.8C12.4 19.8 14.4 19 16.6 17L13.4 14.6C12.6 15.1 11.4 15.4 10 15.4C7.7 15.4 5.7 13.8 5 11.6H1.7V14.1C3.9 18.4 6.7 19.8 10 19.8Z"
        fill="#34A853"
      />
      <Path
        d="M5 11.6C4.6 10.5 4.6 9.3 5 8.2V5.7H1.7C0.6 7.9 0.6 10.9 1.7 13.1L5 11.6Z"
        fill="#FBBC04"
      />
      <Path
        d="M10 4.4C11.5 4.4 12.9 4.9 14 6L16.8 3.2C14.4 1 12.4 0 10 0C6.7 0 3.9 1.4 1.7 5.7L5 8.2C5.7 6 7.7 4.4 10 4.4Z"
        fill="#EA4335"
      />
    </Svg>
  );
}

export function CoversLogo({ size = 40 }: { size?: number }) {
  return (
    <View style={styles.logoContainer}>
      <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <Path
          d="M20 2C10.1 2 2 10.1 2 20C2 29.9 10.1 38 20 38C29.9 38 38 29.9 38 20C38 10.1 29.9 2 20 2ZM20 34C12.3 34 6 27.7 6 20C6 12.3 12.3 6 20 6C27.7 6 34 12.3 34 20C34 27.7 27.7 34 20 34Z"
          fill="#FF5722"
        />
        <Path
          d="M26 12H28C28 14.8 26.6 17.3 24.5 19C22.4 20.7 19.8 21.5 17 21.5V19.5C19.3 19.5 21.4 18.8 23.2 17.4C24.8 16.1 25.8 14.2 26 12Z"
          fill="#FF5722"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
