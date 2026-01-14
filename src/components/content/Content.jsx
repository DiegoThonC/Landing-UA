import VovkProject from "./vovkProject/VovkProject.jsx";
import HamchenkoProject from "./hamchenkoProject/HamchenkoProject.jsx";
import DomontovychProject from "./domontovychProject/DomontovychProject.jsx";
import ViazmitinaProject from "./viazmitinaProject/ViazmitinaProject.jsx";

const Content = () => {
  return (
    <>
      <ViazmitinaProject />
      <DomontovychProject />
      <VovkProject />
      <HamchenkoProject />
    </>
  );
};

export default Content;
