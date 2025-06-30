import { useTranslation } from 'react-i18next';
import viazmitina1 from '../../assets/viazmitina/viazmitina1.jpeg';
import viazmitina2 from '../../assets/viazmitina/viazmitina2.jpeg';
import viazmitina3 from '../../assets/viazmitina/viazmitina3.jpeg';

const ViazmitinaProject = () => {

  const [t, ] = useTranslation("global");

  const viazmitinaProject = [
    {
      title: t("viazmitina_project.title"),
      description: t("viazmitina_project.description"),
      img: viazmitina1,
    },
    {
      description: t("viazmitina_project.description2"),
      img: viazmitina2,
    },
    {
      description: t("viazmitina_project.description3"),
      img: viazmitina3,
    },
    {
      description: t("viazmitina_project.description4"),
    }
  ];

  return (
    <section id='viazmitinaProject' className='py-14 md:px-14'>
      <div className='container mx-auto px-4 mb-40 relative'>
        {
          viazmitinaProject.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <h2 className='mt-8 font-normal text-2xl uppercase'>{item.title}</h2>
                  <p className='my-4 font-normal text-lg'>{item.description}</p>
                  <img className='hamchenko_svg md:w-screen shadow-[25px_25px_30px_0px_#00000080]' src={item.img} alt="" />
                  <p className='mt-8 font-normal text-lg'>{item.description2}</p>
                  <p className='my-4 font-normal text-lg'>{item.description3}</p>
                  <p className='my-4 font-normal text-lg'>{item.description4}</p>
                </div>
              </>
            )
          })
        }
        <a href={t("viazmitina_project.link_to_site")} className='flex absolute right-20 bg-white
                lg:mx-80 md:mx-40 rounded-full items-center justify-center h-28 w-28 text-lg active:shadow-[inset_25px_25px_30px_0px_#00000080]
                shadow-[25px_25px_30px_0px_#00000080]
                hover:shadow-[inset_25px_25px_30px_0px_#00000080] md:h-30 md:w-30'>
          {t("button")}
        </a>
      </div>
    </section>
  )
};

export default ViazmitinaProject;

