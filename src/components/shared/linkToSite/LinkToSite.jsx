import { useTranslation } from "react-i18next";

const LinkToSite = ({ href, labelKey, className = "", external = true }) => {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        absolute flex right-20
        bg-white
        lg:mx-80 md:mx-40
        rounded-full
        items-center justify-center
        h-28 w-28
        text-lg
        shadow-[25px_25px_30px_0px_#00000080]
        hover:shadow-[inset_25px_25px_30px_0px_#00000080]
        transition-shadow
        ${className}
      `}
    >
      {t(labelKey)}
    </a>
  );
};

export default LinkToSite;
