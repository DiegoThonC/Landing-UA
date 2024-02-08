import { useTranslation } from 'react-i18next';

const MenuWide = () => {

  const [t, ] = useTranslation("global");

  const Projects = [
    {
      name: t("menu.hamchenko.name"),
      href: t("menu.hamchenko.href"),
    },
    {
      name: t("menu.vovk.name"),
      href: t("menu.vovk.href"),
    },
  ];

  const Archive = [
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
  ];

  return (
    <div className='flex justify-between pt-10'>
      <ul>
        {
          Projects.map((project, index) => {
            return(
              <li key={index} className='py-1'>
                <a href={project.href} className='flex py-1 hover:bg-neutral-950 hover:text-white px-5 text-2xl lg:text-xl'>{project.name}</a>
              </li>
            )
          })
        }
      </ul>

      <ul>
        {
          Archive.map((archive, index) => {
            return (
              <li key={index} className='py-1'>
                <a href={archive.href} className="flex py-1 hover:bg-neutral-950 hover:text-white px-5 text-2xl lg:text-xl">{archive.name}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default MenuWide;
