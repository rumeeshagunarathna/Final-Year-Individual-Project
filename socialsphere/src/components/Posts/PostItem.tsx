import { Post } from "../../atoms/postsAtom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot, BsFlag } from "react-icons/bs";
//import { ShareSocial } from "react-share-social";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TelegramIcon,
  TelegramShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  LinkedinIcon,
  PinterestIcon,
} from "react-share";

import { IoIosStarHalf } from "react-icons/io";

import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import React, { useEffect, useState } from "react";
import {
  
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Spinner,
  Stack,
  Text,
  useDisclosure,
  
} from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiFlag2Line } from "react-icons/ri";
import { title } from "process";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    post: Post,
    vote: number,
    communityId: string
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
  homePage?: boolean;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const router = useRouter();

  const singlePostPage = !onSelectPost;

  const [error, setError] = useState(false);

  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();

    setLoadingDelete(true);
    try {
      const success = await onDeletePost(post);

      if (!success) {
        throw new Error("Failed to delete the post");
      }
      console.log("Post was successfully deleted");

      if (singlePostPage) {
        router.push(`/s/${post.communityId}`);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoadingDelete(false);
  };

  const goToReportPage = () => {
    router.push("/report"); // Navigate to the report page

  };


  //const { isOpen, onOpen, onClose } = useDisclosure();

const {
  isOpen: isShareModalOpen,
  onOpen: onShareModalOpen,
  onClose: onShareModalClose,
} = useDisclosure();
const {
  isOpen: isReportModalOpen,
  onOpen: onReportModalOpen,
  onClose: onReportModalClose,
} = useDisclosure();




  const finalRef = React.useRef(null);


  const [isToastOpen, setIsToastOpen] = useState(false);
  const handleIconClick = () => {
    // Open the toast
    setIsToastOpen(true);
    // Optionally, you can use the `toast` function to customize the toast message
    toast("Saved!", { position: "top-center" });
  };
  
  return (
    <Flex
      border="1px solid"
      bg="white"
      borderColor={singlePostPage ? "white" : "gray.300"}
      borderRadius={singlePostPage ? "4px 4px 0px 0px" : "4px"}
      _hover={{ borderColor: singlePostPage ? "none" : "gray.500" }}
      cursor={singlePostPage ? "unset" : "pointer"}
      onClick={() => onSelectPost && onSelectPost(post)}
    >
      <Flex
        direction="column"
        align="center"
        bg={singlePostPage ? "none" : "gray.100"}
        p={2}
        borderRadius={singlePostPage ? "0" : "3px 0px 0px 3px"}
        width="40px"
      >
        <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={
            singlePostPage
              ? userVoteValue === 1
                ? "yellow.500"
                : "gray.400"
              : userVoteValue === 1
              ? "yellow.500"
              : "gray.300"
          }
          fontSize={27}
          cursor="pointer"
          onClick={(event) => onVote(event, post, 1, post.communityId)}
        />
        <Text fontSize="11pt">{post.voteStatus} </Text>
        <Icon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={
            singlePostPage
              ? userVoteValue === -1
                ? "blue.300"
                : "gray.400"
              : userVoteValue === -1
              ? "blue.300"
              : "gray.300"
          }
          fontSize={27}
          cursor="pointer"
          onClick={(event) => onVote(event, post, -1, post.communityId)}
        />
      </Flex>
      <Flex direction="column" width="100%">
        {error && (
          <Alert status="error">
            <AlertIcon />
            <Text mr={2}>{error}</Text>
          </Alert>
        )}
        <Stack spacing={1} p="10px">
          <Stack
            direction="row"
            spacing={0.6}
            align="center"
            fontSize="10pt"
            //color="white"
          >
            {/* Home page Check */}
            {homePage && (
              <>
                {post.communityImageURL ? (
                  <Image
                    src={post.communityImageURL}
                    borderRadius="full"
                    boxSize="29px"
                    mr={2}
                  />
                ) : (
                  <Icon
                    as={IoIosStarHalf}
                    fontSize="20pt"
                    mr={1}
                    color="green.300"
                  />
                )}
                <Link href={`s/${post.communityId}`}>
                  <Text
                    color="blue.500"
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                    onClick={(event) => event.stopPropagation()}
                  >{`s/${post.communityId}`}</Text>
                </Link>
                <Icon as={BsDot} color={"gray.500"} fontSize={8} />
              </>
            )}
            {/* Home page Check */}

            <Text>
              Posted by
              <Icon as={BsDot} color="gray.500" fontSize={8} />
              <Icon as={BsDot} color="gray.500" fontSize={8} />
              user/{post.creatorDisplayName}{" "}
              <Icon as={BsDot} color="gray.500" fontSize={8} />
              {moment(new Date(post.createdAt?.seconds * 1000)).fromNow()}
            </Text>
          </Stack>
          <Text fontSize="12pt" fontWeight={600}>
            {post.title}
          </Text>
          <Text fontSize="10pt">{post.body}</Text>
          {post.imageURL && (
            <Flex justify="center" align="center" p={2}>
              {loadingImage && (
                <Skeleton height="200px" width="100%" borderRadius={4} />
              )}
              <Image
                src={post.imageURL}
                maxHeight="460px"
                alt="Post Image"
                display={loadingImage ? "none" : "unset"}
                onLoad={() => setLoadingImage(false)}
              ></Image>
            </Flex>
          )}
        </Stack>
        <Flex ml={1} mb={0.5}>
          {/* icon 1 */}
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} onClick={handleIconClick} />
            <ToastContainer />
            <Text fontSize="9pt">Save</Text>
          </Flex>

          {/* icon 2 */}
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
          >
            <Flex onClick={onShareModalOpen}>
              <Icon as={IoArrowRedoOutline} mr={2} />
              <Text fontSize="9pt">Share</Text>
            </Flex>
            <Modal
              blockScrollOnMount={false}
              isOpen={isShareModalOpen}
              onClose={onShareModalClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Share</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="bold" mb="1rem">
                    Share from here
                  </Text>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <FacebookShareButton url="https://example.com">
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton url="https://example.com">
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton url="https://example.com">
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <EmailShareButton url="https://example.com">
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                    <TelegramShareButton url="https://example.com">
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <LinkedinShareButton url="https://example.com">
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                </ModalBody>

                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          {/* icon 3 */}
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">{post.numberOfComments}</Text>
          </Flex>

          {/* icon 4 -> delete icon (only creater of the post can delete the post) */}

          {userIsCreator && (
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.100" }}
              cursor="pointer"
              onClick={handleDelete}
            >
              {loadingDelete ? (
                <Spinner size="sm" />
              ) : (
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
              )}
            </Flex>
          )}

          {/* icon 5 */}
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
            // onClick={goToReportPage}
            onClick={onReportModalOpen}
          >
            <Icon as={RiFlag2Line} mr={2} />
            <Text fontSize="9pt">report</Text>
          </Flex>
          <Modal
            blockScrollOnMount={false}
            isOpen={isReportModalOpen}
            onClose={onReportModalClose}
          >
            <ModalOverlay />
            <ModalContent style={{ width: "1000px" }}>
              <ModalHeader>Report</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  Thanks for looking out for yourself and your fellow members by
                  reporting things that break the rules. Let us know what&aposs
                  happening, and we&aposll look into it.{" "}
                </Text>

                <Box
                  ref={finalRef}
                  tabIndex={-1}
                  aria-label="Focus moved to this box"
                >
                  Go to the Report page to make a report/complaint.
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" onClick={goToReportPage}>
                  Go to report page
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PostItem;
