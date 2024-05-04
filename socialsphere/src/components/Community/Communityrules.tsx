// import React, { useState } from "react";
// import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
// import { GiCheckedShield } from "react-icons/gi";
// import { useRouter } from "next/router";

// const Rules: React.FC = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleTryNowClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       router.push("/rules");
//     }, 2000);
//   };

//   return (
//     <Flex
//       direction="column"
//       bg="white"
//       borderRadius={4}
//       cursor="pointer"
//       p="12px"
//       border="1px solid"
//       borderColor="gray.300"
//     >
//       <Flex mb={2}>
//         <Icon as={GiCheckedShield} fontSize={26} color="green.500" mt={2} />
//         <Stack spacing={1} fontSize="10pt" pl={2} mb={2}>
//           <Text fontWeight={600} mb={2} fontSize="11pt">
//             Community Rules
//           </Text>
//           <Text>The best experience, with exclusive features.</Text>
//         </Stack>
//       </Flex>
//       {/* <Button
//         height="30px"
//         bg="green.400"
//         onClick={handleTryNowClick}
//         disabled={isLoading}
//       >
//         {isLoading ? "Loading..." : "Try Now"}
//       </Button> */}
//     </Flex>
//   );
// };

// export default Rules;

"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Icon,
  Stack,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
// import { GiCheckedShield } from "react-icons/gi";
import { FcRules } from "react-icons/fc";

export default function Communityrules() {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex mb={2}>
        <Icon as={FcRules} fontSize={28} color="yellow.500" mt={0} />{" "}
        <Stack spacing={1} fontSize="10pt" pl={2} mb={2}>
          {" "}
          <Text fontWeight={600} mb={2} fontSize="12pt">
            Community Guidelines{" "}
          </Text>
          {/* <Text>The best experience, with exclusive features.</Text> */}{" "}
        </Stack>{" "}
      </Flex>

      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          {/* 1 */}
          <AccordionItem>
            <AccordionButton
            
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 1</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Remember the human. Socialsphere is a place for creating
                community and belonging, not for attacking marginalized or
                vulnerable groups of people. Everyone has a right to use the
                platform free of harassment, bullying, and threats of violence.
                Communities and users that incite violence or that promote hate
                based on identity or vulnerability will be banned.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 2 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 2</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Abide by community rules. Post authentic content into
                communities where you have a personal interest, and do not cheat
                or engage in content manipulation (including spamming, vote
                manipulation, ban evasion, or subscriber fraud) or otherwise
                interfere with or disrupt the communities.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 3 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 3</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Respect the privacy of others. Instigating harassment, for
                example by revealing someone’s personal or confidential
                information, is not allowed. Never post or threaten to post
                intimate or sexually-explicit media of someone without their
                consent.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 4 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 4</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Do not share or encourage the sharing of sexual, abusive, or
                suggestive content involving minors. Any predatory or
                inappropriate behavior involving a minor is also strictly
                prohibited.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 5 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 5</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                You don’t have to use your real name to use SocialSphere, but
                don’t impersonate an individual or an entity in a misleading or
                deceptive manner.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 6 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 6</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Ensure people have predictable experiences on SocialSphere by
                properly labeling content and communities, particularly content
                that is graphic, sexually-explicit, or offensive.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 7 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Rule 7</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Keep it legal, and avoid posting illegal content or soliciting
                or facilitating illegal or prohibited transactions.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* 8 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Enforcement</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Don’t break the site or do anything that interferes with normal
                use of SocialSphere.We have a variety of ways of enforcing our
                rules, including, but not limited to Removal of content.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}