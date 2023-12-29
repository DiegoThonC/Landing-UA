import Header from './components/header/Header.jsx'
import Menu from './components/menu/Menu.jsx'
import VovkProject from './components/vovkProject/VovkProject.jsx'
import HamchenkoProject from './components/hamchenkoProject/HamchenkoProject.jsx'
import Footer from './components/footer/Footer.jsx'
import ArrowUp from './components/arrowUp/ArrowUp.jsx'
import { useTranslation } from 'react-i18next';

const App = () => {

  const [t, ] = useTranslation("global");
  document.title = t("title")

  return (
    <>
        <Header />
        <Menu />
        <VovkProject />
        <HamchenkoProject />
        <Footer />
        <ArrowUp />
    </>
  )
}

export default App