import React, { useState } from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import removeCommentsFromHTML from "../utils/removeCommentsFromHTML";
import getTimeAgo from "../utils/getTimeAgo";
import CommentList from "./CommentList";
import CommentIcon from "./CommentIcon";
import Share from "./Share";
import Vote from "./Vote";
import TextArea from "./TextArea";

function Comment({ comment }) {
  const [isTextArea, setIsTextArea] = useState(false);
  const cleanedHtml = removeCommentsFromHTML(comment.data.body_html);
  const isReply = comment.data.replies && true;

  const handleTextArea = () => {
    setIsTextArea(!isTextArea);
  };

  if (comment.kind !== "more")
    return (
      <Flex p="0.6rem 1.3rem" flexDirection="column" justifyContent="center">
        <Text fontWeight="medium" fontSize="0.8rem">
          {comment.data.author}{" "}
          <Text as="span" color="gray.200" fontWeight="normal">
            · {getTimeAgo(comment.data.created_utc)}
          </Text>
        </Text>
        <Text
          m="0.3rem 0"
          fontSize="14px"
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        ></Text>

        <Flex alignItems="center" gap={3}>
          <Vote ups={comment.data.ups} direction="row" gap="4px" p={0} />
          <Button size="xs" bg="transparent" onClick={handleTextArea}>
            <CommentIcon
              num_comments={comment.data.num_comments}
              color="gray.400"
            />
          </Button>
          <Share permalink={comment.data.permalink} color="gray.400" />
        </Flex>

        {isTextArea && (
          <TextArea setIsTextArea={setIsTextArea} parent_id={comment.data.id} />
        )}
        {isReply && (
          <CommentList comments={comment.data.replies.data.children} />
        )}
      </Flex>
    );
}

export default Comment;
