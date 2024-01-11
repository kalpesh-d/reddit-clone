import { Image } from "@chakra-ui/react";
import ReactPlayer from "react-player";

function Media({ data }) {
  if (data.post_hint === "image") {
    return <Image src={data.url} maxH="inherit" objectFit="cover" />;
  } else if (data.post_hint === "hosted:video") {
    return (
      <ReactPlayer
        url={data.secure_media.reddit_video.hls_url}
        width="100%"
        controls={true}
      />
    );
  }
}

export default Media;
