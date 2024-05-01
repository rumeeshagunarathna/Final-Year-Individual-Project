// import React, { useState } from "react";
// import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";

// import { IoIosStarHalf } from "react-icons/io";
// import { useRouter } from "next/router";

// const PersonalHome: React.FC = () => {
//   const [open, setOpen] = useState(false);
//       const router = useRouter();

//   const handleAdvertisehere = () => {
//     router.push("/advertise");
//   };

//   const [liked, setLiked] = useState(false);

//   return (
//     <>

//       <Flex
//         direction="column"
//         bg="white"
//         borderRadius={4}
//         cursor="pointer"
//         border="1px solid"
//         borderColor="gray.300"
//         position="sticky"
//       >
//         {/* <Flex
//           align="flex-end"
//           color="white"
//           p="6px 10px"
//           bg="blue.500"
//           height="34px"
//           borderRadius="4px 4px 0px 0px"
//           fontWeight={600}
//           bgImage="url(/images/redditPersonalHome.png)"
//           backgroundSize="cover"
//         ></Flex> */}
//         <Flex direction="column" p="12px">
//           <Flex align="center" mb={2}>
//             <Icon as={IoIosStarHalf} fontSize={40} color="yellow.400" mr={2} />
//             <Text fontWeight={600}>Advertisments</Text>
//           </Flex>
//           <Stack spacing={3}>
//                                 <Text fontSize="9pt">Advertise on SocialSphere</Text>

//             <Button height="30px" onClick={handleAdvertisehere}>
//               Go to Advertise page{" "}
//             </Button>

//           </Stack>
//         </Flex>
//       </Flex>
//     </>
//   );
// };
// export default PersonalHome;







// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Flex,
//   Icon,
//   Stack,
//   Text,
//   Image,
//   Box,
//   Center,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { IoIosStarHalf } from "react-icons/io";
// import { useRouter } from "next/router";
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from "../../firebase/clientApp";

// interface Advertise {
//   id: string;
//   imageUrl: string;
// }

// const AdvertiseonSS: React.FC = () => {
//   const [advertises, setAdvertises] = useState<Advertise[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchAdvertises = async () => {
//       try {
//         const querySnapshot = await getDocs(
//           collection(firestore, "advertises")
//         );
//         const fetchedAdvertises = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           imageUrl: doc.data().imageUrl,
//         })) as Advertise[];
//         setAdvertises(fetchedAdvertises);
//       } catch (error) {
//         console.error("Error fetching advertises:", error);
//       }
//     };

//     fetchAdvertises();
//   }, []);

//   const handleAdvertisehere = () => {
//     router.push("/advertise");
//   };

//   return (
//     <>
//       <Flex
//         direction="column"
//         bg="white"
//         borderRadius={4}
//         cursor="pointer"
//         border="1px solid"
//         borderColor="gray.300"
//         position="sticky"
//       >
//         <Flex direction="column" p="12px">
//           <Flex align="center" mb={2}>
//             <Icon as={IoIosStarHalf} fontSize={40} color="yellow.400" mr={2} />
//             <Text fontWeight={600}>Advertisements</Text>
//           </Flex>

//           <Stack spacing={3}>
//             <Text fontSize="9pt">Advertise on SocialSphere</Text>
//             <Button height="35px" onClick={handleAdvertisehere}>
//               Go to Advertise page
//             </Button>
//             {/* Display fetched advertise data in columns */}
//             <Center>
//               <Stack direction="column" spacing={6}>
//                 {advertises.map((advertise) => (
//                   <Box
//                     key={advertise.id}
//                     bg={useColorModeValue("white", "gray.900")}
//                     boxShadow={"2xl"}
//                     rounded={"md"}
//                     overflow={"hidden"}
//                   >
//                     <Image
//                       src={advertise.imageUrl}
//                       alt={`Image of ${advertise.id}`}
//                       boxSize="320px"
//                       objectFit="fill"
//                     />
//                   </Box>
//                 ))}
//               </Stack>
//             </Center>
//           </Stack>
//         </Flex>
//       </Flex>
//     </>
//   );
// };

// export default AdvertiseonSS;




import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  Image,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoIosStarHalf } from "react-icons/io";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/clientApp";

interface Advertise {
  id: string;
  imageUrl: string;
}

const AdvertiseonSS: React.FC = () => {
  const [advertises, setAdvertises] = useState<Advertise[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAdvertises = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "advertises")
        );
        const fetchedAdvertises = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          imageUrl: doc.data().imageUrl,
        })) as Advertise[];
        setAdvertises(fetchedAdvertises);
      } catch (error) {
        console.error("Error fetching advertises:", error);
      }
    };

    fetchAdvertises();
  }, []);

  const handleAdvertisehere = () => {
    router.push("/advertise");
  };

  // Extract color mode value outside of map function
  const boxBgColor = useColorModeValue("white", "gray.900");

  return (
    <>
      <Flex
        direction="column"
        bg="white"
        borderRadius={4}
        cursor="pointer"
        border="1px solid"
        borderColor="gray.300"
        position="sticky"
      >
        <Flex direction="column" p="12px">
          <Flex align="center" mb={2}>
            <Icon as={IoIosStarHalf} fontSize={40} color="yellow.400" mr={2} />
            <Text fontWeight={600}>Advertisements</Text>
          </Flex>

          <Stack spacing={3}>
            <Text fontSize="9pt">Advertise on SocialSphere</Text>
            <Button height="35px" onClick={handleAdvertisehere}>
              Go to Advertise page
            </Button>
            {/* Display fetched advertise data in columns */}
            <Center>
              <Stack direction="column" spacing={6}>
                {advertises.map((advertise) => (
                  <Box
                    key={advertise.id}
                    bg={boxBgColor} // Use the extracted color mode value
                    boxShadow={"2xl"}
                    rounded={"md"}
                    overflow={"hidden"}
                  >
                    <Image
                      src={advertise.imageUrl}
                      alt={`Image of ${advertise.id}`}
                      boxSize="320px"
                      objectFit="fill"
                    />
                  </Box>
                ))}
              </Stack>
            </Center>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default AdvertiseonSS;
