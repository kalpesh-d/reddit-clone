import React from "react";
import { Box } from "@chakra-ui/react";
import Comment from "./Comment";

function CommentList({
  comments,
  newComment,
  handleCommentChange,
  handleCommentSubmit,
}) {
  return (
    <Box>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          key={comment.data.id}
          newComment={newComment}
          handleCommentChange={handleCommentChange}
          handleCommentSubmit={handleCommentSubmit}
        />
      ))}
    </Box>
  );
}

export default CommentList;
