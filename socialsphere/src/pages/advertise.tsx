// import PersonalHome from "@/components/Community/PersonalHome";
// import Recommendations from "@/components/Community/Recommendations";
// import SignUp from "@/components/Modal/Auth/SignUp";
// import { Flex,Text,Image, Stack, Heading, Grid, GridItem, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Checkbox, Button, Box, AspectRatio } from "@chakra-ui/react";

// import Link from "next/link";
// import React, { useEffect } from "react";
// import Premium from "./premium";
// import AuthButtons from "@/components/Navbar/RightContent/AuthButtons";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { auth, firestore } from "../firebase/clientApp";
// import { User } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// const advertise: React.FC = () => {

//    const [signInWithGoogle, userCred, loading, error] =
//      useSignInWithGoogle(auth);

//   const createUserDocument = async (user: User) => {
//     const userDocRef = doc(firestore, "users", user.uid);
//     await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
//   };

//   useEffect(() => {
//     if (userCred) {
//       createUserDocument(userCred.user);
//     }
//   }, [userCred]);
//   return (
//     <Flex justify="center" p="16px 0px">
//       <Flex width="100%" justify="center" maxWidth="1270">
//         <Box bg="gray.300" minH="100vh" p={8}>
//           <Image src="/images/logo3.png" height="50px" />

//           <Text
//             as="i"
//             fontSize="35px"
//             height="46px"
//             color="blue.400"
//             display={{ base: "none", md: "unset" }}
//           >
//             Social
//           </Text>
//           <Text
//             as="i"
//             fontSize="35px"
//             height="46px"
//             color="yellow.500"
//             display={{ base: "none", md: "unset" }}
//           >
//             Sphere
//           </Text>
//           {/* <Flex justifyContent="center" alignItems="center" h="100%"> */}
//           <Stack spacing={8} mt={1}>
//             <Flex justifyContent="space-between" alignItems="center">
//               <Heading as="h1" size="lg" color="yellow.600">
//                Business
//               </Heading>
//             </Flex>
//             <Flex justifyContent="center" alignItems="center" h="100%">
//               <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//                 <GridItem colSpan={2}>
//                   <Heading
//                     as="h4"
//                     size="md"
//                     textAlign="center"
//                     color="blue.700"
//                   >
//                     Target your audience
//                   </Heading>
//                   <Text textAlign="center" color="gray.700">
//                     Reach customers where they're most passionate and engaged
//                   </Text>
//                 </GridItem>
//                 <GridItem colSpan={2}>
//                   <Heading
//                     as="h4"
//                     size="md"
//                     textAlign="center"
//                     color="green.700"
//                   >
//                     Meet business goals
//                   </Heading>
//                   <Text textAlign="center" color="gray.700">
//                     Increase brand awareness and drive traffic, conversions, or
//                     app installs
//                   </Text>
//                 </GridItem>
//                 <GridItem colSpan={2}>
//                   <Heading
//                     as="h4"
//                     size="md"
//                     textAlign="center"
//                     color="orange.700"
//                   >
//                     Measure success
//                   </Heading>
//                   <Text textAlign="center" color="gray.700">
//                     Leverage insights to optimize campaigns and drive
//                     conversions
//                   </Text>
//                 </GridItem>
//               </Grid>
//             </Flex>
//             <Stack spacing={4} mt={8}>
//               <Flex justifyContent="center">
//                 <Link href="#">
//                   <Text color="blue.500">Speak with an Ads Expert</Text>
//                 </Link>
//               </Flex>
//               <Text textAlign="center" fontSize="sm" color="yellow.600">
//                 Book your call at T.P: 0112977188
//               </Text>
//             </Stack>
//           </Stack>
//           {/* </Flex> */}
//         </Box>

//         <Flex
//         // direction="row"
//         // width={{ base: "100%", md: "50%" }}
//         // mr={{ base: 0, md: 6 }}
//         >
//           <Box bg="gray.100" minH="100vh" p={8}>
//             <Flex justifyContent="center" alignItems="center" h="100%">
//               <Box
//                 w="full"
//                 maxW="md"
//                 p={4}
//                 borderWidth={1}
//                 borderRadius={8}
//                 boxShadow="lg"
//               >
//                 <Stack spacing={4}>
//                   <Flex
//                     justifyContent="space-between"
//                     alignItems="center"
//                     mb={4}
//                   >
//                     <Heading as="h2" size="md">
//                       Let's get started
//                     </Heading>
//                     <Flex alignItems="center">
//                       <Link href="#">සිංහල</Link>
//                       <Link href="#">English</Link>
//                     </Flex>
//                   </Flex>
//                   {/* <AspectRatio ratio={16 / 9}>
//                     <Image
//                       src="https://i.imgur.com/Pgu5aHr.png"
//                       alt="Google logo"
//                     />
//                   </AspectRatio> */}
//                   <Button
//                     variant="oauth"
//                     color="blue.500"
//                     size="md"
//                     isLoading={loading}
//                     onClick={() => signInWithGoogle()}
//                   >
//                     <Image src="/images/GoogleLogo.png" height="30px" mr={4} />
//                     Continue with Google
//                   </Button>
//                   <Text fontSize="xs" textAlign="center" mt={4}>
//                     OR
//                   </Text>
//                   <Stack spacing={4}>
//                     <FormControl isRequired>
//                       <FormLabel htmlFor="email">Business Email</FormLabel>
//                       <Input id="email" placeholder="email@mybusiness.com" />
//                       <FormHelperText>
//                         A username is required to create an account.
//                       </FormHelperText>
//                     </FormControl>
//                     <FormControl isRequired>
//                       <FormLabel htmlFor="username">Username</FormLabel>
//                       <Input id="username" placeholder="mybusiness" />
//                       <FormErrorMessage>
//                         Your password is required.
//                       </FormErrorMessage>
//                     </FormControl>
//                     <FormControl isRequired>
//                       <FormLabel htmlFor="password">Password</FormLabel>
//                       <Input
//                         id="password"
//                         type="password"
//                         placeholder="Password"
//                       />
//                       <FormErrorMessage>
//                         Your password is required.
//                       </FormErrorMessage>
//                     </FormControl>
//                     <Checkbox defaultChecked>
//                       By continuing, you are setting up an account and agreeing
//                       to our User Agreement and acknowledge that you understand
//                       our Privacy Policy.
//                     </Checkbox>
//                   </Stack>
//                   <Stack spacing={4} mt={8}>
//                     <Flex justifyContent="space-between">
//                       <Button
//                         width="200px"
//                         variant="outline"
//                         color="blue.500"
//                         size="md"
//                         isLoading={loading}
//                         onClick={() => signInWithGoogle()}
//                       >
//                         Sign Up
//                       </Button>
//                     </Flex>
//                     <Flex textAlign="center">
//                       Already have an account?{" "}
//                       <Button
//                         height='30px'
//                         width="100px"
//                         variant="oauth"

//                         color="red.500"
//                         size="md"
//                         isLoading={loading}
//                         onClick={() => signInWithGoogle()}
//                       >
//                         LogIn
//                       </Button>
//                     </Flex>
//                   </Stack>
//                 </Stack>
//               </Box>
//             </Flex>
//           </Box>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };
// export default advertise;

// import { db } from '../app/firebaseConfig'
// import { collection, addDoc } from 'firebase/firestore'
// import React, { useState } from 'react'

// async function addDataToFireStore(name, email, phone, message) {
//   try {
//     const docRef = await addDoc(collection(db, "advertise"), {
//       name: name,
//       email: email,
//       phone: phone,
//       message: message,
//     });
//     console.log("Document written with ID:", docRef.id);
//     return true;
//   } catch (error) {
//     console.error("Error adding document", error);
//     return false;
//   }
// }





import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  Image,
  Box,
  Center,
  Avatar,
  AvatarGroup,
  Container,
  Heading,
  IconProps,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoIosStarHalf } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";

interface Advertise {
  id: string;
  publish: string;
  discription: string;
  email: string;
  cost: number;
  phone: number;
  imageUrl: string;
}

const AdvertiseonSS = () => {
  const [advertises, setAdvertises] = useState<Advertise[]>([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchAdvertises = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "advertises")
        );
        const fetchedAdvertises = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Advertise[];
        setAdvertises(fetchedAdvertises);
      } catch (error) {
        console.error("Error fetching advertises:", error);
      }
    };

    fetchAdvertises();
  }, []);

  const avatars = [
    {
      name: "R F",
      url: "",
    },
    {
      name: "S A",
      url: "",
    },
    {
      name: "K D",
      url: "",
    },
    {
      name: "P S",
      url: "",
    },
    {
      name: "C N",
      url: "",
    },
  ];

  const Blur = (props: IconProps) => {
    return (
      <Icon
        width={{ base: "100%", md: "40vw", lg: "30vw" }}
        zIndex={{ base: -1, md: -1, lg: 0 }}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };

  // Moved useColorModeValue inside the component
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <>
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Target your audience{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                &
              </Text>{" "}
              Meet business goals
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={{ base: "md", md: "lg" }}
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgGradient: "linear(to-bl, red.400,pink.400)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text
                fontFamily={"heading"}
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                +
              </Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontFamily={"heading"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                minWidth={{ base: "44px", md: "60px" }}
                minHeight={{ base: "44px", md: "60px" }}
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, orange.400,yellow.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
              >
                Advertise on SocialSphere
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Reach customers where they&apos;re most passionate and
                engaged,Increase brand awareness and drive traffic, conversions,
                or app installs & Leverage insights to optimize campaigns and
                drive conversions
              </Text>
            </Stack>
            <Divider></Divider>
            <Text mb={2} color={"gray.600"}>
              Speak with an Ads Expert :
            </Text>
            <Text color={"gray.600"}>
              Call +144 567 3769 (Mon-Fri · 9AM-5PM MST · SL only)
            </Text>
            <Divider></Divider>
            <Box as={"form"} mt={10}>
              <Stack spacing={4}></Stack>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>

      <Container
        maxW="container.xl"
        py={10}
        bg={bgColor} // Use bgColor variable
        color={textColor} // Use textColor variable
      >
        <Heading mb={10} textAlign="center">
          Advertisements
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={10}>
          {advertises.map((advertise) => (
            <Box
              key={advertise.id}
              rounded="md"
              overflow="hidden"
              boxShadow={useColorModeValue("md", "dark-lg")}
            >
              <Image
                src={advertise.imageUrl}
                alt={`Image of ${advertise.id}`}
                w="100%"
                h={80}
                objectFit="fill"
              />

              <Box p={4}>
                <Stack>
                  <Text
                    color={"blue.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    Ad.
                  </Text>
                </Stack>
                <Divider></Divider>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {advertise.publish}
                </Text>
                <Divider></Divider>
                <Text fontSize="md" color="gray.600" mb={2}>
                  Rs. {advertise.cost}
                </Text>
                <Text fontSize="md" color="gray.600" mb={2}>
                  Call:{advertise.phone}
                </Text>
                <Divider></Divider>
                <Text fontSize="md" color="gray.600" mb={2}>
                  {advertise.discription}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AdvertiseonSS;
