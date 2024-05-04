// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import { useRouter } from "next/router";
// import CreatePostLink from "../../src/components/Community/CreatePostLink";

// // Mock the useRouter hook
// jest.mock("next/router");

// describe("CreatePostLink Component", () => {
//   test("renders the component correctly", async () => {
//     // Mock the useRouter implementation
//     useRouter.mockImplementation(() => ({
//       query: { communityId: "mockCommunityId" },
//       push: jest.fn(), // Mock the push function
//     }));

//     const { getByPlaceholderText } = render(<CreatePostLink />);

//     // Find the input field for creating a post
//     const postInput = getByPlaceholderText("Create your post");

//     // Simulate a click event on the post input field
//     fireEvent.click(postInput);

//     // Check if the post input field is focused after the click
//     await waitFor(() => {
//       expect(postInput).toHaveFocus();
//     });

//     // Find the input field for creating a community
//     const communityInput = getByPlaceholderText("Create a community");

//     // Simulate a click event on the community input field
//     fireEvent.click(communityInput);

//     // Check if the community input field is focused after the click
//     await waitFor(() => {
//       expect(communityInput).toHaveFocus();
//     });

//     // You can add more test cases here for other functionalities if needed
//   });
// });


// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import CreatePostLink from "../../src/components/Community/CreatePostLink";
// import { RecoilRoot } from "recoil";

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock("react-firebase-hooks/auth", () => ({
//   useAuthState: jest.fn(),
// }));

// jest.mock("recoil", () => ({
//   ...jest.requireActual("recoil"),
//   useRecoilValue: jest.fn(),
//   useSetRecoilState: jest.fn(),
// }));

// describe("CreatePostLink Component", () => {
//   test("renders the component correctly", async () => {
//     const { getByPlaceholderText } = render(
//       <RecoilRoot>
//         <CreatePostLink />
//       </RecoilRoot>
//     );

//     // Find the input field for creating a post
//     const postInput = getByPlaceholderText("Create your post");

//     // Simulate a click event on the post input field
//     fireEvent.click(postInput);

//     // Check if the post input field is focused after the click
//     await waitFor(() => {
//       expect(postInput).toHaveFocus();
//     });

//     // Find the input field for creating a community
//     const communityInput = getByPlaceholderText("Create a community");

//     // Simulate a click event on the community input field
//     fireEvent.click(communityInput);

//     // Check if the community input field is focused after the click
//     await waitFor(() => {
//       expect(communityInput).toHaveFocus();
//     });

//     // You can add more test cases here for other functionalities if needed
//   });
// });


//////////////////////

// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import CreatePostLink from "../../src/components/Community/CreatePostLink";
// import { RecoilRoot } from "recoil";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";

// // Mock next/router
// jest.mock("next/router", () => ({
//   useRouter: jest.fn().mockReturnValue({
//     query: {},
//     push: jest.fn(),
//   }),
// }));

// // Mock react-firebase-hooks/auth
// const mockUseAuthState = jest.fn();
// jest.mock("react-firebase-hooks/auth", () => ({
//   useAuthState: mockUseAuthState,
// }));

// // Mock recoil
// jest.mock("recoil", () => ({
//   ...jest.requireActual("recoil"),
//   useRecoilValue: jest.fn(),
//   useSetRecoilState: jest.fn(),
// }));

// describe("CreatePostLink Component", () => {
//   test("renders the component correctly", async () => {
//     // Mock the user object
//     const mockUser = { uid: "mockUid", email: "mock@example.com" };

//     // Mock the useAuthState hook to return a mock user array
//     mockUseAuthState.mockReturnValue([mockUser]);

//     const { getByPlaceholderText } = render(
//       <RecoilRoot>
//         <CreatePostLink />
//       </RecoilRoot>
//     );

//     // Find the input field for creating a post
//     const postInput = getByPlaceholderText("Create your post");

//     // Simulate a click event on the post input field
//     fireEvent.click(postInput);

//     // Check if the post input field is focused after the click
//     await waitFor(() => {
//       expect(postInput).toHaveFocus();
//     });

//     // Find the input field for creating a community
//     const communityInput = getByPlaceholderText("Create a community");

//     // Simulate a click event on the community input field
//     fireEvent.click(communityInput);

//     // Check if the community input field is focused after the click
//     await waitFor(() => {
//       expect(communityInput).toHaveFocus();
//     });

//     // You can add more test cases here for other functionalities if needed
//   });
// });




import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CreatePostLink from "../../src/components/Community/CreatePostLink";
import { RecoilRoot } from "recoil";

// Define mockUseAuthState before the jest.mock call
const mockUseAuthState = jest.fn();


// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    push: jest.fn(),
  }),
}));


// Mock react-firebase-hooks/auth
jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: mockUseAuthState,
}));

// Mock recoil
jest.mock("recoil", () => ({
  ...jest.requireActual("recoil"),
  useRecoilValue: jest.fn(),
  useSetRecoilState: jest.fn(),
}));

describe("CreatePostLink Component", () => {
  test("renders the component correctly", async () => {
    // Mock the user object
    const mockUser = { uid: "mockUid", email: "mock@example.com" };

    // Mock the useAuthState hook to return a mock user array
    mockUseAuthState.mockReturnValue([mockUser]);

    const { getByPlaceholderText } = render(
      <RecoilRoot>
        <CreatePostLink />
      </RecoilRoot>
    );

    // Find the input field for creating a post
    const postInput = getByPlaceholderText("Create your post");

    // Simulate a click event on the post input field
    fireEvent.click(postInput);

    // Check if the post input field is focused after the click
    await waitFor(() => {
      expect(postInput).toHaveFocus();
    });

    // Find the input field for creating a community
    const communityInput = getByPlaceholderText("Create a community");

    // Simulate a click event on the community input field
    fireEvent.click(communityInput);

    // Check if the community input field is focused after the click
    await waitFor(() => {
      expect(communityInput).toHaveFocus();
    });

    // You can add more test cases here for other functionalities if needed
  });
});
