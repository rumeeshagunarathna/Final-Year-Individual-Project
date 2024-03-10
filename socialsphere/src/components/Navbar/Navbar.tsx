import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./Searchinput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";
import useDirectory from "../../hooks/useDirectory";
import { defaultMenuItem } from "../../atoms/directoryMenuAtom";

// type NavbarProps = {

// };

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const {onSelectMenuItem} = useDirectory();

  return (
    <Flex
      bg="black"
      height="100px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
        onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
        <Image src="/images/logo3.png" height="50px" />
        {/* <Image
          src="/images/Logo name.png"
          height="46px"
          display={{ base: "none", md: "unset" }}
        /> */}
        <Text
          as="i"
          fontSize="35px"
          height="46px"
          color="blue.400"
          display={{ base: "none", md: "unset" }}
        >
          Social
        </Text>
        <Text
          as="i"
          fontSize="35px"
          height="46px"
          color="yellow.500"
          display={{ base: "none", md: "unset" }}
        >
          Sphere
        </Text>
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />

      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
