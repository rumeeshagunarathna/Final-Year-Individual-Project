// import React from 'react';
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Report from '@/pages/report'

// describe('Report page', () => {
//       it('Should render properly', () => {
//             render(<Report />);

//             const button = screen.getAllByRole('button');
//             const buttonText = "Delete";

//             expect(button).toHaveTextContent(buttonText);
//       });
// });


// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Report from "../../pages/report";

// // Mock Firebase functions
// jest.mock("../app/firebaseConfig", () => ({
//   db: {
//     collection: jest.fn(() => ({
//       getDocs: jest.fn(() => Promise.resolve({ forEach: jest.fn() })),
//       deleteDoc: jest.fn(() => Promise.resolve()),
//     })),
//   },
// }));

// describe("Report component", () => {
//   test("renders reports data correctly", async () => {
//     render(<Report />);

//     // Ensure that loading state is displayed
//     expect(screen.getByText("Loading...") as HTMLElement).toBeInTheDocument();

//     // Wait for data to be fetched
//     await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());

//     // Ensure that report data is rendered
//     expect(screen.getByText("Report 1") as HTMLElement).toBeInTheDocument();
//     // Add more assertions for other data fields if needed
//   });

//   test("deletes report on button click", async () => {
//     render(<Report />);

//     // Wait for data to be fetched
//     await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());

//     // Click the delete button
//     userEvent.click(screen.getByText("Delete"));

//     // Ensure that the report is deleted
//     await waitFor(() => expect(screen.queryByText("Report 1")).toBeNull());
//     // Add more assertions as needed
//   });
// });

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Report from "../../pages/report"; // Assuming this is your component file
import { collection, deleteDoc } from "firebase/firestore";
import "@testing-library/jest-dom/extend-expect";

// Mock Firebase functions
jest.mock("../app/firebaseConfig", () => ({
  db: jest.fn(),
}));
jest.mock("firebase/firestore", () => ({
  getDocs: jest.fn(),
  collection: jest.fn(),
  deleteDoc: jest.fn(),
  doc: jest.fn(),
}));

describe("Report Component", () => {
  test("fetchDataFromFirestore fetches data correctly", async () => {
    const mockData = [
      {
        id: "1",
        report: "Report 1",
        relatedto: "Related To 1",
        name: "Name 1",
        reason: "Reason 1",
        link: "Link 1",
        email: "email1@example.com",
      },
      {
        id: "2",
        report: "Report 2",
        relatedto: "Related To 2",
        name: "Name 2",
        reason: "Reason 2",
        link: "Link 2",
        email: "email2@example.com",
      },
    ];
    // Mock Firebase Firestore functions
    const mockQuerySnapshot = {
      forEach: jest.fn(),
    };
    const mockGetDocs = jest.fn(() => Promise.resolve(mockQuerySnapshot));
    const mockCollection = jest.fn(() => ({ getDocs: mockGetDocs }));

    // Set up mock Firestore collection
    collection.mockImplementation(mockCollection);

    // Render the component
    const { getByText } = render(<Report />);

    // Wait for data to be fetched
    await waitFor(() => {
      mockData.forEach(({ report }) => {
        expect(getByText(report)).toBeInTheDocument();
      });
    });
  });

  test("handleDelete deletes data correctly", async () => {
    // Mock Firebase Firestore functions
    const mockDeleteDoc = jest.fn();
    deleteDoc.mockImplementation(mockDeleteDoc);

    // Render the component
    const { getByText } = render(<Report />);

    // Simulate a delete action
    fireEvent.click(getByText("Delete"));

    // Wait for delete to be executed
    await waitFor(() => {
      expect(mockDeleteDoc).toHaveBeenCalled();
    });
  });
});
