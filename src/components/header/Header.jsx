import { useTranslation } from 'react-i18next';
import LanguageSelect from '../languageSelect/LanguageSelect';
import logo from './../../assets/logo.svg';
import ukraine from '../../assets/ukraine_flag.svg';


const Header = () => {

  const [t, ] = useTranslation("global");

  const lang = localStorage.getItem('lang');
  const countryFlag = localStorage.getItem('countryFlag') ?? localStorage.setItem('countryFlag', ukraine);
  
  return (
    <header className="bg-black shadow-lg shadow-gray-800/100 md:px-14">
      <div className='container flex mx-auto justify-center lg:justify-between'>
        <a href='#' className="pointer py-4 gap-3 flex flex-col md:text-start md:items-start">
          <img src={logo} alt="logo" />
          <span className="text-white text-sm text-center font-normal">{t('header.title')}</span>
        </a>
        <div className='hidden py-3 gap-10 items-baseline lg:flex'>
          <a href='#footer' className='contents text-white text-base mt-1'>{t('header.contact')}</a>
          <LanguageSelect lang={lang} countryFlag={countryFlag}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
