import { HStack, Text } from "@chakra-ui/react";
import { formatNumber } from "../utils/formatNumber";
import { ChatIcon } from "@chakra-ui/icons";

function CommentIcon({ num_comments, color = "gray.300" }) {
  return (
    <HStack height="1.5rem" color={color}>
      <ChatIcon />
      <Text fontWeight="bold" fontSize="0.8rem">
        {num_comments > 1000 ? formatNumber(num_comments) : num_comments}{" "}
        Comments
      </Text>
    </HStack>
  );
}

export default CommentIcon;
