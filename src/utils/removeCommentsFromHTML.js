function removeCommentsFromHTML(html) {
  const cleanedHtml = html.replace(
    /&lt;!--\s*SC_OFF\s*--&gt;|&lt;!--\s*SC_ON\s*--&gt;/g,
    ""
  );
  return cleanedHtml.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

export default removeCommentsFromHTML;
