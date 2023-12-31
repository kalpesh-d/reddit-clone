import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function Post({ data }) {
  const thumbnailCondition =
    (data.thumbnail !== "default" &&
      data.thumbnail !== "self" &&
      data.thumbnail !== "nsfw" &&
      data.secure_media === null) ??
    data.thumbnail;

  console.log(data);

  return (
    <Card
      maxW="2xl"
      maxH="3xs"
      border="1px"
      borderColor="gray.600"
      _hover={{
        border: "1px",
        borderColor: "gray.400",
        cursor: "pointer",
      }}
    >
      <CardHeader py={3}>
        <Heading as="h1" fontSize="0.9rem">
          {data.subreddit_name_prefixed}{" "}
          <Text as="span" fontWeight="normal" fontSize="0.8rem">
            • Posted by u/{data.author}
          </Text>
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Flex flex="1" gap="4" justifyContent="space-between">
          <Heading as="h1" size="sm" fontWeight="medium">
            {data.title}
          </Heading>
          {thumbnailCondition && (
            <Image
              src={data.thumbnail}
              borderRadius={10}
              h={`${data.thumbnail_height}px`}
              w={`${data.thumbnail_width}px`}
            />
          )}
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Post;
