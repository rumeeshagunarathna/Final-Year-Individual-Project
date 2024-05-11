import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import router, { useRouter } from "next/router";

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";

const Icons: React.FC = () => {
const router = useRouter();
const hadleChatPage = () => {
  router.push("/indexchat"); // Navigate to the chat page
};

  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        {/* <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex> */}

        {/* <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22} />
        </Flex> */}

        {/* <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex> */}
        {/* <Flex
          display={{ base: "none", md: "flex" }}
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex> */}
      </Flex>

      <>
        <Flex
          mr={1.5}
          ml={1.5}
          mt={1.9}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon
            as={BsChatDots}
            fontSize={20}
            onClick={hadleChatPage}
            data-testid="chat-dots-icon"
          />
        </Flex>

        <Flex
          color={"black"}
          mr={1.5}
          ml={1.5}
          mb={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          {/* <Icon as={IoNotificationsOutline} fontSize={20} /> */}

          {/* <Flex
          display={{ base: "none", md: "flex" }}
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex> */}

          <NovuProvider
            subscriberId={"662bf2d1612e6f34a4f2c576"}
            applicationIdentifier={"UPqPxbqDIEUx"}
          >
            <PopoverNotificationCenter colorScheme={"light"}>
              {({ unseenCount }) => (
                <NotificationBell unseenCount={unseenCount} />
              )}
            </PopoverNotificationCenter>
          </NovuProvider>
        </Flex>
      </>
    </Flex>
  );
};
export default Icons;
