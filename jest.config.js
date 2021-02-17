module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@hookform/resolvers|react-native-iphone-x-helper|react-native-config|react-native-safe-area-context|react-native-safe-area-view|react-native-vector-icons|@react-native-community/netinfo|react-native-modal|react-native-dialog|react-native-animatable)/)',
  ],
  collectCoverageFrom: [
    'src/screens/**/index.tsx',
    'src/services/**/*.ts',
    'src/components/*.tsx',
    '!src/components/**/index.ts',
    'src/hooks/*.tsx',
    '!src/hooks/index.tsx',
  ],
};
