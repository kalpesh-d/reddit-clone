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
import titleCase from "../utils/titleCase";

const categories = ["Best", "Hot", "Top", "Rising"];

function Catergory() {
  const category = useSelector((state) => state.posts.selectedCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    const action = category.toLowerCase();
    dispatch(setPostsForCategory(action));
  };

  return (
    <HStack spacing={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {titleCase(category)}
        </MenuButton>
        <MenuList>
          {categories.map((category) => (
            <MenuItem
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default Catergory;
