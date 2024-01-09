import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import extractTitle from "../utils/extractTitle";

function Title({ permalink, subreddit, name, title, link }) {
  return link ? (
    <Link
      state={{ permalink: permalink }}
      to={`/r/${subreddit}/comments/${name}/${extractTitle(permalink)}`}
    >
      <Heading as="h1" size="sm" fontWeight="medium">
        {title}
      </Heading>
    </Link>
  ) : (
    <Heading as="h1" size="sm" fontWeight="medium">
      {title}
    </Heading>
  );
}

export default Title;
