import { Box, Flex } from "@chakra-ui/react";
import MediaPost from "./MediaPost";
import { Link } from "react-router-dom";
import extractTitle from "../utils/extractTitle";

function Content({ data, height }) {
  return (
    <>
      {data.post_hint === "image" || data.post_hint === "hosted:video" ? (
        <Link
          state={{ permalink: data.permalink }}
          to={`/r/${data.subreddit}/comments/${data.name}/${extractTitle(
            data.permalink
          )}`}
        >
          <Box padding="0.6rem 0 0 0">
            <Flex
              maxH={height}
              w="100%"
              bg="whiteAlpha.100"
              justifyContent="center"
              overflow="hidden"
            >
              <MediaPost data={data} />
            </Flex>
          </Box>
        </Link>
      ) : (
        <Box maxH={height} w="100%" overflow="hidden">
          <MediaPost data={data} />
        </Box>
      )}
    </>
  );
}

export default Content;
