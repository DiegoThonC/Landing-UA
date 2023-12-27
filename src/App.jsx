import Header from './components/header/Header.jsx'
import Menu from './components/menu/Menu.jsx'
import VovkProject from './components/vovkProject/VovkProject.jsx'
import HamchenkoProject from './components/hamchenkoProject/HamchenkoProject.jsx'
import Footer from './components/footer/Footer.jsx'
import ArrowUp from './components/arrowUp/ArrowUp.jsx'

const App = () => {
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