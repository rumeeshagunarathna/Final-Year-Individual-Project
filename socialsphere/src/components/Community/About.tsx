import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Link,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { Community, communityState } from "../../atoms/communitiesAtom";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCakeLine } from "react-icons/ri";
import moment from "moment";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, storage } from "../../firebase/clientApp";
import useSelectFile from "../../hooks/useSelectFile";

import { IoIosStarHalf } from "react-icons/io";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useRecoilValue, useSetRecoilState } from "recoil";

type AboutProps = {
  communityData: Community;
  
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const { selectedFile, setSelectedFile, onSelectFile } = useSelectFile();
  const [uploadingImage, setUploadingImage] = useState(false);
  const setCommunityStateValue = useSetRecoilState(communityState);

  // /// Get the community state from the Recoil state
  // const communityStateValue = useRecoilValue(communityState);

  // // Access the currentCommunity from the communityState
  // const currentCommunity = communityStateValue.currentCommunity;

  // // Access the creatorId property from the currentCommunity object
  // const creatorId = currentCommunity?.creatorId;

  
  console.log("user?.uid:", user?.uid);
  console.log("communityData.creatorId:", communityData.creatorId);
  console.log("Community Data:", communityData); // Log the entire communityData object
  console.log("Creator ID:", communityData.creatorId); // Log the creatorId property

  const onUpdateImage = async () => {
    if (!selectedFile) return;
    setUploadingImage(true);
    try {
      const imageRef = ref(storage, `communities/${communityData.id}/image`);
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(firestore, "communities", communityData.id), {
        imageURL: downloadURL,
      });
      setCommunityStateValue((prev) => ({
        ...prev,
        currentCommunity: {
          ...prev.currentCommunity,
          imageURL: downloadURL,
        } as Community,
      }));
    } catch (error) {
      console.log("onUpdateImage error", error);
    }
    setUploadingImage(false);
  };

  //Online Members
  const [onlineMembers, setOnlineMembers] = useState<number>(0);
  useEffect(() => {
    // Generate a random number between 0 and total members as online members count
    const randomOnlineMembers = Math.floor(
      Math.random() * communityData.numberOfMembers
    );
    setOnlineMembers(randomOnlineMembers);
  }, [communityData.numberOfMembers]);

  return (
    <Box position="sticky" top="14px">
      <Flex
        justify="space-between"
        align="center"
        p={3}
        color="white"
        bg="yellow.500"
        borderRadius="4px 4px 0px 0px"
      >
        <Text fontSize="10pt" fontWeight={700}>
          About Community
        </Text>
        <Icon as={HiOutlineDotsHorizontal} cursor="pointer" />
      </Flex>
      <Flex direction="column" p={3} bg="white" borderRadius="0px 0px 4px 4px">
        <Stack mt={2}>
          <Flex width="100%" p={2} fontSize="10pt" fontWeight={700}>
            <Flex direction="column" flexGrow={1}>
              <Text>{communityData.numberOfMembers?.toLocaleString()}</Text>
              <Text>Members</Text>
            </Flex>
            <Flex direction="column" flexGrow={1}>
              <Text>{onlineMembers}</Text>
              <Text>Online</Text>
            </Flex>
          </Flex>
          <Divider />
          <Flex
            align="center"
            width="100%"
            p={1}
            fontWeight={500}
            fontSize="10pt"
          >
            <Icon as={RiCakeLine} mr={2} fontSize={18} />
            {communityData?.createdAt && (
              <Text>
                Created{" "}
                {moment(
                  new Date(communityData.createdAt!.seconds * 1000)
                ).format("MMM DD, YYYY")}
              </Text>
            )}
          </Flex>

          <Link href={`/s/${router.query.community}/submit`}>
            <Button
              variant="outline"
              mt={3}
              height="35px"
              width="90%"
              ml={4}
              mb={3}
              fontSize="15px"
            >
              Create Post
            </Button>
          </Link>

          {user?.uid === communityData?.creatorId && (
            <>
              <Divider />
              <Stack spacing={1} fontSize="10pt">
                <Text fontWeight={600}>Admin</Text>
                <Flex align="center" justify="space-between">
                  <Text
                    color="blue.500"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                    onClick={() => selectedFileRef.current?.click()}
                  >
                    Change Image
                  </Text>
                  {communityData.imageURL || selectedFile ? (
                    <Image
                      src={selectedFile || communityData.imageURL}
                      borderRadius="full"
                      boxSize="40px"
                      alt="Community Image"
                    />
                  ) : (
                    <Icon
                      as={IoIosStarHalf}
                      fontSize={40}
                      color="yellow.300"
                      mr={2}
                    />
                  )}
                </Flex>
                {selectedFile &&
                  (uploadingImage ? (
                    <Spinner />
                  ) : (
                    <Text cursor="pointer" onClick={onUpdateImage}>
                      Save Changes
                    </Text>
                  ))}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/x-png,image/gif,image/jpeg"
                  hidden
                  ref={selectedFileRef}
                  onChange={onSelectFile}
                />
              </Stack>
            </>
          )}
        </Stack>
      </Flex>
      <Divider/>
      <Box>
        <Flex
          justify="space-between"
          align="center"
          p={3}
          color="white"
          bg="green.500"
          borderRadius="4px 4px 0px 0px"
        >
          {/* <Divider/> */}
          <Text fontSize="10pt" fontWeight={700}>
            Community Rules
          </Text>
          <Icon as={HiOutlineDotsHorizontal} cursor="pointer" />
        </Flex>
        <Flex
          direction="column"
          p={3}
          bg="white"
          borderRadius="0px 0px 4px 4px"
        >
          <Stack mt={2}>
            <Link href={`/rules`}>
              <Button
                variant="outline"
                mt={3}
                height="35px"
                width="90%"
                ml={4}
                mb={3}
                fontSize="15px"
              >
                View Rules
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
export default About;
