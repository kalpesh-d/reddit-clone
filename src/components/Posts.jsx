import { formatNumber } from "../utils/formatNumber";
import {
  ChatIcon,
  LinkIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import MediaPost from "./mediaPost";

function Posts({ data }) {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [copyLink, setCopyLink] = useState(false);

  const handleUpvote = () => {
    setUpvote(!upvote);
    setDownvote(false); // Reset downvote state
  };

  const handleDownvote = () => {
    setDownvote(!downvote);
    setUpvote(false); // Reset upvote state
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(`https://www.reddit.com${data.permalink}`);
    setCopyLink(true);
  };

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
          <CardHeader py={3} px={1}>
            <Heading as="h1" fontSize="0.9rem">
              {data.subreddit_name_prefixed}{" "}
              <Text as="span" fontWeight="normal" fontSize="0.8rem">
                • Posted by u/{data.author}
              </Text>
            </Heading>
          </CardHeader>
          <Flex flex="1" gap="4" justifyContent="space-between">
            <CardBody padding="0 0 0.5rem 0">
              <Heading as="h1" size="sm" fontWeight="medium">
                {data.title}
              </Heading>
              {data.post_hint !== "link" ? (
                <Box padding="0.6rem 0 0 0">
                  <Flex
                    maxH="512px"
                    w="100%"
                    bg="whiteAlpha.100"
                    justifyContent="center"
                  >
                    <MediaPost data={data} />
                  </Flex>
                </Box>
              ) : (
                <Box maxH="512px" w="100%">
                  <MediaPost data={data} />
                </Box>
              )}
            </CardBody>
          </Flex>
          <CardFooter p="0 0 0.5rem 0.5rem" color="gray.400">
            <Flex alignItems="center" gap={3}>
              <HStack>
                <ChatIcon />
                <Text fontWeight="bold" fontSize="0.8rem">
                  {data.num_comments > 1000
                    ? formatNumber(data.num_comments)
                    : data.num_comments}{" "}
                  Comments
                </Text>
              </HStack>
              <Link
                display="flex"
                alignItems="center"
                onClick={handleShareClick}
              >
                <LinkIcon mr={1} />
                <Text fontWeight="bold" fontSize="0.8rem">
                  {copyLink ? "Copied" : "Share"}
                </Text>
              </Link>
            </Flex>
          </CardFooter>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          p={{ base: "0.5", md: "0.8rem" }}
        >
          <TriangleUpIcon
            color={upvote ? "red.400" : "gray.400"}
            onClick={handleUpvote}
          />
          <Text
            fontWeight="bold"
            fontSize="0.8rem"
            color={upvote ? "red.400" : downvote ? "blue.400" : "gray.400"}
          >
            {data.ups > 1000 ? formatNumber(data.ups) : data.ups}
          </Text>
          <TriangleDownIcon
            color={downvote ? "blue.400" : "gray.400"}
            onClick={handleDownvote}
          />
        </Flex>
      </Flex>
    </Card>
  );
}

export default Posts;
