import { useTranslation } from 'react-i18next';
import domontovych1 from '../../assets/domontovych/domontovych1.JPG';
import domontovych2 from '../../assets/domontovych/domontovych2.JPG';
import domontovych3 from '../../assets/domontovych/domontovych3.JPG';

const DomontovychProject = () => {

  const [t, ] = useTranslation("global");

  const domontovychProject = [
    {
      title: t("domontovych_project.title"),
      description: t("domontovych_project.description"),
      img: domontovych1,
      description2: t("domontovych_project.description2"),
      description3: t("domontovych_project.description3"),
    },
    {
      img: domontovych2,
      description2: t("domontovych_project.description4"),
      description3: t("domontovych_project.description5"),
      description4: t("domontovych_project.description6"),
      description5: t("domontovych_project.description7"),
      description6: t("domontovych_project.description8"),
      description7: t("domontovych_project.description9"),
    },
    {
      img: domontovych3,
      description2: t("domontovych_project.description10"),
    }
  ];

  return (
    <section id='DomontovychProject' className='py-14 md:px-14'>
      <div className='container mx-auto px-4 mb-40 relative'>
        {
          domontovychProject.map((item, index) => {
            return (
              <>
                <div key={index} className='pb-20'>
                  <h2 className='mt-8 font-normal text-2xl uppercase'>{item.title}</h2>
                  <p className='my-4 font-normal text-lg'>{item.description}</p>
                  <img className='hamchenko_svg md:w-screen shadow-[25px_25px_30px_0px_#00000080]' src={item.img} alt="" />
                  <p className='mt-8 font-normal text-lg'>{item.description2}</p>
                  <p className='my-4 font-normal text-lg'>{item.description3}</p>
                  <p className='my-4 font-normal text-lg'>{item.description4}</p>
                  <p className='my-4 font-normal text-lg'>{item.description5}</p>
                </div>
              </>
            )
          })
        }
        <a href={t("domontovych_project.link_to_site")} className='flex absolute right-20 bg-white
                lg:mx-80 md:mx-40 rounded-full items-center justify-center h-28 w-28 text-lg active:shadow-[inset_25px_25px_30px_0px_#00000080]
                shadow-[25px_25px_30px_0px_#00000080]
                hover:shadow-[inset_25px_25px_30px_0px_#00000080] md:h-30 md:w-30'>
          {t("button")}
        </a>
      </div>
    </section>
  )
};

export default DomontovychProject;
