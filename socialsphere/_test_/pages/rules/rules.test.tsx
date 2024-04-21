

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Rules from "@/pages/rules"; // Assuming your component file is in the components directory

describe("Rules Component", () => {
  it("renders the rules page", () => {
    render(<Rules />);

    // Check if the component renders correctly
    expect(screen.getByText("Rules page")).toBeInTheDocument();
  });
});

