import { useTranslation } from "react-i18next";
import viazmitina1 from "../../../assets/viazmitina/viazmitina1.jpeg";
import viazmitina2 from "../../../assets/viazmitina/viazmitina2.jpeg";
import viazmitina3 from "../../../assets/viazmitina/viazmitina3.jpeg";

import LinkToSite from "../../shared/linkToSite/LinkToSite";

const imagesMap = {
  viazmitina1,
  viazmitina2,
  viazmitina3,
};

const ViazmitinaProject = () => {
  const [t] = useTranslation("projects");

  const content = t("viazmitina_project.content", {
    returnObjects: true,
  });

  return (
    <section id="viazmitinaProject" className="py-14 md:px-14">
      <div className="container mx-auto px-4 mb-40 relative">
        <h2 className="mt-8 font-normal text-2xl uppercase">
          {t("viazmitina_project.title")}
        </h2>

        {content?.map((block, index) => {
          if (block.type === "text") {
            return (
              <p
                key={index}
                style={{ whiteSpace: "pre-line" }}
                className="my-4 font-normal text-lg"
              >
                {block.value}
              </p>
            );
          }

          if (block.type === "image") {
            return (
              <img
                key={index}
                src={imagesMap[block.value]}
                alt=""
                className="md:w-screen my-10 shadow-[25px_25px_30px_0px_#00000080]"
              />
            );
          }

          return null;
        })}

        <LinkToSite href={t("viazmitina_project.link_to_site")} labelKey={"button"} />
      </div>
    </section>
  );
};

export default ViazmitinaProject;
