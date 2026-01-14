import Header from "./components/shared/header/Header.jsx";
import Menu from "./components/menu/Menu.jsx";
import Content from "./components/content/Content.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import ArrowUp from "./components/shared/arrowUp/ArrowUp.jsx";
import { useTranslation } from "react-i18next";

const App = () => {
  const [t] = useTranslation("global");
  document.title = t("title");

  return (
    <>
      <Header />
      <Menu />
      <Content />
      <Footer />
      <ArrowUp />
    </>
  );
};

export default App;
