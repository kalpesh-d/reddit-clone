import { useDispatch, useSelector } from "react-redux";
import { getPopularPosts } from "../feature/popular/popularSlice";
import { useEffect } from "react";
import Post from "./Post";

function PostGrid() {
  const postData = useSelector(
    (state) => state.popular.popularPosts?.data?.children
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularPosts());
  }, []);

  return (
    <>
      {postData &&
        postData.map((element) => (
          <Post key={element.data.id} data={element.data} />
        ))}
    </>
  );
}

export default PostGrid;
