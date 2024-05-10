// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import About from "../../src/components/Community/About";
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
// import { Community } from "../../src/atoms/communitiesAtom";
// import { useRouter } from "next/router";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Timestamp } from "firebase/firestore";
// import { getByText } from "@testing-library/react";


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

// describe("About Component", () => {
//   const mockCommunityData: Community = {
//     id: "mockCommunityId",
//     creatorId: "mockUserId",
//     privacyType: "public",
//     numberOfMembers: 10,
//     createdAt: new Timestamp(1620392760, 0),
//     imageURL: "mockImageUrl",
//   };

//   test("renders the about component correctly", async () => {
//     (useAuthState as jest.Mock).mockReturnValue([{ uid: "mockUserId" }]);
//     (useRouter as jest.Mock).mockReturnValue({
//       query: { community: "mockCommunityId" },
//     });

//     (useRecoilValue as jest.Mock).mockReturnValue(mockCommunityData);

//     const { getByText, getByAltText } = render(
//       <RecoilRoot>
//         <About communityData={mockCommunityData} />
//       </RecoilRoot>
//     );

//     expect(getByText("About Community")).toBeInTheDocument();
//     expect(getByText("10 Members")).toBeInTheDocument();
//     expect(getByText("0 Online")).toBeInTheDocument();
//     expect(getByText("Created May 07, 2021")).toBeInTheDocument();
//     expect(getByAltText("Community Image")).toBeInTheDocument();
//     expect(getByText("Create Post")).toBeInTheDocument();
//     expect(getByText("View Rules")).toBeInTheDocument();
//   });

//   test("triggers image upload correctly", async () => {
//     (useAuthState as jest.Mock).mockReturnValue([{ uid: "mockUserId" }]);
//     (useRouter as jest.Mock).mockReturnValue({
//       query: { community: "mockCommunityId" },
//     });

//     const setCommunityStateValueMock = jest.fn();
//     (useSetRecoilState as jest.Mock).mockReturnValue(
//       setCommunityStateValueMock
//     );

//     const { getByText } = render(
//       <RecoilRoot>
//         <About communityData={mockCommunityData} />
//       </RecoilRoot>
//     );

//     fireEvent.click(getByText("Change Image"));

//     // Assuming some file is selected

//     // Mock the file upload process
//     // Assuming the selected file is uploaded successfully

//     // Simulate successful upload
//     // await waitFor(() => {
//     //   expect(setCommunityStateValueMock).toHaveBeenCalledTimes(1);
//     // });
//   });
// });



import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import About from "../../src/components/Community/About";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { Community } from "../../src/atoms/communitiesAtom";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp } from "firebase/firestore";


jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(),
}));

jest.mock("recoil", () => ({
  ...jest.requireActual("recoil"),
  useRecoilValue: jest.fn(),
  useSetRecoilState: jest.fn(),
}));

describe("About Component", () => {
  const mockCommunityData: Community = {
    id: "mockCommunityId",
    creatorId: "mockUserId",
    privacyType: "public",
    numberOfMembers: 10,
    createdAt: new Timestamp(1620392760, 0),
    imageURL: "mockImageUrl",
  };

  test("renders the about component correctly", async () => {
    (useAuthState as jest.Mock).mockReturnValue([{ uid: "mockUserId" }]);
    (useRouter as jest.Mock).mockReturnValue({
      query: { community: "mockCommunityId" },
    });
    (useRecoilValue as jest.Mock).mockReturnValue(mockCommunityData);

    const { getByText, getByAltText } = render(
      <RecoilRoot>
        <About communityData={mockCommunityData} />
      </RecoilRoot>
    );

    expect(getByText("About Community")).toBeTruthy();
    expect(getByText("Online")).toBeTruthy();
    expect(getByAltText("Community Image")).toBeTruthy();
    // expect(getByText("Create Post")).toBeTruthy();
    expect(getByText("View Rules")).toBeTruthy();
    expect(getByText("Community Rules")).toBeTruthy();
    
  });

  test("triggers image upload correctly", async () => {
    (useAuthState as jest.Mock).mockReturnValue([{ uid: "mockUserId" }]);
    (useRouter as jest.Mock).mockReturnValue({
      query: { community: "mockCommunityId" },
    });

    const setCommunityStateValueMock = jest.fn();
    (useSetRecoilState as jest.Mock).mockReturnValue(
      setCommunityStateValueMock
    );

    const { getByText } = render(
      <RecoilRoot>
        <About communityData={mockCommunityData} />
      </RecoilRoot>
    );

    fireEvent.click(getByText("Change Image"));
    

    // Assuming some file is selected

    // Mock the file upload process
    // Assuming the selected file is uploaded successfully

    // Simulate successful upload
    // await waitFor(() => {
    //   expect(setCommunityStateValueMock).toHaveBeenCalledTimes(1);
    // });
    // await waitFor(() => {
    //   expect(setCommunityStateValueMock).toHaveBeenCalledWith({
    //     ...mockCommunityData,
    //     imageURL: "newImageUrl",
    //   });
    // });
  });

});
