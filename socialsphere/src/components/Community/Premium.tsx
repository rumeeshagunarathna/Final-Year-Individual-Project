// import React from "react";
// import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
// import { GiCheckedShield } from "react-icons/gi";
// import { useRouter } from "next/router";

// const Premium: React.FC = () => {
//       const router = useRouter();
//   return (
//     <Flex
//       direction="column"
//       bg="white"
//       borderRadius={4}
//       cursor="pointer"
//       p="12px"
//       border="1px solid"
//       borderColor="gray.300"
//     >
//       <Flex mb={2}>
//         <Icon as={GiCheckedShield} fontSize={26} color="green.500" mt={2} />
//         <Stack spacing={1} fontSize="9pt" pl={2}>
//           <Text fontWeight={600}>Try Premium</Text>
//           <Text>The best experience, with a verified account</Text>
//         </Stack>
//       </Flex>
//       <Button height="30px" bg="green.400">
//         Try Now
//       </Button>
//     </Flex>
//   );
// };
// export default Premium;



import React, { useState } from "react";
import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";
import { useRouter } from "next/router";

const Premium: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleTryNowClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/premium");
    }, 2000);
  };

  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex mb={2}>
        <Icon as={GiCheckedShield} fontSize={26} color="green.500" mt={2} />
        <Stack spacing={1} fontSize="10pt" pl={2} mb={2}>
          <Text fontWeight={600} mb={2} fontSize="11pt">
            Try Premium
          </Text>
          <Text>The best experience, with exclusive features.</Text>
        </Stack>
      </Flex>
      <Button
        height="30px"
        bg="green.400"
        onClick={handleTryNowClick}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Try Now"}
      </Button>
    </Flex>
  );
};

export default Premium;
