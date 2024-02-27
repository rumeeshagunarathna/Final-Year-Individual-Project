import { ChevronDownIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { FaRedditSquare } from "react-icons/fa";
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
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color={"gray.300"}
                  as={IoIosStarHalf}
                />
                <Flex
                  direction="column"
                  display={{ base: "none", lg: "flex" }}
                  fontSize={"8pt"}
                  align="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user.email?.split("@")[0]}
                  </Text>
                  <Flex>
                    <Icon as={IoIosStarHalf} color="brand.100" mr={1} />
                    <Text color="gray.400">Anonymous</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount} />
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
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={goToProfilePage}
            >
              <Flex align="center">
                <Icon
                  fontSize={20}
                  mr={2}
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
