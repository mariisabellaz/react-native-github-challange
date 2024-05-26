jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));
