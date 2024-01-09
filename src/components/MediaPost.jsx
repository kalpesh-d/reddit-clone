import { Box, Image, Link, Text } from "@chakra-ui/react";
import { shortenLink } from "../utils/shortenLink";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import ReactPlayer from "react-player";
import removeCommentsFromHTML from "../utils/removeCommentsFromHTML";

function MediaPost({ data }) {
  if (data.post_hint === "image") {
    return <Image src={data.url} maxH="inherit" objectFit="cover" />;
  } else if (data.post_hint === "link") {
    return (
      <Link href={data.url} isExternal fontSize="0.8rem" color="blue.400">
        {shortenLink(data.url)} <ExternalLinkIcon />
      </Link>
    );
  } else if (data.post_hint === "hosted:video") {
    return (
      <>
        <ReactPlayer
          url={data.secure_media.reddit_video.hls_url}
          width="100%"
          controls={true}
        />
      </>
    );
  } else if (data.selftext) {
    const cleanedHtml = removeCommentsFromHTML(data.selftext_html);
    return <Box p={4} dangerouslySetInnerHTML={{ __html: cleanedHtml }}></Box>;
  }
}

export default MediaPost;
