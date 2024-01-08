import { LinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";
import { useState } from "react";

function Share({ permalink }) {
  const [copyLink, setCopyLink] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard.writeText(`https://www.reddit.com${permalink}`);
    setCopyLink(true);
  };

  return (
    <Link display="flex" alignItems="center" onClick={handleShareClick}>
      <LinkIcon mr={1} />
      <Text fontWeight="bold" fontSize="0.8rem">
        {copyLink ? "Copied" : "Share"}
      </Text>
    </Link>
  );
}

export default Share;
