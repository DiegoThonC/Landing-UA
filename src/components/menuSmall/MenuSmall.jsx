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
          name: t("menu.hamchenko"),
          href: 'http://hamchenko.archive.iananu.com/en/',
        },
        {
          name: t("menu.vovk"),
          href: 'http://vovk.archive.iananu.com/en/',
        },
      ],
    },
    {
      name: t("menu_small.archive"),
      icon: ArrowDownIcon,
      links: [
        {
          name: t("menu.about"),
          href: 'http://vovk.archive.iananu.com/en/history-of-the-scientific-archive/',
        },
        {
          name: t("menu.archival_fonds"),
          href: 'http://vovk.archive.iananu.com/en/archival-funds/',
        },
        {
          name: t("menu.activities"),
          href: 'http://vovk.archive.iananu.com/en/activities/',
        },
        {
          name: t("menu.partnerships"),
          href: 'http://vovk.archive.iananu.com/en/partnerships/',
        },
        {
          name: t("menu.students"),
          href: 'http://vovk.archive.iananu.com/en/students-in-the-archive/',
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
