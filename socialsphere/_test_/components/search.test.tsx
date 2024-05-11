import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Searchinput from "../../src/components/Navbar/Searchinput";

// Mock user data
const mockUser: Partial<User> = {
  displayName: "John Doe",
  email: "john@example.com",
  // Add any other properties you want to include in the mock
};

describe("Searchinput Component", () => {
  test("renders correctly with user", () => {
    const { getByPlaceholderText } = render(
      <Searchinput user={mockUser as User} />
    );
    const inputElement = getByPlaceholderText(
      "Search Here..."
    ) as HTMLInputElement;
    expect(inputElement).toBeTruthy();
  });

  test("renders correctly without user", () => {
    const { getByPlaceholderText } = render(<Searchinput />);
    const inputElement = getByPlaceholderText(
      "Search Here..."
    ) as HTMLInputElement;
    expect(inputElement).toBeTruthy();
  });

  test("input changes value correctly", () => {
    const { getByPlaceholderText } = render(<Searchinput />);
    const inputElement = getByPlaceholderText(
      "Search Here..."
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "test value" } });

    expect(inputElement.value).toBe("test value");
  });
});
