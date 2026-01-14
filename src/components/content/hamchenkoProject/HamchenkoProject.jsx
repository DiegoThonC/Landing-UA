import { useTranslation } from "react-i18next";
import hamchenko1 from "../../../assets/hamchenko/hamchenko1.jpg";
import hamchenko2 from "../../../assets/hamchenko/hamchenko2.jpg";
import hamchenko3 from "../../../assets/hamchenko/hamchenko3.jpg";
import hamchenko4 from "../../../assets/hamchenko/hamchenko4.jpg";

import LinkToSite from "../../shared/linkToSite/LinkToSite";

const imagesMap = {
  hamchenko1,
  hamchenko2,
  hamchenko3,
  hamchenko4,
};

const HamchenkoProject = () => {
  const { t } = useTranslation("projects");

  const content = t("hamchenko_project.content", {
    returnObjects: true,
  });

  return (
    <section id="HamchenkoProject" className="py-14 md:px-14">
      <div className="container mx-auto px-4 mb-40 relative">
        <h2 className="mt-8 font-normal text-2xl uppercase">
          {t("hamchenko_project.title")}
        </h2>

        {content.map((block, index) => {
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

            default:
              return null;
          }
        })}

        <LinkToSite href={t("hamchenko_project.link_to_site")} labelKey="button" />
      </div>
    </section>
  );
};

export default HamchenkoProject;
