import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./Searchinput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";

// type NavbarProps = {

// };

const Navbar: React.FC = () => {
      const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="50px" padding="6px 12px" justify={{ md: "space-between" }}>
      <Flex align="center" width={{base: "40px", md: "auto"}} mr={{ base: 0, md: 2}}>
        <Image src="/images/Logo.jpg" height="30px" />
        <Image
          src="/images/Logo name.png"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />

      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
