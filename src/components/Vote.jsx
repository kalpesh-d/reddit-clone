import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { formatNumber } from "../utils/formatNumber";

function Vote({
  ups,
  direction = "column",
  gap = 0,
  p = { base: "0.5", md: "0.8rem" },
}) {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);

  const handleUpvote = () => {
    setUpvote(!upvote);
    setDownvote(false); // Reset downvote state
  };

  const handleDownvote = () => {
    setDownvote(!downvote);
    setUpvote(false); // Reset upvote state
  };
  return (
    <Flex flexDirection={direction} alignItems="center" gap={gap} p={p}>
      <Button size="xs" bg="transparent">
        <TriangleUpIcon
          color={upvote ? "red.400" : "gray.400"}
          onClick={handleUpvote}
        />
      </Button>
      <Text
        fontWeight="bold"
        fontSize="0.8rem"
        color={upvote ? "red.400" : downvote ? "blue.400" : "gray.400"}
      >
        {ups > 1000 ? formatNumber(ups) : ups}
      </Text>
      <Button size="xs" bg="transparent">
        <TriangleDownIcon
          color={downvote ? "blue.400" : "gray.400"}
          onClick={handleDownvote}
        />
      </Button>
    </Flex>
  );
}

export default Vote;
