import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModel from '../../Modal/Auth/AuthModal'; 

type RightContentProps = {
      //user:any;
};

const RightContent: React.FC<RightContentProps> = () => {
      
      return (
            <>
                  <AuthModel />
                  <Flex justify="center" align="center">
                        <AuthButtons />
                  </Flex>
            </>
      );
};
export default RightContent;