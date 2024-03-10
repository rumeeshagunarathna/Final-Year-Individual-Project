import PersonalHome from "@/components/Community/PersonalHome";
import Recommendations from "@/components/Community/Recommendations";
import SignUp from "@/components/Modal/Auth/SignUp";
import { Flex,Text,Image, Stack, Heading, Grid, GridItem, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Checkbox, Button, Box, AspectRatio } from "@chakra-ui/react";

import Link from "next/link";
import React, { useEffect } from "react";
import Premium from "./premium";
import AuthButtons from "@/components/Navbar/RightContent/AuthButtons";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const premium: React.FC = () => {

   const [signInWithGoogle, userCred, loading, error] =
     useSignInWithGoogle(auth);
  
  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="100%" justify="center" maxWidth="1270">
        <Box bg="gray.300" minH="100vh" p={8}>
          <Image src="/images/logo3.png" height="50px" />

          <Text
            as="i"
            fontSize="35px"
            height="46px"
            color="blue.400"
            display={{ base: "none", md: "unset" }}
          >
            Social
          </Text>
          <Text
            as="i"
            fontSize="35px"
            height="46px"
            color="yellow.500"
            display={{ base: "none", md: "unset" }}
          >
            Sphere
          </Text>
          {/* <Flex justifyContent="center" alignItems="center" h="100%"> */}
          <Stack spacing={8} mt={1}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading as="h1" size="lg" color="yellow.600">
               Business
              </Heading>
            </Flex>
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem colSpan={2}>
                  <Heading
                    as="h4"
                    size="md"
                    textAlign="center"
                    color="blue.700"
                  >
                    Target your audience
                  </Heading>
                  <Text textAlign="center" color="gray.700">
                    Reach customers where they're most passionate and engaged
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Heading
                    as="h4"
                    size="md"
                    textAlign="center"
                    color="green.700"
                  >
                    Meet business goals
                  </Heading>
                  <Text textAlign="center" color="gray.700">
                    Increase brand awareness and drive traffic, conversions, or
                    app installs
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Heading
                    as="h4"
                    size="md"
                    textAlign="center"
                    color="orange.700"
                  >
                    Measure success
                  </Heading>
                  <Text textAlign="center" color="gray.700">
                    Leverage insights to optimize campaigns and drive
                    conversions
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            <Stack spacing={4} mt={8}>
              <Flex justifyContent="center">
                <Link href="#">
                  <Text color="blue.500">Speak with an Ads Expert</Text>
                </Link>
              </Flex>
              <Text textAlign="center" fontSize="sm" color="yellow.600">
                Book your call at T.P: 0112977188
              </Text>
            </Stack>
          </Stack>
          {/* </Flex> */}
        </Box>

        <Flex
        // direction="row"
        // width={{ base: "100%", md: "50%" }}
        // mr={{ base: 0, md: 6 }}
        >
          <Box bg="gray.100" minH="100vh" p={8}>
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box
                w="full"
                maxW="md"
                p={4}
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
              >
                <Stack spacing={4}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                  >
                    <Heading as="h2" size="md">
                      Let's get started
                    </Heading>
                    <Flex alignItems="center">
                      <Link href="#">සිංහල</Link>
                      <Link href="#">English</Link>
                    </Flex>
                  </Flex>
                  {/* <AspectRatio ratio={16 / 9}>
                    <Image
                      src="https://i.imgur.com/Pgu5aHr.png"
                      alt="Google logo"
                    />
                  </AspectRatio> */}
                  <Button
                    variant="oauth"
                    color="blue.500"
                    size="md"
                    isLoading={loading}
                    onClick={() => signInWithGoogle()}
                  >
                    <Image src="/images/GoogleLogo.png" height="30px" mr={4} />
                    Continue with Google
                  </Button>
                  <Text fontSize="xs" textAlign="center" mt={4}>
                    OR
                  </Text>
                  <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Business Email</FormLabel>
                      <Input id="email" placeholder="email@mybusiness.com" />
                      <FormHelperText>
                        A username is required to create an account.
                      </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input id="username" placeholder="mybusiness" />
                      <FormErrorMessage>
                        Your password is required.
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                      <FormErrorMessage>
                        Your password is required.
                      </FormErrorMessage>
                    </FormControl>
                    <Checkbox defaultChecked>
                      By continuing, you are setting up an account and agreeing
                      to our User Agreement and acknowledge that you understand
                      our Privacy Policy.
                    </Checkbox>
                  </Stack>
                  <Stack spacing={4} mt={8}>
                    <Flex justifyContent="space-between">
                      <Button
                        width="200px"
                        variant="outline"
                        color="blue.500"
                        size="md"
                        isLoading={loading}
                        onClick={() => signInWithGoogle()}
                      >
                        Sign Up
                      </Button>
                    </Flex>
                    <Flex textAlign="center">
                      Already have an account?{" "}
                      <Button
                        height='30px'
                        width="100px"
                        variant="oauth"
                        
                        color="red.500"
                        size="md"
                        isLoading={loading}
                        onClick={() => signInWithGoogle()}
                      >
                        LogIn
                      </Button>
                    </Flex>
                  </Stack>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default premium;
