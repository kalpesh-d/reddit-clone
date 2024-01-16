import { Button, Flex, Textarea } from "@chakra-ui/react";

function TextArea({ newComment, handleCommentChange, handleCommentSubmit }) {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Textarea
        id="comment"
        maxW={{
          base: "md",
          lg: "2xl",
        }}
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleCommentChange}
      />
      <Button onClick={handleCommentSubmit} h={10}>
        Comment
      </Button>
    </Flex>
  );
}

export default TextArea;
