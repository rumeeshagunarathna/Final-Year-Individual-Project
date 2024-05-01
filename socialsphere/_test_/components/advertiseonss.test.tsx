// import React from "react";
// import { render, waitFor, fireEvent } from "@testing-library/react";
// import AdvertiseonSS from "../../src/components/Community/AdvertiseonSS";
// import { RecoilRoot } from "recoil";
// import { useRouter } from "next/router";
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from "../../src/firebase/clientApp";

// // Mock useRouter
// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock("firebase/firestore", () => ({
//   getFirestore: jest.fn(),
// }));

// describe("AdvertiseonSS Component", () => {
//   test("renders the component correctly", async () => {
//     // Mock useRouter return value
//     (useRouter as jest.Mock).mockReturnValue({
//       push: jest.fn(),
//     });

//     // Mock getDocs return value
//     const mockAdvertises = [
//       { id: "1", imageUrl: "mockImageUrl1" },
//       { id: "2", imageUrl: "mockImageUrl2" },
//     ];
//     (getDocs as jest.Mock).mockResolvedValue({
//       docs: mockAdvertises.map((advertise) => ({
//         id: advertise.id,
//         data: () => ({ imageUrl: advertise.imageUrl }),
//       })),
//     });

//     const { getByText, getByAltText } = render(
//       <RecoilRoot>
//         <AdvertiseonSS />
//       </RecoilRoot>
//     );

//     expect(getByText("Advertisements")).toBeInTheDocument();
//     expect(getByText("Advertise on SocialSphere")).toBeInTheDocument();
//     expect(getByText("Go to Advertise page")).toBeInTheDocument();

//     await waitFor(() => {
//       expect(getByAltText("Image of 1")).toBeInTheDocument();
//       expect(getByAltText("Image of 2")).toBeInTheDocument();
//     });
//   });

//   test("handles clicking on Go to Advertise page button correctly", () => {
//     const mockPush = jest.fn();
//     (useRouter as jest.Mock).mockReturnValue({
//       push: mockPush,
//     });

//     const { getByText } = render(
//       <RecoilRoot>
//         <AdvertiseonSS />
//       </RecoilRoot>
//     );

//     fireEvent.click(getByText("Go to Advertise page"));

//     expect(mockPush).toHaveBeenCalledWith("/advertise");
//   });
// });




// import React from "react";
// import { render, waitFor, fireEvent } from "@testing-library/react";
// import AdvertiseonSS from "../../src/components/Community/AdvertiseonSS";
// import { RecoilRoot } from "recoil";
// import { useRouter } from "next/router";
// import { getDocs, collection } from "firebase/firestore";
// import { firestore } from "../../src/firebase/clientApp";

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock("firebase/firestore", () => ({
//   ...jest.requireActual("firebase/firestore"),
//   collection: jest.fn(),
//   getDocs: jest.fn(),
// }));

// describe("AdvertiseonSS Component", () => {
//   test("renders the component correctly", async () => {
//     (useRouter as jest.Mock).mockReturnValue({
//       push: jest.fn(),
//     });

//     const mockAdvertises = [
//       { id: "1", imageUrl: "mockImageUrl1" },
//       { id: "2", imageUrl: "mockImageUrl2" },
//     ];
//     (getDocs as jest.Mock).mockResolvedValue({
//       docs: mockAdvertises.map((advertise) => ({
//         id: advertise.id,
//         data: () => ({ imageUrl: advertise.imageUrl }),
//       })),
//     });

//     const { getByText, getByAltText } = render(
//       <RecoilRoot>
//         <AdvertiseonSS />
//       </RecoilRoot>
//     );

//     expect(getByText("Advertisements")).toBeTruthy();
//     expect(getByText("Advertise on SocialSphere")).toBeTruthy();
//     expect(getByText("Go to Advertise page")).toBeTruthy();

//     await waitFor(() => {
//       expect(getByAltText("Image of 1")).toBeTruthy();
//       expect(getByAltText("Image of 2")).toBeTruthy();
//     });
//   });

//   test("handles clicking on Go to Advertise page button correctly", () => {
//     const mockPush = jest.fn();
//     (useRouter as jest.Mock).mockReturnValue({
//       push: mockPush,
//     });

//     const { getByText } = render(
//       <RecoilRoot>
//         <AdvertiseonSS />
//       </RecoilRoot>
//     );

//     fireEvent.click(getByText("Go to Advertise page"));

//     expect(mockPush).toHaveBeenCalledWith("/advertise");
//   });
// });





import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import AdvertiseonSS from "../../src/components/Community/AdvertiseonSS";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../src/firebase/clientApp";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  ...jest.requireActual("firebase/firestore"),
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

describe("AdvertiseonSS Component", () => {
  test("renders the component correctly", async () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    const mockAdvertises = [
      { id: "1", imageUrl: "mockImageUrl1" },
      { id: "2", imageUrl: "mockImageUrl2" },
    ];
    (getDocs as jest.Mock).mockResolvedValue({
      docs: mockAdvertises.map((advertise) => ({
        id: advertise.id,
        data: () => ({ imageUrl: advertise.imageUrl }),
      })),
    });

    const { getByText, getByAltText } = render(
      <RecoilRoot>
        <AdvertiseonSS />
      </RecoilRoot>
    );

    expect(getByText("Advertisements")).toBeTruthy();
    expect(getByText("Advertise on SocialSphere")).toBeTruthy();
    expect(getByText("Go to Advertise page")).toBeTruthy();

    await waitFor(() => {
      expect(getByAltText("Image of 1")).toBeTruthy();
      expect(getByAltText("Image of 2")).toBeTruthy();
    });
  });

  test("handles clicking on Go to Advertise page button correctly", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    const { getByText } = render(
      <RecoilRoot>
        <AdvertiseonSS />
      </RecoilRoot>
    );

    fireEvent.click(getByText("Go to Advertise page"));

    expect(mockPush).toHaveBeenCalledWith("/advertise");
  });
});



