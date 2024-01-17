import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPost } from "../feature/currentPost/currentPostSlice";
import removeT3FromUrl from "../utils/removeT3FromUrl";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import HeadTitle from "./HeadTitle";
import Vote from "./Vote";
import Title from "./Title";
import Content from "./Content";
import CommentIcon from "./CommentIcon";
import Share from "./Share";
import CommentList from "./CommentList";
import TextArea from "./TextArea";

function CurrentPost({ permalink }) {
  const currentPost = useSelector(
    (state) => state.currentPost.currentPost.posts.data?.children[0]?.data
  );
  const currentComment = useSelector(
    (state) => state.currentPost.currentPost.comments?.data?.children
  );
  const isLoading = useSelector((state) => state.currentPost.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPost(removeT3FromUrl(permalink)));
  }, [dispatch, permalink]);

  if (isLoading) {
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

  if (!currentPost || !currentComment) {
    return null;
  }

  return (
    <>
      <Card
        maxW="2xl"
        border="1px"
        borderColor="gray.600"
        padding={{ base: "0 0.5rem" }}
        margin={{ base: "0 0.5rem", lg: "0 auto" }}
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
            <Flex flex="1" gap="4" justifyContent="space-between">
              <CardBody padding="0 0 0.5rem 0">
                <Title
                  permalink={currentPost.permalink}
                  subreddit={currentPost.subreddit}
                  name={currentPost.name}
                  title={currentPost.title}
                />
                <Content data={currentPost} height="30rem" />
              </CardBody>
            </Flex>
            <CardFooter p="0.5rem 0 0.5rem 0">
              <Flex alignItems="center" gap={3}>
                <Button size="xs" bg="transparent">
                  <label htmlFor="comment">
                    <CommentIcon num_comments={currentPost.num_comments} />
                  </label>
                </Button>
                <Button size="xs" bg="transparent">
                  <Share permalink={currentPost.permalink} />
                </Button>
              </Flex>
            </CardFooter>
          </Flex>
          <Vote ups={currentPost.ups} />
        </Flex>
      </Card>
      <Box
        maxW="2xl"
        border="1px"
        borderColor="gray.600"
        borderRadius={5}
        // mt="5"
        padding={{ base: "0 0.5rem" }}
        margin={{ base: "0.5rem 0.5rem", lg: "0.5rem auto" }}
      >
        <Box m="0.5rem 0">
          <TextArea />
        </Box>
        <CommentList comments={currentComment} />
      </Box>
    </>
  );
}

export default CurrentPost;
