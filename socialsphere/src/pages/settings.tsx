import React from "react";

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
} from "@chakra-ui/react";

const ApplicationInfo = () => {
  return (
    <>
      <div>
        <main>
          <Flex
            w={"full"}
            h={"40vh"}
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
          
          <Box p={4}>
            
            <Stack>
              <Tabs>
                <TabList>
                  <Tab>Settings</Tab>
                  <Tab>History</Tab>
                  <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Stack>
                      <Box>
                        <Flex>settings</Flex>
                      </Box>
                    </Stack>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </Box>
        </main>
      </div>
    </>
  );
};

export default ApplicationInfo;
