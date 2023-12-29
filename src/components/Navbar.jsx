import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "../assets/Reddit_Lockup_OnDark.svg";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <HStack justifyContent="space-between" px="25px">
      <Image src={Logo} alt="Reddit logo" boxSize="6.5rem" />
      <InputGroup>
        <Input placeholder="extra small size" />
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
}

export default Navbar;
