import { authModalState } from "../../../atoms/authModalAtoms";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const SignUp: React.FC = () => {
  const setAuthModelState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  //Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    if (error) setError("");
    // if (!signUpForm.email.includes("@")) {
    //   return setError("Please enter a valid email");
    // }
    if (signUpForm.password !== signUpForm.confirmPassword) {
      //set Error
      setError("Password do not match");
      return;
    }

    // form input validation
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // To update the state of the Form
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const createUserDocument = async (user: User) => {
    await addDoc(
      collection(firestore, 'users'),
      JSON.parse(JSON.stringify(user))
    );
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

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

      {/* Confirm Password */}
      <Input
        required
        name="confirmPassword"
        placeholder="Confirm Password"
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

      {/* ERROR message*/}
      {(error || userError) && (
          <Text textAlign="center" mt={2} fontSize="10pt" color="red">
            {error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
          </Text>
        )}

      <Button
        type="submit"
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        isLoading={loading}
      >
        Sign Up
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Have an account already?</Text>
        <Text
          color="green.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModelState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          {" "}
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
