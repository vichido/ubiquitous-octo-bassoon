# Storybook for React Native

This project uses Storybook to document and showcase components in isolation.

## What is Storybook?

Storybook provides an interactive development environment for UI components. You can:
- View components in different states
- Test component variants and props
- Document component APIs
- Develop components in isolation

## How to View Storybook

1. **Enable Storybook mode** by editing `App.tsx`:
   ```tsx
   // Uncomment these lines:
   import StorybookUIRoot from './.storybook/Storybook';
   export default StorybookUIRoot;

   // Comment out the default export:
   // export default function App() {
   //   return <LoginScreen />;
   // }
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open on your device/simulator**:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

4. You'll see the Storybook UI where you can browse and interact with components

## Available Components

### Button
- **Primary**: Main CTA button with orange background
- **Outline**: Secondary button with white border
- **Social**: Social login buttons (Apple, Google)
- **States**: Loading, Disabled

### Input
- **Default**: Standard text input with label
- **Password**: Secure input with visibility toggle
- **Error**: Input with validation message
- **Multiline**: Text area for longer content

### Icons
- **EyeIcon / EyeOffIcon**: Password visibility toggles
- **AppleIcon / GoogleIcon**: Social login icons
- **CoversLogo**: App branding logo

## Creating New Stories

To document a new component:

1. Create a file named `ComponentName.stories.tsx` next to your component:
   ```tsx
   import type { Meta, StoryObj } from '@storybook/react-native';
   import { ComponentName } from './ComponentName';

   const meta = {
     title: 'Components/ComponentName',
     component: ComponentName,
   } satisfies Meta<typeof ComponentName>;

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       // component props
     },
   };
   ```

2. Add the story to `.storybook/storybook.requires.ts`:
   ```typescript
   // In the configure block:
   require('../src/path/to/ComponentName.stories.tsx');

   // In getStories:
   './src/path/to/ComponentName.stories.tsx': require('../src/path/to/ComponentName.stories.tsx'),
   ```

## Component Documentation Guidelines

When writing stories:
- Use descriptive story names that explain the use case
- Add JSDoc comments above each story to provide context
- Include all important variants and states
- Demonstrate interactive features (e.g., password toggle)
- Show error states and edge cases

## Addons Installed

- **@storybook/addon-ondevice-controls**: Interactive prop controls
- **@storybook/addon-ondevice-actions**: Log and view component events

## Switching Back to App Mode

To return to the normal app:

1. Edit `App.tsx` and comment out the Storybook lines
2. Uncomment the default App export
3. Reload the app (shake device and press "Reload")

## Resources

- [Storybook React Native Docs](https://github.com/storybookjs/react-native)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Component Story Format](https://storybook.js.org/docs/react/api/csf)
