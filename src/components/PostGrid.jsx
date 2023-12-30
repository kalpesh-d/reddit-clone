import { useDispatch, useSelector } from "react-redux";
import {
  getPopularPosts,
  getSubredditInfos,
} from "../feature/popular/popularSlice";
import { useEffect } from "react";
import Post from "./Post";

function PostGrid() {
  const postData = useSelector(
    (state) => state.popular.popularPosts?.data?.children
  );
  const subredditData = useSelector(
    (state) => state.popular.subredditInfos?.data
  );
  console.log(subredditData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularPosts());
  }, []);

  useEffect(() => {
    if (postData)
      postData.forEach((element) => {
        dispatch(getSubredditInfos(element.data.subreddit));
      });
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
