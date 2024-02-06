import { authModalState } from '@/atoms/authModalAtoms';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC = () => {
      const [modalState, setModalState] = useRecoilState(authModalState);

      const handleClose = () => {
            setModalState(prev => ({
                  ...prev,
                  open: false,
            }));
      };
      return (
        <>
          <Modal isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center">
                {modalState.view === "login" && "LogIn"}
                {modalState.view === "signup" && "SignUp"}
                {modalState.view === "resetPassword" && "Reset Password"}
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                 pb={6}>
                  
                   
                <Flex direction="column" align="center" justify="center" width="70%"></Flex>                  
              
                                    
                                    <OAuthButtons />
                                    <Text color="gray.500" fontWeight={600}>OR</Text>
                                    <AuthInputs />
                                    {/* <ResetPassword/> */}
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      );
};
export default AuthModal;