const nextJest = require("next/jest");

// Create Jest configuration using nextJest
const createJestConfig = nextJest({
  // Provide the path to your Next.js app directory
  dir: "./",
});

// Jest configuration options
const customJestConfig = {
  // Add any custom Jest configuration options here

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// Export Jest configuration by combining with createJestConfig
module.exports = createJestConfig(customJestConfig);
