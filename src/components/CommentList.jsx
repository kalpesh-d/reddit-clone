import React from "react";
import { Box } from "@chakra-ui/react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <Box>
      {comments.map((comment) => (
        <Comment key={comment.data.id} comment={comment} />
      ))}
    </Box>
  );
}

export default CommentList;
