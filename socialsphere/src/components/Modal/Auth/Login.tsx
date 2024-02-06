import { authModalState } from '@/atoms/authModalAtoms';
import { Button, Flex, Input, Text} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
      
};

const Login: React.FC<LoginProps> = () => {
      const setAuthModelState = useSetRecoilState(authModalState);
      const [loginForm, setLoginForm] = useState({
            email: "",
            password: "",
      });

      //Firebase logic
      const onSubmit = () => { };

      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
            // To update the state of the Form
            setLoginForm(prev => ({
                  ...prev,
                  [event.target.name]: event.target.value,
            }));
      };


      return (
            <form onSubmit={onSubmit}>
                  {/* Email */}
          <Input
            required
            name="email"
            placeholder="Email"
            type="email"
            mb={2}
            onChange={onChange}
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "green.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "green.500",
            }}
            bg="gray.50"
            />
                  
               {/* Password */}
          <Input
            required
            name="password"
            placeholder="Password"
            type="password"
            mb={2}
            onChange={onChange}
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "green.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "green.500",
            }}
            bg="gray.50"
          />

          <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
            Log In
                  </Button>

                  <Flex fontSize="9pt" justifyContent="center">
                        <Text mr={1}>New here?</Text>
                        <Text color="green.500" fontWeight={700} cursor="pointer"
                              onClick={() => setAuthModelState((prev) => ({
                              ...prev,
                              view: "signup",
                        }))
                        }  
                              > Sign Up</Text>
                  </Flex>     
        </form>
      );
};
export default Login;