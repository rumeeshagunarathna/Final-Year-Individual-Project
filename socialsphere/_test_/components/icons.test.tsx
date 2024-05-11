// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Icons from "../../src/components/Navbar/RightContent/Icons";
// import { NextRouter } from "next/router";

// // Mock the next/router module for client side
// jest.mock("next/router", () => ({
//   __esModule: true,
//   useRouter: jest.fn(() => ({
//     push: jest.fn(),
//   })),
// }));

// describe("Icons component", () => {
//   it("navigates to chat page when chat dots icon is clicked", () => {
//     const { getByTestId } = render(<Icons />);

//     // Find the chat dots icon by test id and click it
//     const chatDotsIcon = getByTestId("chat-dots-icon");
//     fireEvent.click(chatDotsIcon);

//     // Assert that the router push function was called
//     expect(require("next/router").useRouter().push).toHaveBeenCalledWith(
//       "/indexchat"
//     );
//   });

  
// });


import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Icons from "../../src/components/Navbar/RightContent/Icons";
import { NextRouter } from "next/router";

// Mock useRouter hook
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Icons Component", () => {
  it("redirects to chat page when agreed", async () => {
    const pushMock = jest.fn();
    const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockImplementation(
      () =>
        ({
          push: pushMock,
        } as unknown as NextRouter)
    );

    const { getByText, getByTestId } = render(<Icons />);

    fireEvent.click(getByTestId("chat-dots-icon"));

    //await waitFor(() => expect(pushMock).toHaveBeenCalledWith("../../src/pages/home"));
  });

  
});
