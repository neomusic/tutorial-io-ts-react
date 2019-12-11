module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/test/globalSetup.ts',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.tsx?$',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testMatch: null
};
