import { CardHeader, Heading, Text } from "@chakra-ui/react";

function HeadTitle({ subreddit_name_prefixed, author }) {
  return (
    <CardHeader py={3} px={1}>
      <Heading as="h1" fontSize="0.9rem">
        {subreddit_name_prefixed}{" "}
        <Text as="span" fontWeight="normal" fontSize="0.8rem">
          • Posted by u/{author}
        </Text>
      </Heading>
    </CardHeader>
  );
}

export default HeadTitle;
