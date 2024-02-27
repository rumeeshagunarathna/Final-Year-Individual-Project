import { Timestamp } from "firebase/firestore";
import React from "react";
import moment from "moment";
import { FaReddit } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { Box, Flex, Icon, Spinner, Stack, Text } from "@chakra-ui/react";

export type Comment = {
  id: string;
  creatorId: string;
  creatorDisplayText: string;
  communityId: string;
  postId: string;
  postTitle: string;
  text: string;
  createdAt: Timestamp;
};

type CummentItemProps = {
  comment: Comment;
  onDeleteComment: (comment: Comment) => void;
  loadingDelete: boolean;
  userId: string;
};

const CummentItem: React.FC<CummentItemProps> = ({
  comment,
  onDeleteComment,
  loadingDelete,
  userId,
}) => {
  return (
    <Flex>
      <Box mr={2}>
        <Icon as={IoIosStarHalf} fontSize={30} color="gray.300" />
      </Box>
      <Stack spacing={1}>
        <Stack direction="row" align="center" fontSize="8pt">
          <Text
            fontWeight={700}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {comment.creatorDisplayText}
          </Text>

          <Text color="gray.600">
            {moment(new Date(comment.createdAt.seconds * 1000)).fromNow()}
          </Text>
          {loadingDelete && <Spinner size="sm" />}
        </Stack>
        <Text fontSize="10pt">{comment.text}</Text>
        <Stack
          direction="row"
          align="center"
          cursor="pointer"
          //fontWeight={600}
          color="gray.500"
        >
          <Icon as={IoArrowUpCircleOutline} />
          <Icon as={IoArrowDownCircleOutline} />
          {userId === comment.creatorId && (
            <>
              <Text fontSize="9pt" _hover={{ color: "blue.500" }}>
                Edit
              </Text>
              <Text
                fontSize="9pt"
                _hover={{ color: "blue.500" }}
                onClick={() => onDeleteComment(comment)}
              >
                Delete
              </Text>
            </>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
};
export default CummentItem;
