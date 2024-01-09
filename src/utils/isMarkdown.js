function isMarkdown(text) {
  const markdownPatterns = [
    /\[([^\]]+)]\([^\]]+\)/, // links
    /^ *#+ *$/, // headers
    /\*\*([^*]+)\*\*/g, // bold
    /_([^_]+)_/g, // italic
    /`([^`]+)`/g, // code
    /^> (.*)/gm, // blockquote
    /\n *--- *$/, // horizontal rule
  ];

  for (const pattern of markdownPatterns) {
    if (pattern.test(text)) {
      return true;
    }
  }

  return false;
}

export default isMarkdown;
