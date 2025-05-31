import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/20/solid";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import MenuItems from "../menuItems/MenuItems";
import LanguageSelect from "../languageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";

const MenuSmall = () => {
  const [openCloseMenu, setOpenCloseMenu] = useState(false);
  const [t, ] = useTranslation("global");

  const solutions = [
    {
      name: t("menu_small.projects"),
      icon: ArrowDownIcon,
      links: [
        {
          name: t("menu.hamchenko.name"),
          href: t("menu.hamchenko.href"),
        },
        {
          name: t("menu.vovk.name"),
          href: t("menu.vovk.href"),
        },
        {
          name: t("menu.petrov.name"),
          href: t("menu.petrov.href"),
        },
      ],
    },
    {
      name: t("menu_small.archive"),
      icon: ArrowDownIcon,
      links: [
        {
          name: t("menu.about.name"),
          href: t("menu.about.href"),
        },
        {
          name: t("menu.archival_fonds.name"),
          href: t("menu.archival_fonds.href"),
        },
        {
          name: t("menu.activities.name"),
          href: t("menu.activities.href"),
        },
        {
          name: t("menu.partnerships.name"),
          href: t("menu.partnerships.href"),
        },
        {
          name: t("menu.students.name"),
          href: t('menu.students.href'),
        },
      ],
    },
  ];

  return (
    <>
      <button
        className="inline-flex mt-5 px-5 md:px-0 items-center gap-x-1 text-sm font-semibold text-gray-900"
        onClick={() => setOpenCloseMenu(!openCloseMenu)}
      >
        <Bars3Icon className="h-7 w-7" />
      </button>

      {
        openCloseMenu && (
          <ul className="bg-white text-sm">
            {
              solutions.map((item, index) => (
                <MenuItems item={item} key={index} />
              ))
            }
            <LanguageSelect />
          </ul>
        )
      }
    </>
  )
}

export default MenuSmall;
