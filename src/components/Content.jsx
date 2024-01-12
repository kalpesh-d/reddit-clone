import { Box, Flex } from "@chakra-ui/react";
import TextPost from "./TextPost";
import { Link } from "react-router-dom";
import extractTitle from "../utils/extractTitle";
import Media from "./Media";

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
          <Box padding="0.6rem 0 0 0" maxH={height} overflow="hidden">
            <Flex
              maxH={height}
              w="100%"
              bg="whiteAlpha.100"
              justifyContent="center"
              overflow="hidden"
            >
              <Media data={data} />
            </Flex>
            <TextPost data={data} />
          </Box>
        </Link>
      ) : (
        <Box maxH={height} w="100%" overflow="hidden">
          <TextPost data={data} />
        </Box>
      )}
    </>
  );
}

export default Content;
