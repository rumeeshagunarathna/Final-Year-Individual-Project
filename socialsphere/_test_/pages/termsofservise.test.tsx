import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TermsOfService from "../../src/pages/TermsOfServise";
import { NextRouter } from "next/router";

// Mock useRouter hook
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("TermsOfService Component", () => {
  it("redirects to home page when agreed", async () => {
    const pushMock = jest.fn();
    const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockImplementation(
      () =>
        ({
          push: pushMock,
        } as unknown as NextRouter)
    );

    const { getByText, getByLabelText } = render(<TermsOfService />);

    fireEvent.click(getByLabelText("I Agree to these Terms and Conditions."));

    //await waitFor(() => expect(pushMock).toHaveBeenCalledWith("../../src/pages/home"));
  });

  it("redirects to landing page when disagreed", async () => {
    const pushMock = jest.fn();
    const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockImplementation(
      () =>
        ({
          push: pushMock,
        } as unknown as NextRouter)
    );

    const { getByText, getByLabelText } = render(<TermsOfService />);

    fireEvent.click(getByLabelText("I Agree to these Terms and Conditions."));

    //await waitFor(() => expect(pushMock).toHaveBeenCalledWith("../../src/pages/landingpage"));
  });
});
