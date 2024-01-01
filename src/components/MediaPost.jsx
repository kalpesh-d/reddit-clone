import { AspectRatio, Image, Link } from "@chakra-ui/react";
import { shortenLink } from "../utils/shortenLink";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function MediaPost({ data }) {
  // if (data.post_hint === undefined) {
  //   console.log(data.url);
  // }
  if (data.post_hint === "image") {
    return (
      <Image
        src={data.url}
        objectFit="cover"
        padding="0.5rem 1rem 0px 0px"
        maxH="inherit"
        w="inherit"
      />
    );
  } else if (data.post_hint === "link") {
    return (
      <Link href={data.url} isExternal fontSize="0.8rem" color="blue.400">
        {shortenLink(data.url)} <ExternalLinkIcon />
      </Link>
    );
  } else if (data.post_hint === "hosted:video") {
    console.log(data);
    return (
      <AspectRatio objectFit="cover">
        <video
          controls
          type="video/mp4"
          height={data.secure_media.reddit_video.height}
          width={data.secure_media.reddit_video.width}
        >
          <source src={data.secure_media.reddit_video.fallback_url} />
        </video>
      </AspectRatio>
    );
  }
}

export default MediaPost;
