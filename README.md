This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

## Project Structure
📂__tests__: All tests here (components, presentation, reducers etc)
📂__mocks__: All mock tests here
📂android: All configuration and code android native
📂ios: All configuration and code ios native
📦src
┣ 📂assets: All assets here (jpg, png, svg etc)
┣ 📂core: Components that are used in multiple places of the application
┣ 📂helpers: Application helpers like sanitize, format strings and params, array methods etc.
┃ ┣ 📂hooks: All custom hooks created to shared logic to application
┃ ┣ 📂constants: Constants all texts and dictionaries that cannot be put into locales folder
┃ ┣ Functions: Functions, mocks, schemas and masks
┣ 📂routes: Routes Privates and Publics configurations
┣ 📂screens: Containers components (responsible for handling business rules for presentations)
┣ 📂services: Axios API services
┣ 📂store: Redux store configurations
┃ ┣ 📂sagas: All redux-sagas
┃ ┣ 📂slices: All redux-slices
┣ 📂theme: themes that are used in multiple places of the application.

## Libraries

- @hookform/resolvers: "3.4.2",
- @react-native-async-storage/async-storage: "1.23.1",
- @react-navigation/bottom-tabs: "6.5.20",
- @react-navigation/native: "6.1.17",
- @react-navigation/native-stack: "6.9.26",
- axios: "1.7.2",
- date-fns: "3.6.0",
- lodash: "4.17.21",
- lottie-ios: "4.4.1",
- lottie-react-native: "6.7.2",
- react: "18.2.0",
- react-content-loader: "7.0.0",
- react-hook-form: "7.51.5",
- react-native: "0.74.1",
- react-native-gesture-handler: "2.16.2",
- react-native-modalize: "2.1.1",
- react-native-reanimated: "3.11.0",
- react-native-safe-area-context: "4.10.1",
- react-native-screens: "3.31.1",
- react-native-size-matters: "0.4.2",
- react-native-status-bar-height: "2.6.0",
- react-native-svg: "15.3.0",
- react-native-uuid: "2.0.2",
- styled-components: "6.1.11",
- uuid: "9.0.1",
- yup: "1.4.0"

## Stack
- React Native
- Typescript