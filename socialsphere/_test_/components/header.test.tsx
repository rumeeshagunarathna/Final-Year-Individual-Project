import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../../src/components/Community/Header";
import { Community } from "../../src/atoms/communitiesAtom";

// Mock the useCommunityData hook
jest.mock("../../src/hooks/useCommunityData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Header Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the header correctly with community data and user joined", () => {
    // Mock community data
    const mockCommunityData: Community = {
      id: "mockCommunityId",
      imageURL: "mockImageUrl",
      creatorId: "mockCreatorId",
      numberOfMembers: 10,
      privacyType: "public",
    };

    // Mock useCommunityData hook return value
    const mockUseCommunityData = {
      communityStateValue: {
        mySnippets: [{ communityId: "mockCommunityId" }], // Simulate user joined
        currentCommunity: {
          imageURL: "mockImageUrl",
        },
      },
      onJoinOrLeaveCommunity: jest.fn(),
      loading: false,
    };

    // Mock useCommunityData hook to return the mock value
    require("../../src/hooks/useCommunityData").default.mockReturnValue(
      mockUseCommunityData
    );

    // Render the Header component
    const { getByText, getByAltText } = render(
      <Header communityData={mockCommunityData} />
    );

    // Expectations
    expect(getByText("mockCommunityId")).toBeTruthy();
    expect(getByText("s/mockCommunityId")).toBeTruthy();
     //expect(getByText("Community Image")).toBeTruthy();
    expect(getByText("Joined")).toBeTruthy();
  });

  test("handles button click correctly", () => {
    // Mock community data
    const mockCommunityData: Community = {
      id: "mockCommunityId",
      imageURL: "mockImageUrl",
      creatorId: "mockCreatorId",
      numberOfMembers: 10,
      privacyType: "public",
    };

    // Mock useCommunityData hook return value
    const mockUseCommunityData = {
      communityStateValue: {
        mySnippets: [], // Simulate user not joined
        currentCommunity: {
          imageURL: "mockImageUrl",
        },
      },
      onJoinOrLeaveCommunity: jest.fn(),
      loading: false,
    };

    // Mock useCommunityData hook to return the mock value
    require("../../src/hooks/useCommunityData").default.mockReturnValue(
      mockUseCommunityData
    );

    // Render the Header component
    const { getByText } = render(<Header communityData={mockCommunityData} />);

    // Simulate button click
    fireEvent.click(getByText("Join"));

    // Expect the onJoinOrLeaveCommunity function to be called with correct parameters
    expect(mockUseCommunityData.onJoinOrLeaveCommunity).toHaveBeenCalledWith(
      mockCommunityData,
      false
    );
  });
});
