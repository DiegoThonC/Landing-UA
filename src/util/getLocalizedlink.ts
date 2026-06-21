export const getLocalizedLink = (link: any, lang: any) => {
  if (!link) return link;

  switch (lang) {
    case "ua":
      return link.ua;
  
    default:
      return link.en;
  }
};