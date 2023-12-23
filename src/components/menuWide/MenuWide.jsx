import { useTranslation } from 'react-i18next';

const MenuWide = () => {

  const [t, ] = useTranslation("global");

  const Projects = [
    {
      name: t("menu.hamchenko"),
      href: 'http://hamchenko.archive.iananu.com/en/',
    },
    {
      name: t("menu.vovk"),
      href: 'http://vovk.archive.iananu.com/en/',
    },
  ];

  const Archive = [
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
