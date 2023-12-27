import { useTranslation } from 'react-i18next';
import hamchenko1 from '../../assets/hamchenko/hamchenko1.jpg';
import hamchenko2 from '../../assets/hamchenko/hamchenko2.jpg';
import hamchenko3 from '../../assets/hamchenko/hamchenko3.jpg';
import hamchenko4 from '../../assets/hamchenko/hamchenko4.jpg';

const HamchenkoProject = () => {

  const [t, ] = useTranslation("global");

  const hamchenkoProject = [
    {
      img: hamchenko1,
      title: t("hamchenko_project.title"),
      description: t("hamchenko_project.description")
    },
    {
      img: hamchenko2,
      description: t("hamchenko_project.description2"),
      link_to_site: t("hamchenko_project.link_to_site"),
      description3: t("hamchenko_project.description3"),
    },
    {
      img: hamchenko3,
      description: t("hamchenko_project.description4")
    },
    {
      img: hamchenko4,
    }
  ]

  return (
    <section id='HamchenkoProject' className='py-14 md:px-14'>
      <div className='container mx-auto px-4 mb-40 relative'>
        {
          hamchenkoProject.map((item, index) => {
            return (
              <div key={index} className='pb-20'>
                <img className='hamchenko_svg md:w-screen shadow-[25px_25px_30px_0px_#00000080]' src={item.img} alt="" />
                <h2 className='mt-8 font-normal text-2xl uppercase'>{item.title}</h2>
                <p className='my-4 font-normal text-lg'>
                  {item.description} {" "}
                  <a href={item.link_to_site} className='font-bold'>{item.link_to_site}</a>
                  {item.description3}
                  {item.description4}
                </p>
              </div>
            )
          })
        }
        <a href='http://hamchenko.archive.iananu.com/en/' className='flex absolute right-20 bg-white
                lg:mx-80 md:mx-40 rounded-full items-center justify-center h-28 w-28 text-lg active:shadow-[inset_25px_25px_30px_0px_#00000080]
                shadow-[25px_25px_30px_0px_#00000080]
                hover:shadow-[inset_25px_25px_30px_0px_#00000080] md:h-30 md:w-30'>
          {t("button")}
        </a>
      </div>
    </section>
  );
}

export default HamchenkoProject