function extractTitle(permalink) {
  const permalinkParts = permalink.split("/");
  const extractedTitle = permalinkParts[permalinkParts.length - 2];
  return extractedTitle;
}

export default extractTitle;
