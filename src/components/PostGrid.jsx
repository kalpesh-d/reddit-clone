import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/posts/postsSlice.js";
import { useEffect } from "react";
import Post from "./Post";
import { SimpleGrid } from "@chakra-ui/react";
import Catergory from "./Catergory";
import Skelton from "./Skelton.jsx";

function PostGrid() {
  const selectedCategory = useSelector((state) => state.posts.selectedCategory);
  const postData = useSelector(
    (state) => state.posts.postsByCategory[selectedCategory]?.data?.children
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(`${selectedCategory}`));
  }, [selectedCategory]);

  // if (!postData) return ;

  return (
    <SimpleGrid gap={2} justifyContent="center" mx={2}>
      <Catergory />

      {!postData ? (
        <Skelton />
      ) : (
        postData.map((element) => (
          <Post key={element.data.id} data={element.data} />
        ))
      )}
    </SimpleGrid>
  );
}

export default PostGrid;
