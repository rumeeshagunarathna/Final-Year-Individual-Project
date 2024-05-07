

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
  useColorModeValue,
  Avatar,
  AvatarGroup,
  Container,
  Heading,
  IconProps,
  Input,
  SimpleGrid,
  useBreakpointValue,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { IoIosStarHalf } from "react-icons/io";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";

interface Advertise {
  id: string;
  publish: string;
  discription: string;
  email: string;
  cost: number;
  phone: number;
  imageUrl: string;
}

const Advertise = () => {
  const [advertises, setAdvertises] = useState<Advertise[]>([]);

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
        width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
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

  const [liked, setLiked] = useState(false);

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
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    size={useBreakpointValue({ base: "md", md: "lg" })}
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
                minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
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
        //bg={useColorModeValue("gray.50", "gray.900")}
        //color={useColorModeValue("gray.700", "gray.200")}
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

export default Advertise;
