import { Image } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import removeAmpFromURL from "../utils/removeAmpFromURL";
import Carousel from "./Carousal";

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
  } else if (data.is_gallery) {
    const galleryImages = Object.values(data.media_metadata).map((image) =>
      removeAmpFromURL(image.s.u)
    );

    return <Carousel images={galleryImages} />;

    // {
    //   return Object.values(data.media_metadata).map((image) => (
    //     <Image src={removeAmpFromURL(image.s.u)} key={image.id} />
    //   ));
    // }
  }
}

export default Media;
