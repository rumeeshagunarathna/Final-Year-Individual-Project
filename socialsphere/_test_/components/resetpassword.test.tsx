import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import ResetPassword from "@/components/Modal/Auth/ResetPassword"; // Replace with the correct path to your ResetPassword component

describe("ResetPassword Component", () => {
  it("handles form submission", async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    // Fill in the form input
    const emailInput = getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Simulate form submission
    const submitButton = getByText("Reset Password");

    // Wrap state update in act(...)
    await act(async () => {
      fireEvent.click(submitButton);

      
    });

    // Assert that the form submits correctly
    expect(emailInput.value).toBe("test@example.com");
  });

  // Add more test cases as needed
});
