import { authModalState } from '../../../atoms/authModalAtoms';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';



const AuthButtons: React.FC = () => {
      const setAuthModalState = useSetRecoilState(authModalState);
      
      return (
        <>
          <Button
            variant="outline"
            color="black"
            bg="white"
            height="30px"
            display={{ base: "none", sm: "flex" }}
            width={{ base: "70px", md: "110px" }}
            mr={2}
            onClick={() => setAuthModalState({ open: true, view: "login" })}
          >
            LogIn
          </Button>
          <Button
            height="30px"
            color="black"
            bg="white"
            display={{ base: "none", sm: "flex" }}
            width={{ base: "70px", md: "110px" }}
            mr={2}
            onClick={() => setAuthModalState({ open: true, view: "signup" })}
          >
            {" "}
            SignUp
          </Button>
        </>
      );
};
export default AuthButtons;