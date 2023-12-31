import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const [t, ] = useTranslation("global");
  const date =  new Date().getFullYear();

  return (
    <footer id='footer' className="relative bg-black text-center py-4 mt-14 gap-3 flex flex-col">
      <div className="flex justify-between columns-1 md:columns-2 lg-columns-3 items-center">
        <div className='w-full hidden lg:block pr-5'></div>
        <div className="w-full text-white">
            <p className='text-lg uppercase font-normal pb-2'>{t("footer.title")}</p>
            <p className='text-base font-normal'>{t("footer.email")} </p>
            <p className='text-base font-normal'>{t("footer.street")}</p>
        </div>
        <div className='absolute pr-5 -top-16 left-5 md:w-full md:static md:block'>
          <p className='w-full text-xs md:text-sm text-start md:text-center lg:text-right md:text-white pb-1'>{t("footer.art_by")}</p>
          <p className='w-full text-xs md:text-sm text-start md:text-center lg:text-right md:text-white pb-1'>{t("footer.website_by")}</p>
          <p className='w-full text-xs md:text-sm text-start md:text-center lg:text-right md:text-white'>{t("footer.design_by")}</p>
        </div>
      </div>
      <div className="flex gap-5 m-auto">
        <a href='https://www.facebook.com/profile.php?id=100064499540143'>
          <FontAwesomeIcon icon={faFacebookF} width={10} color="white" />
        </a>
        <a href='https://www.instagram.com/saianasu_archive/'>
          <FontAwesomeIcon icon={faInstagram} width={16} color="white" />
        </a>
        <a href='https://t.me/iananu_naukovijarkhiv'>
          <FontAwesomeIcon icon={faTelegramPlane} width={16} color="white" />
        </a>
      </div>
      <p className="text-white text-sm">{t("footer.copyrights.first-part")} {" "} {date} {" "}
        <a href='https://iananu.org.ua/'>
          {t("footer.copyrights.link-part")} {" | "}
        </a> <br />
        {t("footer.copyrights.third-part")}
      </p>
    </footer>
  );
}

export default Footer