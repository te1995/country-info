/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },

  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-node",

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  // Automatically restore mock state and implementation before every test
  restoreMocks: false,

  // Activates notifications for test results
  notify: false,

  // The number of seconds after which a test is considered as slow and reported as such in the results
  slowTestThreshold: 5,

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: [],

  // Other options you may add later can go here
};
