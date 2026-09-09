# Project Instructions

## Stack and Commands

- This is an Expo SDK 57 React Native app using React 19, React Native 0.86, and strict TypeScript.
- Read the exact versioned Expo docs at https://docs.expo.dev/versions/v57.0.0/ before changing Expo APIs.
- Run package and Expo commands from the `my-app` directory; the repository parent is not the app root.
- Install dependencies with `npm ci` when a lockfile is present.
- Run the app with `npm start`, or use `npm run android`, `npm run ios`, or `npm run web` for a target platform.
- There are no configured test, lint, or production-build scripts. Validate TypeScript changes with `npx tsc --noEmit`.

## Architecture

- `index.ts` registers the Expo root; `App.tsx` owns `NavigationContainer`, typed routes, and the material top-tab navigator.
- `MainScreen.tsx`, `ViewDetails.tsx`, and `ListSkills.tsx` are the active screens.
- `FadeView.tsx` is the reusable opacity animation wrapper. `Styles.tsx` contains shared styles currently used by `MainScreen`.
- `app.json`, `package.json`, and `tsconfig.json` are the authoritative project configuration files.

## Conventions and Pitfalls

- Use functional components, hooks, typed navigation props, and `StyleSheet.create`; keep screen-specific styles near their screen.
- Keep navigation route names and parameter types synchronized in `App.tsx` and consuming screens.
- Asset images use relative `require(...)` calls.
- Edit `ListSkills.tsx` for the active skills screen. `ListSkills.js` is an older, unreferenced duplicate with different behavior and styling.
- Skills are currently in-memory only. Do not imply persistence unless storage is explicitly added.
- `ViewDetails` has fallback route parameters configured in `App.tsx`; preserve that contract and validate route data before reading its fields when changing navigation inputs.
- The `.expo` directory is generated and ignored; do not treat it as source.
