import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import moment from "moment";

import { IoIosStarHalf } from "react-icons/io";

import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { Box, Button, Flex, Icon, Spinner, Stack, Text, Textarea } from "@chakra-ui/react";
import { RiFlag2Line } from "react-icons/ri";
import router from "next/router";

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


  const goToReportPage = () => {
    router.push("/report"); // Navigate to the report page
  };
  

  const [expanded, setExpanded] = useState(false);
  const [replyText, setReplyText] = useState("");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const handleReply = () => {
    // You can handle the reply action here, for now, let's just log the reply text
    console.log("Reply text:", replyText);
  };

  const handleDelete = () => {
    alert("Delete button clicked!");
    // You can add functionality to delete the comment here
  };
    
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
          fontWeight={600}
          color="gray.500"
        >
          <Icon as={IoArrowUpCircleOutline} />
          <Icon as={IoArrowDownCircleOutline} />

          {/* icon 5 */}
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={RiFlag2Line} mr={2} onClick={goToReportPage} />
            <Text fontSize="9pt" onClick={goToReportPage}>
              report
            </Text>
          </Flex>

          {userId === comment.creatorId && (
            <>
              <Text
                fontSize="9pt"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
                onClick={toggleExpand}
              >
                Reply
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
        {expanded && (
          <Flex direction="column">
            <Textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
              size="sm"
              resize="vertical"
              mb={2}
              fontSize="10pt"
              height="100px"
              width="500px"
              borderRadius={4}
              _placeholder={{ color: "gray.500" }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "black",
              }}
            />
            <Button onClick={handleReply} height="26px" width="60px">
              Send
            </Button>
          </Flex>
        )}
      </Stack>
    </Flex>
  );
};
export default CummentItem;

