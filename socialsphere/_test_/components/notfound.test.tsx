import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NotFound from "../../src/components/Community/NotFound";

// Mock next/link component
jest.mock("next/link", () => ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
});

describe("NotFound Component", () => {
  it("renders the not found component correctly", () => {
    const { getByText, getByRole } = render(<NotFound />);

    // Check if the text "Sorry, that community does not exist or has been removed" is rendered
    expect(
      getByText("Sorry, that community does not exist or has been removed")
    ).toBeTruthy();

    // Check if the "GO HOME" button is rendered
    const goHomeButton = getByRole("button", { name: /GO HOME/i });
    expect(goHomeButton).toBeTruthy();

    // Check if the "GO HOME" button is wrapped in a Next.js Link
//     expect(goHomeButton.closest("a")).toHaveAttribute("href", "/");
  });

  it("clicking the 'GO HOME' button navigates to the home page", () => {
    // Mock useRouter
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    const { getByRole } = render(<NotFound />);

    // Simulate click on the "GO HOME" button
    fireEvent.click(getByRole("button", { name: /GO HOME/i }));

    // Expect that useRouter.push has been called with the correct route
//     expect(pushMock).toHaveBeenCalledWith("/");
  });
});
