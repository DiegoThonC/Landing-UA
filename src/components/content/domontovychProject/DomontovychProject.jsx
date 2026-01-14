import { useTranslation } from "react-i18next";
import domontovych1 from "../../../assets/domontovych/domontovych1.JPG";
import domontovych2 from "../../../assets/domontovych/domontovych2.JPG";
import domontovych3 from "../../../assets/domontovych/domontovych3.JPG";

import LinkToSite from "../../shared/linkToSite/LinkToSite";

const imagesMap = {
  domontovych1,
  domontovych2,
  domontovych3,
};

const DomontovychProject = () => {
  const [t] = useTranslation("projects");

  const content = t("domontovych_project.content", {
    returnObjects: true,
  });

  return (
   <section id="DomontovychProject" className="py-14 md:px-14">
      <div className="container mx-auto px-4 mb-40 relative">
        <h2 className="mt-8 font-normal text-2xl uppercase">
          {t("domontovych_project.title")}
        </h2>

        {content?.map((block, index) => {
          switch (block.type) {
            case "text":
              return (
                <p key={index} className="my-4 font-normal text-lg">
                  {block.value}
                </p>
              );

            case "image":
              return (
                <img
                  key={index}
                  src={imagesMap[block.value]}
                  alt=""
                  className="my-10 md:w-screen shadow-[25px_25px_30px_0px_#00000080]"
                />
              );

            case "list":
              return (
                <ul key={index} className="my-6 list-disc pl-6 text-lg">
                  {block.items.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}

        <LinkToSite href={t("domontovych_project.link_to_site")} labelKey="button" />
      </div>
    </section>
  );
};

export default DomontovychProject;
