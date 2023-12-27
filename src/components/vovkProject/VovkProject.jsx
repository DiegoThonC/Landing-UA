import { useTranslation } from 'react-i18next';
import './VovkProject.css';
import vovk1 from '../../assets/vovk/vovk1.jpeg';
import vovk2 from '../../assets/vovk/vovk2.jpeg';
import vovk3 from '../../assets/vovk/vovk3.jpeg';
import vovk4 from '../../assets/vovk/vovk4.jpeg';

const VovkProject = () => {

  const [t, ] = useTranslation("global");

  const vovkProject = [
    {
      img: vovk1,
      title: t("vovk_project.title"),
      description: t("vovk_project.description")
    },
    {
      img: vovk2,
      description: t("vovk_project.description2")
    },
    {
      img: vovk3,
      description: t("vovk_project.description3"),
      link_to_site: t("vovk_project.link_to_site"),
      description4: t("vovk_project.description4"),
      description_list: t("vovk_project.description-list")
    },
    {
      img: vovk4,
    }
  ]

  return (
    <section id='VovkProject' className='pb-14 md:px-14'>
      <div className='container mx-auto px-4 mb-40 relative'>
        {
          vovkProject.map((item, index) => {
            return (
              <div key={index} className='pb-20'>
                <img className='vovk_svg md:w-screen' src={item.img} alt="" />
                <h2 className='mt-8 font-normal text-2xl uppercase'>{item.title}</h2>
                <p className='my-4 font-normal text-lg'>
                  {item.description} {" "} 
                    <a href={item.link_to_site} className='font-bold'>{item.link_to_site}</a>  
                  {item.description4}
                </p>
                <p className='my-4 font-normal text-lg'>
                  {item.description_list}
                </p>
              </div>
            )
          })
        }
        <a href='http://vovk.archive.iananu.com/en/' className='linkToSiteVovk absolute flex absolute lg:mx-80 
                  md:mx-40 rounded-full items-center justify-center h-28 w-28 text-lg active:shadow-[inset_25px_25px_30px_0px_#00000080]
                  hover:shadow-[inset_25px_25px_30px_0px_#00000080] md:h-30 md:w-30'>
          {t("button")}
        </a>
      </div>
    </section>
  );
}

export default VovkProject