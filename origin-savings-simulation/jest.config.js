// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': '<rootDir>/styleMock.js',
      '\\.(jpg|jpeg|png|svg)$': '<rootDir>/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  