import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPostsForCategory } from "../feature/posts/postsSlice";

function Catergory() {
  const category = useSelector((state) => state.posts.selectedCategory);
  const dispatch = useDispatch();

  return (
    <HStack spacing={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {category}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => dispatch(setPostsForCategory("best"))}>
            Best
          </MenuItem>
          <MenuItem onClick={() => dispatch(setPostsForCategory("hot"))}>
            Hot
          </MenuItem>
          <MenuItem onClick={() => dispatch(setPostsForCategory("new"))}>
            New
          </MenuItem>
          <MenuItem onClick={() => dispatch(setPostsForCategory("top"))}>
            Top
          </MenuItem>
          <MenuItem onClick={() => dispatch(setPostsForCategory("rising"))}>
            Rising
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default Catergory;
