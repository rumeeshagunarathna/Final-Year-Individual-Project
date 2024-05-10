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
      "SocialSphere is home to communities, endless conversation, and authentic human connection. Whether you're into breaking news, sports, TV fan theories, or a never-ending stream of the internet's cutest animals, there's a community for you."
    );
    
    expect(Text1).toBeInTheDocument();

    
    // Assertion for Link
    const link = screen.getByRole("link", { name: "Get started" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/TermsOfServise");

    // Assertion for Button
    const button = screen.getByRole("button", { name: "Get started" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Get started");
    
  });
});
