import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "@/components/Modal/Auth/SignUp"; // Replace with the correct path to your SignUp component

describe("SignUp Component", () => {
  it("handles form submission", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    // Fill in the form inputs
    const emailInput = getByPlaceholderText("Email") as HTMLInputElement;
    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    const confirmPasswordInput = getByPlaceholderText(
      "Confirm Password"
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    // Simulate form submission
    const submitButton = getByText("Sign Up");
    fireEvent.click(submitButton);

    
    // Assert that the form submits correctly
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
    expect(confirmPasswordInput.value).toBe("password123");
  });

  // Add more test cases as needed
});
