"use client";

import {
  Flex,
  Container,
  
  Stack,
  Text,
 
  Icon,
  IconProps,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Button, CircularProgress, Heading, Link } from "@chakra-ui/react"; // Import Chakra UI components
import React from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform any necessary tasks (e.g., data loading, checks)
    // Once done, redirect to the home page
    setTimeout(() => {
      router.push("/landingpage"); // Replace '/home' with the path to your home page
    }, 3000); // Redirect after 3 seconds (adjust as needed)
  }, []);

  return (
    <Box textAlign="center" mt={20}>
      <CircularProgress isIndeterminate color="blue.500" />
      <Heading as="h1" size="xl" mt={4}>
        Loading...
      </Heading>
      <Link href="/home">
        
      </Link>
    </Box>
  );
};

export default HomePage;
