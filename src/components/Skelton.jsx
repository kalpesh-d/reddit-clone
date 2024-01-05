import { Card, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

function Skelton() {
  return (
    <Card w="40rem" maxH="auto" border="1px" borderColor="gray.600" padding={5}>
      <Skeleton>
        <div>won't be visible</div>
      </Skeleton>
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Card>
  );
}

export default Skelton;
