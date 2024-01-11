import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Reddit_Lockup_OnDark.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <HStack
      justifyContent="center"
      px="25px"
      bg="gray.700"
      marginBottom="0.6rem"
    >
      <Link to="/">
        <Image
          src={Logo}
          alt="Reddit logo"
          boxSize="6rem"
          margin="1rem"
          height
        />
      </Link>
    </HStack>
  );
}

export default Navbar;
