import { Card, CardBody, CardFooter, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import extractTitle from "../utils/extractTitle.js";
import HeadTitle from "./HeadTitle.jsx";
import Title from "./Title.jsx";
import Content from "./Content.jsx";
import Vote from "./Vote.jsx";
import Comment from "./Comment.jsx";
import Share from "./Share.jsx";

function Posts({ data }) {
  return (
    <Card
      maxW="2xl"
      maxH="auto"
      border="1px"
      borderColor="gray.600"
      _hover={{
        border: "1px",
        borderColor: "gray.400",
        cursor: "pointer",
      }}
    >
      <Flex
        flexDirection="row-reverse"
        alignItems="flex-start"
        justifyContent="flex-end"
      >
        <Flex flexDirection="column" w="100%">
          <HeadTitle
            subreddit_name_prefixed={data.subreddit_name_prefixed}
            author={data.author}
          />
          <Flex flex="1" gap="4" justifyContent="space-between">
            <CardBody padding="0 0 0.5rem 0">
              <Title
                permalink={data.permalink}
                subreddit={data.subreddit}
                name={data.name}
                title={data.title}
                link={true}
              />
              <Content data={data} />
            </CardBody>
          </Flex>
          <CardFooter p="0 0 0.5rem 0.5rem" color="gray.400">
            <Flex alignItems="center" gap={3}>
              <Link
                state={{ permalink: data.permalink }}
                to={`/r/${data.subreddit}/comments/${data.name}/${extractTitle(
                  data.permalink
                )}`}
              >
                <Comment num_comments={data.num_comments} />
              </Link>
              <Share permalink={data.permalink} />
            </Flex>
          </CardFooter>
        </Flex>
        <Vote ups={data.ups} />
      </Flex>
    </Card>
  );
}

export default Posts;
