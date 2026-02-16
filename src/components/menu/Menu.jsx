import MenuWide from "../menuWide/MenuWide";
import drawing from "../../assets/bg-main.png";
import { LINKS } from "../../util/constants";
import { useTranslation } from "react-i18next";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import MenuMobile from "../menuMobile/MenuMobile";

const Menu = () => {
  const [t] = useTranslation("global");

  const links = [
    {
      name: t("menu_small.projects"),
      icon: ArrowDownIcon,
      links: [
        {
          name: t("menu.hamchenko.name"),
          href: LINKS.hamchenko,
        },
        {
          name: t("menu.vovk.name"),
          href: LINKS.vovk,
        },
        {
          name: t("menu.petrov.name"),
          href: LINKS.petrov,
        },
        {
          name: t("menu.viazmitina.name"),
          href: LINKS.viazmitina,
        },
      ],
    },
    {
      name: t("menu_small.archive"),
      icon: ArrowDownIcon,
      links: [
        {
          name: t("menu.about.name"),
          href: LINKS.about,
        },
        {
          name: t("menu.archival_fonds.name"),
          href: LINKS.archival_fonds,
        },
        {
          name: t("menu.activities.name"),
          href: LINKS.activities,
        },
        {
          name: t("menu.partnerships.name"),
          href: LINKS.partnerships,
        },
        {
          name: t("menu.students.name"),
          href: LINKS.students,
        },
      ],
    },
  ];

  return (
    <section id="menu" className="pb-14 md:px-14">
      <div className="container mx-auto">
        <div className="lg:hidden">
          <MenuMobile links={links} />
        </div>
        <div className="hidden lg:block">
          <MenuWide links={links} />
        </div>
        <img
          className="relative object-cover object-left h-screen lg:object-center lg:object-contain lg:w-screen lg:px-4 md:-z-10 lg:-mt-60"
          src={drawing}
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Menu;
