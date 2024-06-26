import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { communityState } from "../../../atoms/communitiesAtom";
import MenuListItem from "./MenuListItem";

import { IoIosStarHalf } from "react-icons/io";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const mySnippets = useRecoilValue(communityState).mySnippets;

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          MODERATING
        </Text>

        {mySnippets
          .filter((snippet) => snippet.isModerator)
          .map((snippet) => (
            <MenuListItem
              key={snippet.communityId}
              icon={IoIosStarHalf}
              displayText={`s/${snippet.communityId}`}
              link={`/s/${snippet.communityId}`}
              iconColor="yellow.500"
              imageURL={snippet.imageURL}
            />
          ))}
      </Box>
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          MY COMMUNITIES
        </Text>

        <MenuItem
          width="100%"
          fontSize={"10pt"}
          _hover={{ bg: "gray.100" }}
          onClick={() => setOpen(true)}
        >
          <Flex align="center">
            <Icon fontSize={20} mr={2} as={GrAdd} />
            Create Community
          </Flex>
        </MenuItem>
        {mySnippets.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={IoIosStarHalf}
            displayText={`s/${snippet.communityId}`}
            link={`/s/${snippet.communityId}`}
            iconColor="yellow.500"
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
    </>
  );
};
export default Communities;
