import 'react-native-gesture-handler/jestSetup';
import 'react-native-screens/native-stack';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('lottie-react-native');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-navigation/elements', () => {
  const actual = jest.requireActual('@react-navigation/elements');

  return {...actual, useHeaderHeight: jest.fn()};
});

jest.mock('reactotron-react-native', () => {
  return {
    configure: () => ({
      useReactNative: () => ({
        connect: () => jest.fn(),
      }),
    }),
    use: () => jest.fn(),
    connect: () => jest.fn(),
  };
});
