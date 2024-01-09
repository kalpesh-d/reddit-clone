import { Box, Flex } from "@chakra-ui/react";
import MediaPost from "./MediaPost";
import { Link } from "react-router-dom";
import extractTitle from "../utils/extractTitle";

function Content({ data }) {
  return (
    <>
      {data.post_hint !== "link" && !data.selftext ? (
        <Link
          state={{ permalink: data.permalink }}
          to={`/r/${data.subreddit}/comments/${data.name}/${extractTitle(
            data.permalink
          )}`}
        >
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
        </Link>
      ) : (
        <Box maxH="512px" w="100%">
          <MediaPost data={data} />
        </Box>
      )}
    </>
  );
}

export default Content;
