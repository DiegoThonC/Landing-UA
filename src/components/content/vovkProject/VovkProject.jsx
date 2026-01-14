import { useTranslation } from "react-i18next";
import vovk1 from "../../../assets/vovk/vovk1.jpeg";
import vovk2 from "../../../assets/vovk/vovk2.jpeg";
import vovk3 from "../../../assets/vovk/vovk3.jpeg";
import vovk4 from "../../../assets/vovk/vovk4.jpeg";

import LinkToSite from "../../shared/linkToSite/LinkToSite";

const imagesMap = {
  vovk1,
  vovk2,
  vovk3,
  vovk4,
};

const VovkProject = () => {
  const [t] = useTranslation("projects");

  const content = t("vovk_project.content", { returnObjects: true });

  return (
    <section id="VovkProject" className="pb-14 pt-32 md:px-14">
      <div className="container mx-auto px-4 mb-40 relative">
        <h2 className="mt-8 font-normal text-2xl uppercase">
          {t("vovk_project.title")}
        </h2>

        {content?.map((block, index) => {
          switch (block.type) {
            case "image":
              return (
                <img
                  key={index}
                  src={imagesMap[block.value]}
                  alt=""
                  className="my-10 md:w-screen shadow-[25px_25px_30px_0px_#00000080]"
                />
              );

            case "text":
              return (
                <p key={index} className="my-4 font-normal text-lg">
                  {block.value}
                </p>
              );

            case "link":
              return (
                <p key={index} className="my-4 font-normal text-lg">
                  <a
                    href={block.href}
                    className="font-bold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {block.label}
                  </a>
                </p>
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

        <LinkToSite href={t("vovk_project.link_to_site")} labelKey="button" />
      </div>
    </section>
  );
};

export default VovkProject;
