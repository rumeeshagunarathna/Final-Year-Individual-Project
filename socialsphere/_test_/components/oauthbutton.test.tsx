import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import OAuthButtons from "@/components/Modal/Auth/OAuthButtons"; // Replace with the correct path to your OAuthButtons component
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

// Mock the useSignInWithGoogle hook
jest.mock("react-firebase-hooks/auth", () => ({
  useSignInWithGoogle: jest.fn(),
}));

describe("OAuthButtons Component", () => {
  it("handles Google sign-in", async () => {
    // Mock the useSignInWithGoogle hook to return a function
    const signInWithGoogleMock = jest.fn();
    (useSignInWithGoogle as jest.Mock).mockReturnValue([
      signInWithGoogleMock,
      null,
      false,
      null,
    ]);

    const { getByText } = render(<OAuthButtons />);

    // Simulate clicking on the Google sign-in button
    const googleButton = getByText("Continue with Google");
    fireEvent.click(googleButton);

    // Assert that the signInWithGoogle function is called
    expect(signInWithGoogleMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
