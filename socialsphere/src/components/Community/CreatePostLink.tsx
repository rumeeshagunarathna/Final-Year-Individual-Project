import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsLink45Deg } from "react-icons/bs";

import { IoIosStarHalf } from "react-icons/io";

import { IoImageOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtoms";
import { auth } from "../../firebase/clientApp";
import useDirectory from "../../hooks/useDirectory";
import CreateCommunityModal from "../Modal/CreateCommunity/CreateCommunityModal";
//import useDirectory from "../../hooks/useDirectory";




const CreatePostLink: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  
  const { toggleMenuOpen } = useDirectory();

  const onClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }
    const { communityId } = router.query;
    
    if (communityId) {
      router.push(`/s/${communityId}/submit`);
      return;
    }
    //if not open directory menu
    toggleMenuOpen();
    
  };

  const handleCreateCommunity = () => {
    setOpen(true);
  };
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Flex direction="row" justify="space-between">
        <Flex
          justify="space-between"
          align="center"
          bg="gray.300"
          height="56px"
          width="48%"
          borderRadius={4}
          border="1px solid"
          borderColor="gray.300"
          p={2}
          mb={4}
        >
          <Icon as={IoIosStarHalf} fontSize={36} color="gray.400" mr={4} />
          <Input
            placeholder="Create your post"
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
            borderColor="gray.200"
            height="36px"
            borderRadius={4}
            mr={4}
            onClick={onClick}
          />
          {/* <Icon
        as={IoImageOutline}
        fontSize={24}
        mr={4}
        color="gray.400"
        cursor="pointer"
      /> */}
          {/* <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" /> */}
          <Icon
            as={IoIosStarHalf}
            fontSize={36}
            color="gray.400"
            mr={4}
            cursor="pointer"
          />
        </Flex>
        {/* Second Create your post */}
        <Flex
          justify="space-between"
          align="center"
          bg="gray.300"
          height="56px"
          width="48%"
          borderRadius={4}
          border="1px solid"
          borderColor="gray.300"
          p={2}
          mb={4}
        >
          <Icon as={IoIosStarHalf} fontSize={36} color="gray.400" mr={4} />
          <Input
            placeholder="Create a community"
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "yellow.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "yellow.500",
            }}
            bg="gray.50"
            borderColor="gray.200"
            height="36px"
            borderRadius={4}
            mr={4}
            onClick={handleCreateCommunity}
          />
          {/* <Icon
            as={IoImageOutline}
            fontSize={24}
            mr={4}
            color="gray.400"
            cursor="pointer"
          /> */}
          {/* <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" /> */}
          <Icon
            as={IoIosStarHalf}
            fontSize={36}
            color="gray.400"
            mr={4}
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </>
  );
};
export default CreatePostLink;
