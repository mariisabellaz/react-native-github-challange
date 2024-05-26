<p align="center">
  https://github.com/mariisabellaz/react-native-github-challange/assets/67912287/0de9c974-f841-4b01-b4fc-75427a811007
</p>


## 👻 About Project

The `GitHub` is a social network for programmers that features an interesting functionality allowing users to like other people's repositories. It consists of a button labeled Star found on each repository's page. Rick is an active user of `GitHub`, constantly seeking out new projects and liking those that catch his interest. He would like to be able to add a label or tag to mark a repository so that he can filter it. For example, he found a repository named `react` and would like to add the tags `javascript` and `frontend`. Since GitHub doesn't provide this functionality, Rick needs a system that can assist him with this task in a simple manner.


The challenge consists of developing a mobile application that retrieves all the repositories that a specific user has `liked`. Once the repositories are obtained, the application creates a filter of the user's repositories by tags. The system should also have a tag suggestion mechanism based on the languages of the repositories.

## 🛠 Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### _Step 1: Start the Metro Server_

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npx
npx react-native start --reset-cache

```

### _Step 2: Start your Application_

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### 🤖 _For Android_

```bash
# install node_modules and run

npm install --legacy-peer-deps && npm run android

```

#### 🍏 _For iOS_

```bash
# install node_modules
npm install --legacy-peer-deps

# pod
yarn ios
```

## 💻 Project Structure

```bash
├── __mocks__
├── __tests__ 
├── src
│   ├── @types 
│   ├── assets
│   │   ├── animation
│   │   ├── fonts
│   │   ├── fonts
│   │   └── svg
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   └── organisms
│   ├── contexts
│   │   ├── models
│   │   └── context.tsx
│   ├── hooks
│   ├── routes
│   ├── screens
│   │   ├── AddUser
│   │   ├── Intro
│   │   ├── Login
│   │   ├── Owners
│   │   ├── Repositories
│   │   └── Splash
│   ├── services
│   ├── theme
│   │   ├── colors.ts
│   │   ├── radius.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   └── utils
│       ├── config
│       └── tagUtils.tsx
└── 

📁 __mocks__: Test configurations for the libraries used.
📁 __tests__: All tests (components, screens, context).
📁 src: Contains all the applications source code.
📁 @types: Global typing for the application.
📁 assets: Static files, such as fonts and images, SVG, and animations.
📁 components: Reusable components following the atomic design theme.
📁 contexts: Context providers for managing global state.
📁 hooks: Custom hooks for reusable logic.
📁 routes: Navigation settings and logic.
📁 screens: Screen components.
📁 theme: Styling and theme standardization files.
📁 services: Services for communication with APIs or other external functionalities.
📁 utils: Utility functions and helpers.

```

## 📚 Libraries

- [`@hookform/resolvers`](https://www.npmjs.com/package/@hookform/resolvers)
- [`@react-native-async-storage/async-storage`](https://reactnative.dev/docs/asyncstorage)
- [`@react-navigation/native`](https://reactnavigation.org/docs/getting-started)
- [`axios`](https://axios-http.com/ptbr/docs/intro)
- [`date-fns`](https://date-fns.org/)
- [`lodash`](https://www.npmjs.com/package/lodash)
- [`lottie-react-native`](https://github.com/lottie-react-native/lottie-react-native)
- [`react-content-loader`](https://www.npmjs.com/package/react-content-loader)
- [`react-hook-form`](https://react-hook-form.com/)
- [`react-native`](https://reactnative.dev/)
- [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler)
- [`react-native-modalize`](https://github.com/jeremybarbet/react-native-modalize)
- [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/)
- [`react-native-safe-area-context`](https://www.npmjs.com/package/react-native-safe-area-context)
- [`react-native-screens`](https://github.com/software-mansion/react-native-screens)
- [`react-native-size-matters`](https://github.com/nirsky/react-native-size-matters)
- [`react-native-status-bar-height`](https://www.npmjs.com/package/react-native-status-bar-height)
- [`react-native-svg`](https://github.com/software-mansion/react-native-svg)
- [`react-native-uuid`](https://www.npmjs.com/package/react-native-uuid)
- [`styled-components`](https://styled-components.com/)
- [`yup`](https://github.com/jquense/yup)

## 🚧 Stack

- React Native
- Typescript

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
