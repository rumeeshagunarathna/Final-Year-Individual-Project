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
            Please go through the terms before accepting it.
          </Text>
          <Flex
            flexDirection="column"
            overflowY="auto"
            height="calc(100% - 110px)"
            padding="0 35px"
            color="var(--scn-text-clr)"
          >
            <Text fontStyle="italic" marginBottom="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              cupiditate incidunt? Id, sed alias. Praesentium modi facilis ea
              exercitationem adipisci! Possimus aspernatur doloribus id cumque
              nulla tempora obcaecati nihil tenetur?
            </Text>
            <Text fontStyle="italic" marginBottom="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              cupiditate incidunt? Id, sed alias. Praesentium modi facilis ea
              exercitationem adipisci! Possimus aspernatur doloribus id cumque
              nulla tempora obcaecati nihil tenetur?
            </Text>
            <Text fontStyle="italic" marginBottom="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              cupiditate incidunt? Id, sed alias. Praesentium modi facilis ea
              exercitationem adipisci! Possimus aspernatur doloribus id cumque
              nulla tempora obcaecati nihil tenetur?
            </Text>
            <Text fontStyle="italic" marginBottom="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              cupiditate incidunt? Id, sed alias. Praesentium modi facilis ea
              exercitationem adipisci! Possimus aspernatur doloribus id cumque
              nulla tempora obcaecati nihil tenetur?
            </Text>
            <Text fontStyle="italic" marginBottom="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              cupiditate incidunt? Id, sed alias. Praesentium modi facilis ea
              exercitationem adipisci! Possimus aspernatur doloribus id cumque
              nulla tempora obcaecati nihil tenetur?
            </Text>
            <Text fontStyle="italic" marginBottom="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              cupiditate incidunt? Id, sed alias. Praesentium modi facilis ea
              exercitationem adipisci! Possimus aspernatur doloribus id cumque
              nulla tempora obcaecati nihil tenetur?
            </Text>
          </Flex>
          <Checkbox mt={10}>Remember me</Checkbox>
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
