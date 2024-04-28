import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Landingpage from "@/pages/landingpage";

describe("Landing page", () => {
  it("Should render properly", () => {
    render(<Landingpage />);

    const headingText = screen.getByText("Welcome to");
    expect(headingText).toBeInTheDocument();

    const nestedText = screen.getByText("SocialSphere");
    expect(nestedText).toBeInTheDocument();
    expect(nestedText).toHaveStyle({ color: "orange.400" });

    const Text1 = screen.getByText(
      "Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
    );
    expect(Text1).toBeInTheDocument();

    
    // Assertion for Link
    const link = screen.getByRole("link", { name: "Get started" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");

    // Assertion for Button
    const button = screen.getByRole("button", { name: "Get started" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Get started");
    
  });
});
