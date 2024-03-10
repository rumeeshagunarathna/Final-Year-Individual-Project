import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";
import useDirectory from "../../../hooks/useDirectory";

const UserMenu: React.FC = () => {
  const { directoryState, toggleMenuOpen } = useDirectory();

  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        mt={5}
        ml={{ base: 0, md: 2 }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "white",
        }}
        _focus={{
          outline: "white",
          border: "0.5px solid",
          borderColor: "gray.500",
        }}
        _placeholder={{ color: "gray.500" }}
        height='50px'
        bg="gray.50"
        onClick={toggleMenuOpen}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                src={directoryState.selectedMenuItem.imageURL}
                borderRadius="full"
                boxSize="35px"
                mr={2}
              />
            ) : (
              <Icon
                fontSize={25}
                mr={{ base: 1, md: 2 }}
                as={directoryState.selectedMenuItem.icon}
                color={directoryState.selectedMenuItem.iconColor}
              />
            )}

            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize="10pt" color="black">
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon color="black" />
        </Flex>
      </MenuButton>

      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
