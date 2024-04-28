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
    const Text1 =
      "SocialSphere is a network of communities that are created, run, and populated the users.Through these communities, you can post, comment, vote, discuss, learn, debate, support, and connect with people who share your interests, and we encourage you to find—or even create—your home on this platform.While not every community may be for you (and you may find some unrelatable or even offensive), no community should be used as a weapon. Communities should create a sense of belonging for their members, not try to diminish it for others. Likewise, everyone on SocialSphere should have an expectation of privacy and safety, so please respect the privacy and safety of others.The rules governing each community are the platform-wide rules that apply to everyone on Reddit. These rules are enforced by the admins.";
    const Text = screen.getByText(Text1);

    const rule1Text = "Rule 1";
    const rule1 = screen.getByText(rule1Text);
    const rule1Content =
      "Remember the human. Socialsphere is a place for creating community and belonging, not for attacking marginalized or vulnerable groups of people. Everyone has a right to use the platform free of harassment, bullying, and threats of violence. Communities and users that incite violence or that promote hate based on identity or vulnerability will be banned.";

    const rule2Text = "Rule 2";
    const rule2 = screen.getByText(rule2Text);
    const rule2Content =
      "Abide by community rules. Post authentic content into communities where you have a personal interest, and do not cheat or engage in content manipulation (including spamming, vote manipulation, ban evasion, or subscriber fraud) or otherwise interfere with or disrupt the communities.";

    const rule3Text = "Rule 3";
    const rule3 = screen.getByText(rule3Text);
    const rule3Content =
      "Respect the privacy of others. Instigating harassment, for example by revealing someone’s personal or confidential information, is not allowed. Never post or threaten to post intimate or sexually-explicit media of someone without their consent."
    
    const rule4Text = "Rule 4";
    const rule4 = screen.getByText(rule4Text);
    const rule4Content =
      "Do not share or encourage the sharing of sexual, abusive, or suggestive content involving minors. Any predatory or inappropriate behavior involving a minor is also strictly prohibited."
    
    const rule5Text = "Rule 5";
    const rule5 = screen.getByText(rule5Text);
    const rule5Content =
      "You don’t have to use your real name to use SocialSphere, but don’t impersonate an individual or an entity in a misleading or deceptive manner."
    
   
    const rule6Text = "Rule 6";
    const rule6 = screen.getByText(rule6Text);
    const rule6Content =
      "Ensure people have predictable experiences on SocialSphere by properly labeling content and communities, particularly content that is graphic, sexually-explicit, or offensive."
   
    const rule7Text = "Rule 7";
    const rule7 = screen.getByText(rule7Text);
    const rule7Content =
      "Keep it legal, and avoid posting illegal content or soliciting or facilitating illegal or prohibited transactions."
    
    
    const rule8Text = "Enforcement";
    const rule8 = screen.getByText(rule8Text);
    const rule8Content =
      "Don’t break the site or do anything that interferes with normal use of SocialSphere.We have a variety of ways of enforcing our rules, including, but not limited to Removal of content."
    
    
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
    

    // Assertions
    expect(header).toBeInTheDocument();
    expect(Text).toBeInTheDocument();
    expect(rule1).toBeInTheDocument();
    expect(screen.getByText(rule1Content)).toBeInTheDocument();
    expect(rule2).toBeInTheDocument();
    expect(screen.getByText(rule2Content)).toBeInTheDocument();
    expect(rule3).toBeInTheDocument();
    expect(screen.getByText(rule3Content)).toBeInTheDocument();
    expect(rule4).toBeInTheDocument();
    expect(screen.getByText(rule4Content)).toBeInTheDocument();
    expect(rule5).toBeInTheDocument();
    expect(screen.getByText(rule5Content)).toBeInTheDocument();
    expect(rule6).toBeInTheDocument();
    expect(screen.getByText(rule6Content)).toBeInTheDocument();
    expect(rule7).toBeInTheDocument();
    expect(screen.getByText(rule7Content)).toBeInTheDocument();
    expect(rule8).toBeInTheDocument();
    expect(screen.getByText(rule8Content)).toBeInTheDocument();
    
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
  });
});
