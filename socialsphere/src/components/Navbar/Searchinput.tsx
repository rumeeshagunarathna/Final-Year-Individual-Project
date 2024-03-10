import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type SearchinputProps = {
  user?: User | null;
};

const Searchinput: React.FC<SearchinputProps> = ({ user}) => {
  return (
    <Flex flexGrow={1} maxWidth={user ? "auto" : "600px"} mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.700" mb={1} mt={3}/>
        </InputLeftElement>
        

        <Input
          placeholder="Search Here..."
          fontSize="10pt"
          _placeholder={{ color: "gray.700" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "white",
          }}
          _focus={{
            outline: "none",
            border: "0.5px solid",
            borderColor: "gray.500",
          }}
          height="50px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default Searchinput;
