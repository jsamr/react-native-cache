module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>'],
  modulePathIgnorePatterns: ['npm-cache', '.npm', 'examples', 'lib'],
  transformIgnorePatterns: ['node_modules/?!(ramda)'],
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'clover'],
}
