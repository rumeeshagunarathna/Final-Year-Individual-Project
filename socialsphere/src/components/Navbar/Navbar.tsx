import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./Searchinput";
import RightContent from "./RightContent/RightContent";

// type NavbarProps = {

// };

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="50px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/Logo.jpg" height="30px" />
        <Image
          src="/images/Logo name.png"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>

      <SearchInput />
      {/* <Directory /> */}
      <RightContent />
    </Flex>
  );
};
export default Navbar;
