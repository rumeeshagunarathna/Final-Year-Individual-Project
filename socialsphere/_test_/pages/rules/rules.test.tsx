// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Rules from "@/pages/rules";

// describe("Rules page", () => {
//   it("Should render properly", () => {
//     render(<Rules />);

//     const Header = screen.getByText("Community Guidelines");
//     const Text = screen.getByText("Rule 1");
//     const Text1 = screen.getByText(
//       "What areas do Community Guidelines cover? You'll find a full list of our Community Guidelines below:"
//     );
              

//     expect(Header).toBeInTheDocument();
//     expect(Text).toBeInTheDocument();
//     expect(Text1).toBeInTheDocument();
//   });
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Rules from "@/pages/rules";

describe("Rules page", () => {
  it("Should render properly", () => {
    render(<Rules />);

    // Header section
    const headerText = "Community Guidelines";
    const header = screen.getByText(headerText);

    // Rule 1 section
    const rule1Text = "Rule 1";
    const rule1 = screen.getByText(rule1Text);
    const rule1Content =
      "Remember the human. Socialsphere is a place for creating community and belonging, not for attacking marginalized or vulnerable groups of people. Everyone has a right to use the platform free of harassment, bullying, and threats of violence. Communities and users that incite violence or that promote hate based on identity or vulnerability will be banned.";

    // Rule 2 section
    const rule2Text = "Rule 2";
    const rule2 = screen.getByText(rule2Text);
    const rule2Content =
      "Abide by community rules. Post authentic content into communities where you have a personal interest, and do not cheat or engage in content manipulation (including spamming, vote manipulation, ban evasion, or subscriber fraud) or otherwise interfere with or disrupt the communities.";

    // // Guidelines section
    // const guidelinesHeaderText = "RULES AND POLICIES";
    // const guidelinesHeader = screen.getByText(guidelinesHeaderText);
    // const guidelinesText =
    //   "What areas do Community Guidelines cover? You'll find a full list of our Community Guidelines below:";
    // const guidelines = screen.getByText(guidelinesText);

    // Footer section
    const footerHeaderText = "Follow Us";
    const footerHeader = screen.getByText(footerHeaderText);

    // Assertions
    expect(header).toBeInTheDocument();
    expect(rule1).toBeInTheDocument();
    expect(screen.getByText(rule1Content)).toBeInTheDocument();
    expect(rule2).toBeInTheDocument();
    expect(screen.getByText(rule2Content)).toBeInTheDocument();
    // expect(guidelinesHeader).toBeInTheDocument();
    // expect(guidelines).toBeInTheDocument();
    expect(footerHeader).toBeInTheDocument();
  });
});
