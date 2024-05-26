import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// Mock de react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({children}: {children: React.ReactNode}) => children,
}));

// Mock de styled-components/native

// Mock de react-native
jest.mock('react-native', () => ({
  StatusBar: ({children}: {children: React.ReactNode}) => children,
}));

// Mock de @react-navigation/native
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({children}: {children: React.ReactNode}) => (
    <>{children}</>
  ),
}));

// Mock de @react-navigation/native-stack
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockReturnValue({
    Navigator: ({children}: {children: React.ReactNode}) => <>{children}</>,
    Screen: () => null,
  }),
}));

describe('App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
