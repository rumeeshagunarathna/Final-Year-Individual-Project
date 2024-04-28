// __mocks__/firebase/auth.js

export const getAuth = jest.fn(() => ({
  // Mock the methods you're using in your components
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  //onAuthStateChanged: jest.fn(), // Add this line to mock onAuthStateChanged
  // Add more mock methods as needed
}));
