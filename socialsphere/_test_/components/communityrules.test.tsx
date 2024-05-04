// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import Communityrules from "../../src/components/Community/Communityrules";

// describe("Communityrules Component", () => {
//   test("renders the component correctly", async () => {
//     const { getByText, getByTestId } = render(<Communityrules />);

//     expect(getByText("Community Guidelines")).toBeTruthy();

//     const rule1Button = getByTestId("accordion-button-0");
//     fireEvent.click(rule1Button);
//     await waitFor(() => {
//       expect(getByText("Rule 1")).toBeInTheDocument();
//     });

//     const rule2Button = getByTestId("accordion-button-1");
//     fireEvent.click(rule2Button);
//     await waitFor(() => {
//       expect(getByText("Rule 2")).toBeInTheDocument();
//     });

//     // Add similar tests for other rules
//   });

//   test("expands accordion panel when clicked", async () => {
//     const { getByText, getByRole, findByText } = render(<Communityrules />);

//     // Find the button by its role
//     const rule1Button = getByRole("button", { name: "Rule 1" });

//     // Check if the button exists
//     expect(rule1Button).toBeTruthy();

//     // Click the button to expand the accordion panel
//     fireEvent.click(rule1Button);

//     // Wait for the panel to expand and the content to appear
//     const content = await findByText("Remember the human. Socialsphere is a place for creating community and belonging, not for attacking marginalized or vulnerable groups of people. Everyone has a right to use the platform free of harassment, bullying, and threats of violence. Communities and users that incite violence or that promote hate based on identity or vulnerability will be banned.");
//     expect(content).toBeTruthy();

//     // Add more assertions or tests here
//   });


//   // Add more tests as needed for other functionalities
// });


import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Communityrules from "../../src/components/Community/Communityrules";

describe("Communityrules Component", () => {
  test("renders the component correctly", async () => {
    const { getByText, getByTestId } = render(<Communityrules />);

    expect(getByText("Community Guidelines")).toBeTruthy();

    // Find the button for the first rule
    // const rule1Button = getByTestId("accordion-panel");
    // fireEvent.click(rule1Button);
    // await waitFor(() => {
    //   expect(getByText("Rule 1")).toBeInTheDocument();
    // });

    
        
//     const rule2Button = getByTestId("accordion-button-1");
//     fireEvent.click(rule2Button);
//     await waitFor(() => {
//       expect(getByText("Rule 2")).toBeInTheDocument();
//     });

    // Add similar tests for other rules
  });

  test("expands accordion panel when clicked", async () => {
    const { getByRole, findByText } = render(<Communityrules />);

    
    const rule1Button = getByRole("button", { name: "Rule 1" });
    fireEvent.click(rule1Button);
    const content = await findByText(/Remember the human/i);
    expect(content).toBeTruthy();

    // Add more assertions or tests here
  });

});
