// __mocks__/mockNextRouter.ts

// Mocked useRouter implementation for testing
export const useRouter = jest.fn().mockImplementation(() => ({
  query: {},
  push: jest.fn(),
}));
