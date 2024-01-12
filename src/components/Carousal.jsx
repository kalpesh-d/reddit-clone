import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box position="relative">
      <Image src={images[currentImageIndex]} />
      <Flex
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left={0}
        right={0}
        justifyContent="space-between"
      >
        <ChevronLeftIcon
          boxSize="3rem"
          onClick={prevImage}
          aria-label="Previous Image"
          variant="ghost"
        />
        <ChevronRightIcon
          boxSize="3rem"
          onClick={nextImage}
          aria-label="Next Image"
          variant="ghost"
        />
      </Flex>
    </Box>
  );
}

export default Carousel;
