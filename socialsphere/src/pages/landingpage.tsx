import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const landingpage = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to My Landing Page
      </Heading>
      <Text fontSize="xl" mb={8}>
        This is a simple landing page built with Next.js and Chakra UI.
      </Text>
      <Link href="/home" passHref>
        <Button colorScheme="blue">Get Started</Button>
      </Link>
    </Box>
  );
};

export default landingpage;
