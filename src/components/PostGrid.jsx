import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/posts/postsSlice.js";
import { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Catergory from "./Catergory";
import Skelton from "./Skelton.jsx";
import Posts from "./Posts.jsx";

function PostGrid() {
  const selectedCategory = useSelector((state) => state.posts.selectedCategory);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const postData = useSelector(
    (state) => state.posts.postsByCategory[selectedCategory]?.data?.children
  );

  const dispatch = useDispatch();
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    dispatch(getPosts(`${selectedCategory}`));
  }, [selectedCategory]);

  return (
    <SimpleGrid gap={2} justifyContent="center" mx={2}>
      <Catergory />
      {isLoading && skeletons.map((skelton) => <Skelton key={skelton} />)}
      {postData &&
        postData.map((element) => (
          <Posts data={element.data} key={element.data.id} />
        ))}
    </SimpleGrid>
  );
}

export default PostGrid;
