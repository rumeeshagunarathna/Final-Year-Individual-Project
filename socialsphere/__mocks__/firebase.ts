// __mocks__/firebase.ts

export const getAuth = jest.fn(() => ({
  // Mock any authentication methods you're using
  // For example:
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
}));
