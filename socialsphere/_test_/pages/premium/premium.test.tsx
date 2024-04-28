import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Premium from "@/pages/premium";

describe("Premium page", () => {
  it("Should render properly", () => {
    render(<Premium />);

    // Header section
    const headerText = "Join SocialSphere Premium Today";
    const header = screen.getByText(headerText);
    const Text1Text = "Premium";
    const Text1 = screen.getByText(Text1Text);
    const Text2Text = "Social Sphere";
    const Text2 = screen.getByText(Text2Text);
    const Text3Text =
      "Help support SocialSphere and get VIP treatment and exclusive access.";
    const Text3 = screen.getByText(Text3Text);
    const Text4Text =
      "Premium socialsphere is a paid subscription that comes with a bundle of features and benefits available for both eligible profiles and eligible businesses.";
    const Text4 = screen.getByText(Text4Text);
const Text5Text = "© 2024 SocialSphere. All rights reserved";
const Text5 = screen.getByText(Text5Text);


    const footerHeaderText1 = "Follow Us";
    const footerHeader1 = screen.getByText(footerHeaderText1);
    const Box1Text = "Facebook";
    const Box1 = screen.getByText(Box1Text);

    const Box2Text = "Twitter";
    const Box2 = screen.getByText(Box2Text);

    const Box3Text = "Dribbble";
    const Box3 = screen.getByText(Box3Text);

    const Box4Text = "Instagram";
    const Box4 = screen.getByText(Box4Text);

    const Box5Text = "LinkedIn";
    const Box5 = screen.getByText(Box5Text);
    const footerHeaderText2 = "Legal";
    const footerHeader2 = screen.getByText(footerHeaderText2);
    const Box6Text = "Cookies Policy";
    const Box6 = screen.getByText(Box6Text);

    const Box7Text = "Privacy Policy";
    const Box7 = screen.getByText(Box7Text);

    const Box8Text = "Terms of Service";
    const Box8 = screen.getByText(Box8Text);

    const Box9Text = "Law Enforcement";
    const Box9 = screen.getByText(Box9Text);

    const Box10Text = "Status";
    const Box10 = screen.getByText(Box10Text);
    const footerHeaderText3 = "Company";
    const footerHeader3 = screen.getByText(footerHeaderText3);
    const Box11Text = "About Us";
    const Box11 = screen.getByText(Box11Text);

    const Box12Text = "Press";
    const Box12 = screen.getByText(Box12Text);

    const Box13Text = "Careers";
    const Box13 = screen.getByText(Box13Text);

    const Box14Text = "Contact Us";
    const Box14 = screen.getByText(Box14Text);

    const Box15Text = "Partners";
    const Box15 = screen.getByText(Box15Text);
    const footerHeaderText4 = "Product";
    const footerHeader4 = screen.getByText(footerHeaderText4);
    const Box16Text = "Overview";
    const Box16 = screen.getByText(Box16Text);

    const Box17Text = "Features";
    const Box17 = screen.getByText(Box17Text);

    const Box18Text = "New";
    const Box18 = screen.getByText(Box18Text);

    const Box19Text = "Tutorials";
    const Box19 = screen.getByText(Box19Text);

    const Box20Text = "Releases";
    const Box20 = screen.getByText(Box20Text);

    const monthlySubscriptionLink = screen.getByText("$4.99/Month");
    const yearlySubscriptionButton = screen.getByText("$47.99/Year (Save 30%)");

    expect(monthlySubscriptionLink).toBeInTheDocument();
    expect(monthlySubscriptionLink).toHaveAttribute(
      "href",
      "https://buy.stripe.com/test_7sIeYG836aFFcuc5kk"
    );
    expect(monthlySubscriptionLink).toHaveClass(
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    );

    expect(yearlySubscriptionButton).toBeInTheDocument();
    expect(yearlySubscriptionButton.tagName).toEqual("BUTTON"); // Ensure it's a button element

    // Assertion for the Image component
    const imageElement = screen.getByAltText("Login Image"); // Check for the alt text
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ); 
    expect(imageElement).toHaveStyle("object-fit: cover;");

   
    const cardHeading = screen.getByText("Verified Account*");
    expect(cardHeading).toBeInTheDocument();
    const cardDescription = screen.getByText(
      "To confirm that a notable account.confirms that the account is validated and authentic. This subscription comes with a bundle of features and benefits available for both eligible profiles and eligible businesses."
    );
    expect(cardDescription).toBeInTheDocument();

    const cardHeading1 = screen.getByText("Ad-free Browsing");
    expect(cardHeading1).toBeInTheDocument();
    const cardDescription1 = screen.getByText(
      "Enjoy browsing without interruptions from ads."
    );
    expect(cardDescription1).toBeInTheDocument();

    const cardHeading2 = screen.getByText("Enjoy videos offline");
    expect(cardHeading2).toBeInTheDocument();
    const cardDescription2 = screen.getByText(
      "Download videos to watch later when you’re offline or on the go."
    );
    expect(cardDescription2).toBeInTheDocument();

    const cardHeading3 = screen.getByText("Avatar Gear");
    expect(cardHeading3).toBeInTheDocument();
    const cardDescription3 = screen.getByText(
      "Outfit your avatar with the best gear and accessories."
    );
    expect(cardDescription3).toBeInTheDocument();

    const cardHeading4 = screen.getByText("Custom App Icons");
    expect(cardHeading4).toBeInTheDocument();
    const cardDescription4 = screen.getByText(
      "Change your app icon to something more your style."
    );
    expect(cardDescription4).toBeInTheDocument();

    
    // Assertions
    expect(header).toBeInTheDocument();
    expect(Text1).toBeInTheDocument();
    expect(Text2).toBeInTheDocument();
    expect(Text3).toBeInTheDocument();
    expect(Text4).toBeInTheDocument();
    expect(footerHeader1).toBeInTheDocument();
    expect(Box1).toBeInTheDocument();
    expect(Box2).toBeInTheDocument();
    expect(Box3).toBeInTheDocument();
    expect(Box4).toBeInTheDocument();
    expect(Box5).toBeInTheDocument();
    expect(footerHeader2).toBeInTheDocument();
    expect(Box6).toBeInTheDocument();
    expect(Box7).toBeInTheDocument();
    expect(Box8).toBeInTheDocument();
    expect(Box9).toBeInTheDocument();
    expect(Box10).toBeInTheDocument();
    expect(footerHeader3).toBeInTheDocument();
    expect(Box11).toBeInTheDocument();
    expect(Box12).toBeInTheDocument();
    expect(Box13).toBeInTheDocument();
    expect(Box14).toBeInTheDocument();
    expect(Box15).toBeInTheDocument();
    expect(footerHeader4).toBeInTheDocument();
    expect(Box16).toBeInTheDocument();
    expect(Box17).toBeInTheDocument();
    expect(Box18).toBeInTheDocument();
    expect(Box19).toBeInTheDocument();
    expect(Box20).toBeInTheDocument();
    expect(Text5).toBeInTheDocument();
  });
});
