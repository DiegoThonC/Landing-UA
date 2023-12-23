import Header from './components/header/Header.jsx'
import Menu from './components/menu/Menu.jsx'
// import MainImage from './components/mainImage/mainImage.jsx'
import VovkProject from './components/vovkProject/VovkProject.jsx'
import HamchenkoProject from './components/hamchenkoProject/HamchenkoProject.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
        <Header />
        <Menu />
        {/* <MainImage /> */}
        <VovkProject />
        <HamchenkoProject />
        <Footer />
    </>
  )
}

export default App