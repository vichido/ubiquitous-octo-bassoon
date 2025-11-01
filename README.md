# React Native + Expo + TypeScript Project

A basic React Native application built with Expo and TypeScript.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Scan the QR code with Expo Go (Android) or Camera app (iOS)

## Project Structure

```
.
├── src/
│   ├── components/     # Reusable components (TSX)
│   ├── screens/        # Screen components (TSX)
│   ├── navigation/     # Navigation configuration
│   └── utils/          # Utility functions and constants (TS)
├── assets/             # Images, fonts, and other assets
├── App.tsx             # Main application component
├── app.json            # Expo configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
└── babel.config.js     # Babel configuration
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Open on Android device/emulator
- `npm run ios` - Open on iOS simulator
- `npm run web` - Open in web browser

## TypeScript

This project uses TypeScript for type safety. The configuration can be found in `tsconfig.json`.

## Learn More

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
  > > > > > > > 504cb71 (1st)
