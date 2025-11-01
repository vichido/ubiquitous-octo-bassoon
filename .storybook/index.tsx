import { View as StorybookView } from '@storybook/react-native';

// Import preview configuration
import './preview';

// Stories will be auto-imported via Metro's require.context when configured
const view = new StorybookView();

export default view.getStorybookUI();
