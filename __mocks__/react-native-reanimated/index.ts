jest.mock('react-native-reanimated', () => ({
  useAnimatedRef: jest.fn(),
  useAnimatedScrollHandler: jest.fn(),
  useSharedValue: jest.fn(),
  Easing: {
    inOut: jest.fn(),
  },
}));
