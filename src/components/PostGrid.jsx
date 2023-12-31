import { useDispatch, useSelector } from "react-redux";
import { getPopularPosts } from "../feature/popular/popularSlice";
import { useEffect } from "react";
import Post from "./Post";
import { SimpleGrid } from "@chakra-ui/react";

function PostGrid() {
  const postData = useSelector(
    (state) => state.popular.popularPosts?.data?.children
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularPosts());
  }, []);

  return (
    <SimpleGrid gap={2} justifyContent="center" mx={2}>
      {postData &&
        postData.map((element) => (
          <Post key={element.data.id} data={element.data} />
        ))}
    </SimpleGrid>
  );
}

export default PostGrid;
