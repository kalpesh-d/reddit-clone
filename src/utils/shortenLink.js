export function shortenLink(url) {
  const { hostname, pathname } = new URL(url);

  // Remove common subdomains (www, m, etc.)
  const subdomainRemoved = hostname.replace(/^(www|m)\./, "");

  // Extract the first part of the path after .com/ and take the first 5 characters
  const shortenedPath = pathname.split("/").slice(1, 2)[0].substring(0, 5);

  return `${subdomainRemoved}.com/${shortenedPath}...`;
}
