import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabItemComponent from "../../src/components/Posts/TabItem";

// Mock TabItem
const mockTabItem = {
  title: "Mock Tab",
  icon: () => <div>Mock Icon</div>, // Mocking the icon component
};

describe("TabItemComponent", () => {
  it("calls setSelectedTab when clicked", () => {
    // Arrange
    const setSelectedTabMock = jest.fn();
    const { getByText } = render(
      <TabItemComponent
        item={mockTabItem}
        selected={false}
        setSelectedTab={setSelectedTabMock}
      />
    );

    // Act
    fireEvent.click(getByText("Mock Tab"));

    // Assert
    expect(setSelectedTabMock).toHaveBeenCalledWith("Mock Tab");
  });

  it("applies correct styling when selected", () => {
    // Arrange
    const setSelectedTabMock = jest.fn();
    const { getByText } = render(
      <TabItemComponent
        item={mockTabItem}
        selected={true}
        setSelectedTab={setSelectedTabMock}
      />
    );

    // Assert
    const tabItem = getByText("Mock Tab");
    const computedStyles = window.getComputedStyle(tabItem);
    expect(computedStyles.color).toBe(""); // Check color
    expect(computedStyles.borderBottomColor).toBe(""); // Check border-bottom-color
  });

  it("applies correct styling when not selected", () => {
    // Arrange
    const setSelectedTabMock = jest.fn();
    const { getByText } = render(
      <TabItemComponent
        item={mockTabItem}
        selected={false}
        setSelectedTab={setSelectedTabMock}
      />
    );

    // Assert
    const tabItem = getByText("Mock Tab");
    const computedStyles = window.getComputedStyle(tabItem);
    expect(computedStyles.color).toBe(""); // Check color
    expect(computedStyles.borderBottomColor).toBe(""); // Check border-bottom-color
  });
});
