import { Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../feature/currentPost/currentPostSlice";

function TextArea({ setIsTextArea, parent_id }) {
  const [newComment, setNewComment] = useState("");

  const dispatch = useDispatch();

  const handleCommentSubmit = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const comment = `&lt;div class="md"&gt;&lt;p&gt;${newComment}&lt;/p&gt; &lt;/div&gt;`;

    if (newComment) {
      dispatch(
        addComment({
          id: randomId,
          body_html: comment,
          author: "noobmaster",
          ups: 1,
          parent_id: parent_id,
        })
      );
      setNewComment("");
      setIsTextArea(false);
    } else {
      setIsTextArea(false);
      alert("Cannot add empty comment!");
    }
  };

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
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button onClick={handleCommentSubmit} h={10} mt={2}>
        Comment
      </Button>
    </Flex>
  );
}

export default TextArea;
