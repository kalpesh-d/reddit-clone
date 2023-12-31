import {
  Avatar,
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
  return (
    <Card maxW="2xl">
      <CardHeader>
        <Box>
          <Text size="base">{data.subreddit_name_prefixed}</Text>
        </Box>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Image
            src={data.thumbnail}
            h={data.thumbnail_height}
            w={data.thumbnail_width}
          />
        </Flex>

        <Heading as="h1" size="sm">
          {data.title}
        </Heading>
      </CardHeader>
    </Card>
  );
}

export default Post;
