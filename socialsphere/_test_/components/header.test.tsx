import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Header from "../../src/components/Community/Header";
import { Community } from "../../src/atoms/communitiesAtom";

// Mock the useCommunityData hook
jest.mock("../../hooks/useCommunityData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Header Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the header correctly with community data and user joined", async () => {
    // Mock community data
    const mockCommunityData: Community = {
      id: "mockCommunityId",
      imageURL: "mockImageUrl",
      creatorId: "mockCreatorId", // Add missing properties
      numberOfMembers: 10, // Add missing properties
      privacyType: "public", // Add missing properties
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
    require("../../hooks/useCommunityData").default.mockReturnValue(
      mockUseCommunityData
    );

    // Render the Header component
    const { getByText, getByAltText } = render(
      <Header communityData={mockCommunityData} />
    );

    // Expectations
    expect(getByText("mockCommunityId")).toBeInTheDocument();
    expect(getByText("s/mockCommunityId")).toBeInTheDocument();
    expect(getByAltText("Community Image")).toBeInTheDocument();
    expect(getByText("Joined")).toBeInTheDocument();
  });

  test("handles button click correctly", async () => {
    const mockCommunityData: Community = {
      id: "mockCommunityId",
      imageURL: "mockImageUrl",
      creatorId: "mockCreatorId", // Add missing properties
      numberOfMembers: 10, // Add missing properties
      privacyType: "public", // Add missing properties
    };

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
    require("../../hooks/useCommunityData").default.mockReturnValue(
      mockUseCommunityData
    );

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
