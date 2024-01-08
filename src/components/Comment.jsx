import { HStack, Text } from "@chakra-ui/react";
import { formatNumber } from "../utils/formatNumber";
import { ChatIcon } from "@chakra-ui/icons";

function Comment({ num_comments }) {
  return (
    <HStack>
      <ChatIcon />
      <Text fontWeight="bold" fontSize="0.8rem">
        {num_comments > 1000 ? formatNumber(num_comments) : num_comments}{" "}
        Comments
      </Text>
    </HStack>
  );
}

export default Comment;
