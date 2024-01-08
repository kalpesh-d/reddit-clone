import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPost } from "../feature/currentPost/currentPostSlice";
import removeT3FromUrl from "../utils/removeT3FromUrl";
import { Card, Flex, Spinner, Stack } from "@chakra-ui/react";
import HeadTitle from "./HeadTitle";

function CurrentPost({ permalink }) {
  const post = useSelector((state) => state.currentPost.currentPost);
  const currentPost = useSelector(
    (state) => state.currentPost.currentPost.posts.data?.children[0]?.data
  );
  const dispatch = useDispatch();
  console.log(currentPost);
  console.log(post);

  useEffect(() => {
    dispatch(getCurrentPost(removeT3FromUrl(permalink)));
  }, [dispatch, permalink]);

  if (!currentPost) {
    return (
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        h="70vh"
        w="100%"
        gap="2"
      >
        <Spinner size="sm" />
        <span>Loading...</span>
      </Stack>
    );
  }

  return (
    <Card
      maxW="2xl"
      h="auto"
      border="1px"
      borderColor="gray.600"
      margin="0 auto"
    >
      <Flex
        flexDirection="row-reverse"
        alignItems="flex-start"
        justifyContent="flex-end"
      >
        <Flex flexDirection="column" w="100%">
          <HeadTitle
            subreddit_name_prefixed={currentPost.subreddit_name_prefixed}
            author={currentPost.author}
          />
        </Flex>
      </Flex>
    </Card>
  );
}

export default CurrentPost;
