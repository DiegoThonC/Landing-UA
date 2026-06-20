export const getLocalizedLink = (link, lang) => {
  if (!link) return link;

  if (typeof link === "string") return link;

  return lang === "ua" ? link.ua : link.en;
};