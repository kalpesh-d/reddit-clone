import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCurrentPost,
} from "../feature/currentPost/currentPostSlice";
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
  Textarea,
} from "@chakra-ui/react";
import HeadTitle from "./HeadTitle";
import Vote from "./Vote";
import Title from "./Title";
import Content from "./Content";
import CommentIcon from "./CommentIcon";
import Share from "./Share";
import CommentList from "./CommentList";

function CurrentPost({ permalink }) {
  const currentPost = useSelector(
    (state) => state.currentPost.currentPost.posts.data?.children[0]?.data
  );
  const currentComment = useSelector(
    (state) => state.currentPost.currentPost.comments?.data?.children
  );
  const isLoading = useSelector((state) => state.currentPost.isLoading);
  const [newComment, setNewComment] = useState("");

  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const comment = `&lt;div class="md"&gt;&lt;p&gt;${newComment}&lt;/p&gt; &lt;/div&gt;`;

    dispatch(
      addComment({
        id: randomId,
        body_html: comment,
        author: "noobmaster",
        ups: 1,
      })
    );
    setNewComment("");
  };

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
      <Card maxW="2xl" border="1px" borderColor="gray.600" margin="0 auto">
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
            <CardFooter p="0 0 0.5rem 0.5rem" color="gray.400">
              <Flex alignItems="center" gap={3}>
                <CommentIcon num_comments={currentPost.num_comments} />
                <Share permalink={currentPost.permalink} />
              </Flex>
            </CardFooter>
          </Flex>
          <Vote ups={currentPost.ups} />
        </Flex>
      </Card>

      <Flex justifyContent="center" mt="5">
        <Box
          maxW="2xl"
          border="1px"
          borderColor="gray.600"
          bg="gray.700"
          borderRadius={5}
        >
          <Box mb={5}>
            <Textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <Button onClick={handleCommentSubmit} h={10}>
              Comment
            </Button>
          </Box>
          <CommentList comments={currentComment} />
        </Box>
      </Flex>
    </>
  );
}

export default CurrentPost;
