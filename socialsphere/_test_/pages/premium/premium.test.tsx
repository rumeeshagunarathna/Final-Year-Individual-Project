import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import Premium from "@/pages/premium"; // Assuming your component is exported as default

describe("Premium component", () => {
  test("renders heading correctly", () => {
    render(<Premium />);
    expect(screen.getByText(/Freelance Design Projects/i)).toBeInTheDocument();
  });

  test("renders card with correct heading", () => {
    render(<Premium />);
    expect(screen.getByText(/Heading/i)).toBeInTheDocument();
  });

  test("renders card with correct description", () => {
    render(<Premium />);
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet catetur/i)
    ).toBeInTheDocument();
  });

  // Add more tests as needed for other components and functionality
});
