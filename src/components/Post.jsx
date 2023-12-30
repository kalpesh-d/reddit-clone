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
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={data.subreddit_name_prefixed}
              src={data.thumbnail}
              h={data.thumbnail_height}
              w={data.thumbnail_width}
            />

            <Box>
              <Text size="base">{data.subreddit_name_prefixed}</Text>
            </Box>
            <Image
              src={data.thumbnail}
              h={data.thumbnail_height}
              w={data.thumbnail_width}
            />
          </Flex>

          <Heading as="h1" size="sm">
            {data.title}
          </Heading>
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default Post;
