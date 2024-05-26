module.exports = {
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/jest/setup.ts',
    '<rootDir>/jest.setup.ts',
    '<rootDir>/__mocks__/@react-native-async-storage/async-storage.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    '/node_modules/(?!.*\\.js$)',
    '/node_modules/(?!.*\\.js$|\\.jsx$|\\.ts$|\\.tsx$)',
    '/node_modules/(?!(jest-)?@react-native|react-native|@react-navigation)',
    '/node_modules/(?!(.*\\.(jsx?|tsx?|json)$))',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|txt|md)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
};
