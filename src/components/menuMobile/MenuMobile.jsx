import { useState } from "react";
import LanguageSelect from "../shared/languageSelect/LanguageSelect";
import { getLocalizedLink } from "../../util/getLocalizedlink";
import { useTranslation } from "react-i18next";

const MenuMobile = ({ links = [] }) => {
  const { i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpenMenu(!openMenu);
          setOpenIndex(null);
        }}
        aria-expanded={openMenu}
        aria-label="Open menu"
        className="flex flex-col gap-1.5 p-2 mt-5
            focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <span
          className={`h-0.5 w-6 bg-black transition-transform duration-300
              ${openMenu && "translate-y-2 rotate-45"}`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition-opacity duration-300
              ${openMenu && "opacity-0"}`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition-transform duration-300
              ${openMenu && "-translate-y-2 -rotate-45"}`}
        />
      </button>

      <div
        className={`
          transition-[max-height,opacity] duration-300
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${openMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="">
          <ul className="flex flex-col">
            {links.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;

              return (
                <li key={item.name} className="border-t">
                  <button
                    onClick={() => toggleSubmenu(index)}
                    aria-expanded={isOpen}
                    className="w-full pl-28 pr-5 pb-3 flex items-center justify-between
                      text-2xl font-semibold uppercase
                      transition-colors"
                  >
                    <span className="">{item.name}</span>

                    {Icon && (
                      <Icon
                        className={`h-8 w-8 transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-[max-height,opacity] duration-300
                      ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <ul className="flex flex-col pl-36">
                      {item.links.map((sub) => (
                        <li className="pb-3" key={`${sub.name}-${index}`}>
                          <a
                            href={getLocalizedLink(sub.href, i18n.language)}
                            className="block text-gray-700 hover:text-black"
                            onClick={() => setOpenMenu(false)}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <LanguageSelect />
        </nav>
      </div>
    </>
  );
};

export default MenuMobile;
