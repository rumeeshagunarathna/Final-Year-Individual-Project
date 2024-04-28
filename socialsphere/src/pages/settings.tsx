import React, { useEffect, useState } from "react";

import {
  Box,
  Heading,
  Text,
  Divider,
  Grid,
  GridItem,
  List,
  ListItem,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Stack,
  Flex,
  Container,
  Button,
  VStack,
  useBreakpointValue,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import report from "./report";
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, firestore } from "../firebase/clientApp";
import { communityState } from "@/atoms/communitiesAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";


import { useRouter } from "next/router";
import { ChevronDownIcon } from "@chakra-ui/icons";


const settings = () => {

const router = useRouter();
const [isLoading, setIsLoading] = useState(false);

const handleTryNowClick = () => {
  setIsLoading(true);
  setTimeout(() => {
    router.push("/premium");
  }, 2000);
};

  const [userData, setUserData] = useState<any>(null);
  const [user] = useAuthState(auth);
  const [communityData, setCommunityData] = useRecoilState(communityState);
  const [communitySnippetsData, setCommunitySnippetsData] = useState<any[]>([]);
  const [communityMembersData, setCommunityMembersData] = useState<any[]>([]);
  const [userPosts, setUserPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());

            // Fetch user posts data
            const userPostsQuery = query(
              collection(firestore, "posts"),
              orderBy("createdAt", "desc"),
              where("creatorId", "==", user.uid)
            );
            const userPostsSnapshot = await getDocs(userPostsQuery);
            const userPostsData = userPostsSnapshot.docs.map((doc) =>
              doc.data()
            );
            setUserPosts(userPostsData);

            // Fetch other community-related data (snippets and members)
            if (userData) {
              const communitySnippetsRef = collection(
                userDoc.ref,
                "communitySnippets"
              );
              const communitySnippetsSnapshot = await getDocs(
                communitySnippetsRef
              );
              const communitySnippetsData = communitySnippetsSnapshot.docs.map(
                (doc) => doc.data()
              );
              setCommunitySnippetsData(communitySnippetsData);

              const communityIds = communitySnippetsData.map(
                (snippet) => snippet.communityId
              );
              const communityMembersPromises = communityIds.map(
                async (communityId) => {
                  const communityDocRef = doc(
                    firestore,
                    "communities",
                    communityId
                  );
                  const communityDoc = await getDoc(communityDocRef);
                  return {
                    id: communityId,
                    numberOfMembers: communityDoc.exists()
                      ? communityDoc.data().numberOfMembers
                      : 0,
                  };
                }
              );
              const communityMembersData = await Promise.all(
                communityMembersPromises
              );
              setCommunityMembersData(communityMembersData);
            }
          } else {
            console.log("User document not found");
          }
        } else {
          console.log("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user, userData]); // Include userData in the dependency array

  const handleDelete = async (id: string) => {
    try {
      if (user) {
        await deleteDoc(doc(firestore, "users", id));
        setUserData(null); // or setUserData({}) depending on how you handle empty user data
      } else {
        console.error("User not authenticated");
      }
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };


  return (
    <>
      <Flex
        w={"full"}
        h={"30vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Settings Page
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <Box p={4} bg="white">
        <Stack>
          <Tabs>
            <TabList>
              <Tab>Account</Tab>
              <Tab>Safety & Privacy</Tab>
              <Tab>Notifications</Tab>
              <Tab>Subscriptions</Tab>
              <Tab>Chat & Messaging</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Heading fontSize={"1xl"} textAlign={"left"} mb={8}>
                  Account Settings
                </Heading>
                <Text fontSize={"xs"} color={"gray.600"} mt={4} mb={4}>
                  ACCOUNT PREFERENCE
                </Text>
                <Divider />
                <Flex align="center" justifyContent="space-between">
                  <Text fontSize={"1X1"} color={"gray.600"} mt={4} mb={4}>
                    Email Address:
                  </Text>
                  <Button
                    color="white"
                    borderColor="blue.500"
                    fontWeight="bold"
                    borderWidth="1px"
                    _hover={{ backgroundColor: "blue.400", color: "white" }}
                    mr={4} // Add margin-right to create space between the button and text
                  >
                    Edit Profile
                  </Button>
                </Flex>
                <Divider />
                <Input type="email" defaultValue={userData?.email || "N/A"} />
                <Divider />
                <Flex align="center" justifyContent="space-between">
                  <Text fontSize={"1X1"} color={"red.600"} mt={4} mb={4}>
                    Delete Account
                  </Text>
                  <Button
                    onClick={() => user?.uid && handleDelete(user.uid)}
                    style={{
                      backgroundColor: "#EF4444", // Red background color
                      borderColor: "#EF4444", // Red border color
                      color: "#FFFFFF", // White text color
                    }}
                    className="py-2 px-4 rounded hover:bg-red-700 text-white font-bold"
                    mt={5}
                    mb={5}
                  >
                    Delete Account
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={"1xl"} textAlign={"left"} mb={8}>
                  Safety & Privacy
                </Heading>
                <Text fontSize={"xs"} color={"gray.600"} mt={4} mb={4}>
                  SAFETY
                </Text>
                <Divider />
                <Flex align="center" justifyContent="space-between">
                  <FormControl mb={2} mt={2}>
                    <FormLabel>People You’ve Blocked </FormLabel>
                    <Text fontSize={"xs"} color={"gray.400"} mt={1} mb={4}>
                      Blocked people can’t send you chat requests or private
                      messages.
                    </Text>

                    <Input
                      required
                      name="name"
                      placeholder="BLOCK NEW USER"
                      type="text"
                    />
                  </FormControl>

                  <Button
                    mb={10}
                    color="white"
                    borderColor="blue.500"
                    fontWeight="bold"
                    borderWidth="1px"
                    _hover={{ backgroundColor: "blue.400", color: "white" }}
                    mr={4} // Add margin-right to create space between the button and text
                  >
                    ADD
                  </Button>
                </Flex>
                {/* <Divider /> */}

                <Flex align="center" justifyContent="space-between">
                  <FormControl mb={2} mt={2}>
                    <FormLabel>Communities You've Muted </FormLabel>
                    <Text fontSize={"xs"} color={"gray.400"} mt={1} mb={4}>
                      Posts from muted communities won't show up in your
                      recommendations.
                    </Text>

                    <Input
                      required
                      name="name"
                      placeholder="MUTE NEW COMMUNITY"
                      type="text"
                    />
                  </FormControl>

                  <Button
                    mb={10}
                    color="white"
                    borderColor="blue.500"
                    fontWeight="bold"
                    borderWidth="1px"
                    _hover={{ backgroundColor: "blue.400", color: "white" }}
                    mr={4} // Add margin-right to create space between the button and text
                  >
                    ADD
                  </Button>
                </Flex>
                <Divider />
              </TabPanel>
              <TabPanel>
                <Heading fontSize={"1xl"} textAlign={"left"} mb={8}>
                  Notifications Settings
                </Heading>
                <Text fontSize={"xs"} color={"gray.600"} mt={4} mb={2}>
                  MESSAGES
                </Text>
                <Divider />
                <FormControl
                  justifyContent="space-between"
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  mt={2}
                  mb={2}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel htmlFor="email-alerts" mb="2" mt={2} flex={1}>
                      Private messages
                    </FormLabel>
                    <Switch id="email-alerts" />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel htmlFor="email-alerts" mb="2" mt={2} flex={1}>
                      Chat messages
                    </FormLabel>
                    <Switch id="email-alerts" />
                  </div>
                </FormControl>
                <Text fontSize={"xs"} color={"gray.600"} mt={6} mb={2}>
                  UPDATES
                </Text>
                <Divider />
                <FormControl
                  justifyContent="space-between"
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  mt={2}
                  mb={2}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel htmlFor="email-alerts" mb="2" mt={2} flex={1}>
                      SocialSphere Announcements
                    </FormLabel>
                    <Switch id="email-alerts" />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel htmlFor="email-alerts" mb="2" mt={2} flex={1}>
                      Advertisements
                    </FormLabel>
                    <Switch id="email-alerts" />
                  </div>
                </FormControl>
                <Divider />
              </TabPanel>
              <TabPanel>
                <Heading fontSize={"1xl"} textAlign={"left"} mb={8}>
                  SocialSphere Premium
                </Heading>
                <Text fontSize={"xs"} color={"gray.600"} mt={3} mb={6}>
                  SocialSphere Premium is a subscription membership that
                  upgrades your account with extra features.
                </Text>
                <Text fontSize={"xs"} color={"gray.600"} mt={4} mb={3}>
                  SUBSCRIPTION STATUS
                </Text>
                <Divider />
                <Text fontSize={"xs"} color={"gray.600"} mt={8} mb={3}>
                  Get SocialSphere Premium and help support SocialSphere.
                </Text>
                <Button
                  height="30px"
                  bg="green.400"
                  onClick={handleTryNowClick}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Get Premium"}
                </Button>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={"1xl"} textAlign={"left"} mb={8}>
                  Chats & Messaging
                </Heading>
                <Text fontSize={"xs"} color={"gray.600"} mt={3} mb={6}>
                  *NOTE-SocialSphere admins can message you even if they’re not
                  approved.
                </Text>
                <FormControl
                  justifyContent="space-between"
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  mt={2}
                  mb={2}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel htmlFor="email-alerts" mb="2" mt={2} flex={1}>
                      Who can send you messages
                    </FormLabel>
                    <Menu>
                      <MenuButton as={FormLabel} id="message-menu">
                        Options
                        <ChevronDownIcon />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Everyone</MenuItem>
                        <MenuItem>Account older than 30 days</MenuItem>
                        <MenuItem>Nobody</MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                  <Divider />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel htmlFor="email-alerts" mb="2" mt={2} flex={1}>
                      Who can send you private chat
                    </FormLabel>
                    <Menu>
                      <MenuButton as={FormLabel} id="message-menu">
                        Options
                        <ChevronDownIcon />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Everyone</MenuItem>
                        <MenuItem>Account older than 30 days</MenuItem>
                        <MenuItem>Nobody</MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </FormControl>
                <Divider />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
    </>
  );
};

export default settings;
