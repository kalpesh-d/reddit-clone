import React from "react";
import { Box } from "@chakra-ui/react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <Box>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.data.id} />
      ))}
    </Box>
  );
}

export default CommentList;
