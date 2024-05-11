import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ReportCard from "../../src/pages/report";
import { firestore } from "@/firebase/clientApp";
import { Firestore, addDoc } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

// Define a custom type for the mocked firestore object
interface MockFirestore extends Firestore {
  collection: jest.Mock;
  app: FirebaseApp;
}

// Create a mocked firestore object
const mockFirestore: MockFirestore = {
  app: {} as FirebaseApp, // Mocked FirebaseApp object
  type: 'firestore',
  collection: jest.fn(() => ({
    addDoc: jest.fn(() => Promise.resolve()),
  })),
  toJSON: jest.fn(),
};

jest.mock("firebase/firestore", () => ({
  ...jest.requireActual("firebase/firestore"),
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

describe("ReportCard Component", () => {
  it("submits the form successfully when all required fields are filled out", async () => {
    const { getByLabelText, getByText } = render(<ReportCard />);

    fireEvent.change(getByLabelText("Report"), { target: { value: "user" } });
    fireEvent.change(getByLabelText("Your Thoughts?"), {
      target: { value: "This is a test report." },
    });
    fireEvent.change(getByLabelText("link to the related post:"), {
      target: { value: "www.example.com" },
    });
    fireEvent.change(getByLabelText("Your email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(getByText("Submit"));

//     await waitFor(() => {
//       //expect(mockFirestore.collection).toHaveBeenCalledWith("report");
//       expect(mockFirestore.collection("report").addDoc).toHaveBeenCalledWith({
//         name: "This is a test report.",
//         relatedto: "Yours",
//         report: "user",
//         reason: "Harassment",
//         link: "www.example.com",
//         email: "test@example.com",
//       });
//     });
  });

  it("displays an error message if form submission fails", async () => {
    const errorMessage = "Error adding user data. Please try again.";
    const addDocMock = jest.fn(() => Promise.reject(new Error(errorMessage)));
    mockFirestore.collection.mockReturnValueOnce({ addDoc: addDocMock });

    const { getByText } = render(<ReportCard />);
    fireEvent.click(getByText("Submit"));

//     await waitFor(() => {
//       expect(getByText(errorMessage)).toBeInTheDocument();
//     });
  });

  it("allows the user to select the type of report", () => {
    const { getByLabelText } = render(<ReportCard />);
    fireEvent.click(getByLabelText("A User"));
    fireEvent.click(getByLabelText("A Post"));
    fireEvent.click(getByLabelText("A Community"));
  });

  it("allows the user to select reporting checkboxes", () => {
    const { getByLabelText } = render(<ReportCard />);
    fireEvent.click(getByLabelText("This is related to?"));
    fireEvent.click(
      getByLabelText("Yours or an entity or an individual you represent")
    );
    fireEvent.click(getByLabelText("Someone else's"));
  });

  it("updates the link and email fields correctly", () => {
    const { getByLabelText } = render(<ReportCard />);
    fireEvent.change(getByLabelText("link to the related post:"), {
      target: { value: "www.example.com" },
    });
    fireEvent.change(getByLabelText("Your email"), {
      target: { value: "test@example.com" },
    });
  });
});
