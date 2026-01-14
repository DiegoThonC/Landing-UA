import { useTranslation } from "react-i18next";
import LanguageSelect from "../languageSelect/LanguageSelect";
import logoUa from "../../../assets/logo-ua.svg";
import logoEn from "../../../assets/logo-en.svg"
import ukraine from "../../../assets/ukraine_flag.svg";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const lang = i18n.language || localStorage.getItem("lang");
  const countryFlag = localStorage.getItem("countryFlag") || ukraine;

  const headerFont =
    lang === "ua" ? "font-montserrat" : "font-josefin";

  const logo = lang === "ua" ? logoUa : logoEn;

  return (
    <header className="bg-black shadow-lg shadow-gray-800/100 md:px-14">
      <div className="container flex mx-auto justify-center lg:justify-between">
        <a
          href="#"
          className={`pointer py-4 gap-3 flex flex-col md:text-start md:items-start ${headerFont}`}
        >
          <img src={logo} alt="logo" width={230} height={87}/>
          <span className="text-white sm:text-2xl text-sm font-bold">
            {t("header.title")}
          </span>
          <span className="text-white text-sm text-center font-normal">
            {t("header.sub_title")}
          </span>
        </a>
        <div className="hidden py-3 gap-10 items-baseline lg:flex">
          <a href="#footer" className={`contents text-white text-base mt-1 ${headerFont}`}>
            {t("header.contact")}
          </a>
          <LanguageSelect lang={lang} countryFlag={countryFlag} />
        </div>
      </div>
    </header>
  );
};

export default Header;
