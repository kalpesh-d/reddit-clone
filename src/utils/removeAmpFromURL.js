function removeAmpFromURL(url) {
  if (url) {
    const cleanedURL = url.replace(/amp;/g, "");

    return cleanedURL;
  }
  return url;
}

export default removeAmpFromURL;
