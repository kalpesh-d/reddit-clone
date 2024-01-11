import { Box, Link, Text } from "@chakra-ui/react";
import { shortenLink } from "../utils/shortenLink";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import removeCommentsFromHTML from "../utils/removeCommentsFromHTML";
import isMarkdown from "../utils/isMarkdown";
import "../css/table.css";

function TextPost({ data }) {
  if (data.post_hint === "link") {
    const isTrue = isMarkdown(data.selftext);
    return (
      <>
        <Link href={data.url} isExternal fontSize="0.8rem" color="blue.400">
          {shortenLink(data.url)} <ExternalLinkIcon />
        </Link>
        {isTrue && (
          <Box
            id="table"
            py={4}
            dangerouslySetInnerHTML={{ __html: cleanedHtml }}
          ></Box>
        )}
      </>
    );
  }
  // It will render video
  else if (data.selftext) {
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

export default TextPost;
