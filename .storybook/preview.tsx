import type { Preview } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';

export const decorators = [
  (Story: any) => (
    <View style={styles.container}>
      <Story />
    </View>
  ),
];

export const parameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
    padding: 20,
  },
});
