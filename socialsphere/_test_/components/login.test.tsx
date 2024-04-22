import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../../src/components/Modal/Auth/Login";

describe("Login Component", () => {
  it("handles form submission", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    // Fill in the form inputs
    const emailInput = getByPlaceholderText("Email") as HTMLInputElement;
    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Simulate form submission
    const submitButton = getByText("Log In");
    fireEvent.click(submitButton);

    // Assert that the form submits correctly
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  // Add more test cases as needed
});
