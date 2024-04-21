import React from 'react';
//import styles from "./premium.module.css";
import {
  Box,
  Heading,
  Text,
  Stack,
  Grid,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";

const premium = () => {
    
  const bgColor = useColorModeValue("gray.100", "gray.900");
  return (
    <Box bg={bgColor} paddingY={12} height="80%">
      <Box maxWidth="7xl" margin="0 auto" height="12xl">
        <Stack spacing={8}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Heading as="h1" size="lg" fontWeight="bold">
                Help support Reddit and get VIP treatment and exclusive access.
              </Heading>
              <Text fontSize="xl" mt={4}>
                Subscriptions automatically renew.
              </Text>
              <Stack mt={6} spacing={2} direction="row">
                <Link href="/signup" variant="primary">
                  Join Reddit Premium Today
                </Link>
                <Link href="/features" variant="outline">
                  See all features
                </Link>
              </Stack>
            </Box>
            <Box>
              <Image
                src="[REPLACE_WITH_YOUR_IMAGE_URL]"
                alt="Reddit Premium benefits"
              />
            </Box>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default premium;
