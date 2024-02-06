import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';


const OAuthButtons:React.FC = () => {
      
      return (
            <Flex direction="column" width="100%" mb={3}>
                  <Button variant="oauth" mb={1}>
                        <Image src="/images/GoogleLogo.png" height="30px" mr={4}/>
                        Continue with Google
                  </Button>
            </Flex>
      )
}
export default OAuthButtons;