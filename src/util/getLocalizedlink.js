export const getLocalizedLink = (url, lang) => {
  if (!url) return url;

  if (lang !== "ua") {
    return url.endsWith("/")
      ? `${url}en/`
      : `${url}/en/`;
  }

  return url;
};
