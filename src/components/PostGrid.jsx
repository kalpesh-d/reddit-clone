import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/posts/postsSlice.js";
import { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Catergory from "./Catergory";
import Skelton from "./Skelton.jsx";
import { Link } from "react-router-dom";
import extractTitle from "../utils/extractTitle.js";
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
          <Link
            key={element.data.id}
            to={`/r/${element.data.subreddit}/comments/${
              element.data.name
            }/${extractTitle(element.data.permalink)}`}
          >
            <Posts data={element.data} />
          </Link>
        ))}
    </SimpleGrid>
  );
}

export default PostGrid;
