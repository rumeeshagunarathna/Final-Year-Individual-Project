import { ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
  Text,
  Link,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";

import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import { auth } from "../../../firebase/clientApp";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtoms";
import { communityState } from "@/atoms/communitiesAtom";
import { useRouter } from "next/router";
import { IoMdSettings } from "react-icons/io";
import { FcAdvertising, FcRules } from "react-icons/fc";
import { GiCheckedShield } from "react-icons/gi";


type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const router = useRouter(); // Initialize the useRouter hook
  //const resetCommunityState = useResetRecoilState(communityState);
  const setAuthModalState = useSetRecoilState(authModalState);

  const goToProfilePage = () => {
    router.push("/profile"); // Navigate to the profile page
  };
  const goToSettingsPage = () => {
    router.push("/settings"); 
  };
const goToPremiumPage = () => {
  router.push("/premium"); 
};
  const goToAdvertisePage = () => {
    router.push("/advertise");
  };
  const goToRulesPage = () => {
    router.push("/rules");
  };
  const goToHomePage = () => {
    router.push("/home");
  };


  const logout = async () => {
    await signOut(auth);
    //resetCommunityState();
    //clear the community state
  };

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "gray.200",
        }}
        _focus={{
          outline: "gray.300",
          border: "0.5px solid",
          borderColor: "gray.500",
        }}
        _placeholder={{ color: "gray.500" }}
        height="50px"
        bg="gray.200"
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon fontSize={24} mr={1} color={"black"} as={IoIosStarHalf} />
                <Flex
                  direction="column"
                  display={{ base: "none", lg: "flex" }}
                  fontSize={"8pt"}
                  align="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700} color="black" fontSize={15}>
                    {user?.displayName || user.email?.split("@")[0]}
                  </Text>
                  <Flex>
                    <Icon as={IoIosStarHalf} color="brand.100" mr={1} />
                    <Text color="black">Anonymous</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color="black" mr={1} as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToHomePage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
                  color="red.500"
                  as={ArrowLeftIcon}
                  onClick={goToHomePage}
                />{" "}
                Home
              </Flex>
            </MenuItem>
            <MenuDivider />

            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToProfilePage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
                  color="yellow.500"
                  as={CgProfile}
                  onClick={goToProfilePage}
                />{" "}
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />

            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToSettingsPage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
                  color="green.500"
                  as={IoMdSettings}
                  onClick={goToSettingsPage}
                />{" "}
                Settings
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToAdvertisePage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
                  as={FcAdvertising}
                  onClick={goToAdvertisePage}
                />{" "}
                Advertise
              </Flex>
            </MenuItem>
            <MenuDivider />

            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToPremiumPage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
                  as={GiCheckedShield}
                  color="green.500"
                  onClick={goToPremiumPage}
                />{" "}
                Premium
              </Flex>
            </MenuItem>

            <MenuDivider />

            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToRulesPage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
                  color="yellow.500"
                  as={FcRules}
                  onClick={goToRulesPage}
                />{" "}
                Rules
              </Flex>
            </MenuItem>
            <MenuDivider />

            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              mb={4}
              color="red.500"
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={logout}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} /> Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setAuthModalState({ open: true, view: "login" })}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} /> Log In / Sign
                Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
