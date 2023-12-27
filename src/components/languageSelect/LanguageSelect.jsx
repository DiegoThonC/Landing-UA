import { useState } from "react";
import { useTranslation } from "react-i18next";

import ukraine from '../../assets/ukraine_flag.svg';
import england from '../../assets/england_flag.svg';
import spain from '../../assets/spain_flag.svg';

const LanguageSelect = ({lang}) => {

    const countryFlag = localStorage.getItem('countryFlag') ?? localStorage.setItem('countryFlag', ukraine);

    const [, i18n] = useTranslation("global");
    const [language, setLanguage] = useState(lang);
    const [flag, setFlag] = useState(countryFlag);
    const [collapse, setCollapse] = useState(false);

    function changeLang(lang, flag) {
        setLanguage(lang);
        setFlag(flag);
        setCollapse(!collapse);
        i18n.changeLanguage(lang);

        localStorage.setItem('lang', lang);
        localStorage.setItem('countryFlag', flag);
    }

    return (
        <div className="relative">
            <button className="flex pl-28 font-semibold text-base uppercase items-center gap-2 lg:text-white lg:pl-0 md:pt-1" onClick={ () => setCollapse(!collapse) }>
                { language ?? localStorage.getItem('lang') }
                <img className="h-4 w-7" alt="" src={
                    flag ?? localStorage.getItem('countryFlag')
                } />
            </button>
            {
                collapse &&
                    <ul className="text-base uppercase absolute left-28 lg:-left-10 md:top-8 px-5 py-2 text-center md:text-white border border-solid border-gray-800 bg-black z-10">
                        <li className="hover:text-orange-400 cursor-pointer text-white flex gap-3 items-center" onClick={ () => changeLang('ua', ukraine) }>
                            <img src={ukraine} className="h-4" alt="" />
                            UA
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer text-white flex gap-3 items-center" onClick={ () => changeLang('en', england) }>
                            <img src={england} className="h-4" alt="" />
                            EN
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer text-white flex gap-3 items-center" onClick={ () => changeLang('es', spain) }>
                            <img src={spain} className="h-4" alt="" />
                            ES
                        </li>
                    </ul>
            }
        </div>
  )
}

export default LanguageSelect