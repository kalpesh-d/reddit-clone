function removeAmpFromURL(url) {
  const cleanedURL = url.replace(/amp;/g, "");

  return cleanedURL;
}

export default removeAmpFromURL;
