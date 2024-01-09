import { Box, Image, Link, Text } from "@chakra-ui/react";
import { shortenLink } from "../utils/shortenLink";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import ReactPlayer from "react-player";
import removeCommentsFromHTML from "../utils/removeCommentsFromHTML";
import isMarkdown from "../utils/isMarkdown";
import "../css/table.css";

function MediaPost({ data }) {
  // It will render image
  if (data.post_hint === "image") {
    return <Image src={data.url} maxH="inherit" objectFit="cover" />;
  }
  // It will render link
  else if (data.post_hint === "link") {
    return (
      <Link href={data.url} isExternal fontSize="0.8rem" color="blue.400">
        {shortenLink(data.url)} <ExternalLinkIcon />
      </Link>
    );
  }
  // It will render video
  else if (data.post_hint === "hosted:video") {
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
    const isTrue = isMarkdown(data.selftext);
    // It will render markdown text
    if (isTrue) {
      const cleanedHtml = removeCommentsFromHTML(data.selftext_html);
      return (
        <Box
          id="table"
          py={4}
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        ></Box>
      );
    }
    // It will render plain text
    else {
      const cleanedHtml = removeCommentsFromHTML(data.selftext_html);
      return (
        <Text
          id="para"
          p="5px 2rem 5px 0"
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        ></Text>
      );
    }
  }
}

export default MediaPost;
