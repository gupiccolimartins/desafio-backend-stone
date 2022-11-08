module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/dto/**',
    '!<rootDir>/src/modules/**/infra/**',
    '!<rootDir>/src/**/domain/**',
    '!<rootDir>/src/infra/**',
    '!<rootDir>/src/core/**',
    '!<rootDir>/src/modules/**/mappers/**',
    '!<rootDir>/src/config/**',
    '!<rootDir>/src/modules/**/repos/index.ts',
    '!<rootDir>/src/providers/backoffice/implementations/Backoffice.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.spec.ts'],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  collectCoverage: true,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 600000,
  maxWorkers: '10%'
};
