import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Report from "../../../src/pages/report";

describe("Report Component", () => {
  it("submits the report form with valid data", async () => {
    const { getByPlaceholderText, getByText } = render(<Report />);

    // Fill in the form inputs
    fireEvent.change(getByPlaceholderText("Your thoughts.."), {
      target: { value: "Test Report Content" },
    });

    fireEvent.change(
      getByPlaceholderText("Select the reason for this report"),
      {
        target: { value: "Harassment" },
      }
    );

    fireEvent.change(getByPlaceholderText("Your thoughts.."), {
      target: { value: "Test User Name" },
    });

    // Submit the form
    fireEvent.click(getByText("Submit"));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Assert that the form submission succeeded
      expect(getByText("User data added successfully")).toBeInTheDocument();
    });
  });
});
