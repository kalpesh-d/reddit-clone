function removeCommentsFromHTML(html) {
  if (html) {
    const cleanedHtml = html.replace(
      /&lt;!--\s*SC_OFF\s*--&gt;|&lt;!--\s*SC_ON\s*--&gt;/g,
      ""
    );
    return cleanedHtml
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;#39;/g, "'")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;quot;/g, '"');
  }
}

export default removeCommentsFromHTML;
