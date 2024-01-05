import { useDispatch, useSelector } from "react-redux";
import { getBestPosts } from "../feature/best/bestSlice";
import { useEffect } from "react";
import Post from "./Post";
import { SimpleGrid } from "@chakra-ui/react";
import Catergory from "./Catergory";

function PostGrid() {
  const postData = useSelector((state) => state.best.bestPosts?.data?.children);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBestPosts());
  }, []);

  return (
    <SimpleGrid gap={2} justifyContent="center" mx={2}>
      <Catergory />
      {postData &&
        postData.map((element) => (
          <Post key={element.data.id} data={element.data} />
        ))}
    </SimpleGrid>
  );
}

export default PostGrid;
