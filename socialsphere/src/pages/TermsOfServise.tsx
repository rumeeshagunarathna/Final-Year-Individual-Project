import React from "react";
//import styles from "./TermsOfService.css";
import { Avatar, Badge, Box, Button, Center, Heading, Stack, useColorModeValue, Text, AvatarBadge, Flex, FormControl, FormLabel, IconButton, Input, Divider, Checkbox} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";


const TermsOfService = () => {

const router = useRouter();

const handleAgree = () => {
  // Redirect to the home page
  router.push("/home");
};

const handleDisagree = () => {
  // Redirect to the landing page
  router.push("/landingpage");
};



  return (
    <Flex
      minH={"100vh"}
      minW={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={3}
        my={12}
      >
        <Flex
          flexDirection="column"
          width="100%"
          margin="35px 0"
          height="calc(500px)"
        >
          <Text
            fontSize="24px"
            lineHeight="32px"
            fontWeight="700"
            textAlign="center"
            textTransform="uppercase"
            mb={3}
            mt={3}
          >
            Terms and Conditions
          </Text>
          <Divider />
          <Text fontSize="16px" lineHeight="26px" marginBottom="20px" mt={5}>
            These terms and conditions govern the collection, storage, and usage
            of user data by SocialSphere for security purposes. By using SocialSphere
            services, you agree to these terms and conditions.
          </Text>
          <Flex
            flexDirection="column"
            overflowY="auto"
            height="calc(100% - 110px)"
            padding="0 35px"
            color="var(--scn-text-clr)"
          >
            <h2>
              <strong>
                Information Collected- We may collect the following user data
                for security purposes:
              </strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Email addresses:</strong>
                Used for account verification and communication purposes.
              </li>
              <li>
                <strong>Passwords:</strong> Stored securely using
                industry-standard encryption techniques.
              </li>
              <li>
                <strong>Usernames:</strong> Used for identification within the
                platform.
              </li>
              <li>
                <strong>IP addresses:</strong> Collected to prevent and detect
                unauthorized access, abuse, or fraudulent activities.
              </li>
              <li>
                <strong>Browser and device information:</strong> Utilized for
                security analysis and to enhance user experience.
              </li>
            </ul>
            <Divider />
            {/* * */}

            <h2>
              <strong>
                Purpose of Data Collection- The collected user data is used for
                the following purposes:
              </strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Protecting user accounts from unauthorized access and fraudulent
                activities.
              </li>
              <li>
                Detecting and preventing security breaches, spam, and abuse.
              </li>
              <li>
                Complying with legal obligations and responding to law
                enforcement requests.
              </li>
              <li>
                Enhancing the security infrastructure and improving overall
                platform safety.
              </li>
            </ul>
            <Divider />
            {/* * */}
            <h2>
              <strong>Data Security</strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                SocialSphere employs industry-standard security measures to
                protect user data from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure.
              </li>
            </ul>
            <Divider />
            {/* * */}

            <h2>
              <strong>Data Retention</strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                SocialSphere retains user data for as long as necessary to
                fulfill the purposes outlined in these terms and conditions,
                unless a longer retention period is required by law or
                regulation.
              </li>
            </ul>
            <Divider />
            {/* * */}

            <h2>
              <strong>Third-Party Services</strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                SocialSphere may utilize third-party services for data storage,
                processing, or analysis. These third parties are contractually
                obligated to adhere to data protection regulations and
                confidentiality standards.
              </li>
            </ul>
            <Divider />
            {/* * */}

            <h2>
              <strong>User Rights</strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Users have the right to access, correct, or delete their
                personal data stored by SocialSphere. Requests for data access,
                rectification, or deletion can be submitted through
                SocialSpheres designated channels.
              </li>
            </ul>
            <Divider />
            {/* * */}

            <h2>
              <strong>Changes to Terms and Contact Information</strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                SocialSphere reserves the right to modify these terms and
                conditions at any time. Users will be notified of significant
                changes, and continued use of services constitutes acceptance of
                the revised terms.For inquiries or concerns regarding data
                privacy and security, users can contact SocialSphere through the
                designated support channels.
              </li>
            </ul>
            <Divider />
            {/* * */}

            <h2>
              <strong>Governing Law</strong>
            </h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                These terms and conditions are governed by the laws of
                Jurisdiction. Any disputes arising from or related to these
                terms shall be resolved in the courts of Jurisdiction.
              </li>
            </ul>
            <Divider />
            {/* * */}
            <Text>
              By using SocialSphere services, you acknowledge that you have
              read, understood, and agree to these terms and conditions
              regarding the collection of user data for security purposes.
            </Text>
          </Flex>
          <Checkbox mt={10}>I Agree to these Terms and Conditions.</Checkbox>
        </Flex>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="400px"
            _hover={{
              bg: "red.500",
            }}
            onClick={handleDisagree}
          >
            Disagree
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="400px"
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleAgree}
          >
            I Agree
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default TermsOfService;
