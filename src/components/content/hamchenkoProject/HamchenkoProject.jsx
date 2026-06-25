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

  /**
   * Splits long text into two halves based on sentences
   * Used for creating a 2-column text layout when text is long enough
   */
  const splitTextBySentence = (text, minLength = 150) => {
    if (text.length <= minLength) return null;

    // Split text into sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

    // Divide sentences into two halves
    const half = Math.ceil(sentences.length / 2);

    return {
      left: sentences.slice(0, half).join(" ").trim(),
      right: sentences.slice(half).join(" ").trim(),
    };
  };

  /**
   * Renders text block
   * - If short → single column paragraph
   * - If long → split into 2 columns
   */
  const renderText = (text, split = true) => {
    const parts = split ? splitTextBySentence(text) : null;

    // Short text case (normal paragraph)
    if (!parts) {
      return <p className="my-4 font-normal text-lg">{text}</p>;
    }

    // Long text case (2-column split layout)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 my-6">
        <p className="font-normal text-lg">{parts.left}</p>
        <p className="font-normal text-lg">{parts.right}</p>
      </div>
    );
  };

  return (
    <section id="HamchenkoProject" className="py-14 md:px-14">
      <div className="container mx-auto px-4 mb-40 relative">
        <h2 className="mt-8 font-normal text-2xl uppercase">
          {t("hamchenko_project.title")}
        </h2>

        {/* Main content renderer (handles text, images, lists, pairing logic) */}
        {content?.map((block, index) => {
          // Look ahead to next block (used for text + image pairing)
          const next = content[index + 1];

          /**
           * TEXT + IMAGE PAIRING LOGIC
           * If a text block is immediately followed by an image:
           * - we combine them into a 2-column layout
           * - and alternate image position (left/right)
           */
          if (block.type === "text" && next?.type === "image") {
            // Determine pair index (used to alternate layout direction)
            const pairIndex = content
              .slice(0, index)
              .filter(
                (b, i) =>
                  content[i]?.type === "text" &&
                  content[i + 1]?.type === "image",
              ).length;

            // Even pairs: text left, image right
            // Odd pairs: image left, text right
            const isEven = pairIndex % 2 === 0;

            return (
              <div
                key={index}
                className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
              >
                {/* TEXT */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  {renderText(block.value, false)}
                </div>

                {/* IMAGE */}
                <img
                  src={imagesMap[next.value]}
                  alt=""
                  className={`w-full shadow-[25px_25px_30px_0px_#00000080] ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                />
              </div>
            );
          }

          /**
           * Skip image if it has already been rendered
           * as part of a text+image pair above
           */
          if (block.type === "image" && content[index - 1]?.type === "text") {
            return null;
          }

          /**
           * Standalone image (not part of a pair)
           */
          if (block.type === "image") {
            return (
              <img
                key={index}
                src={imagesMap[block.value]}
                alt=""
                className="my-10 w-full shadow-[25px_25px_30px_0px_#00000080]"
              />
            );
          }

          /**
           * Standalone text block
           * May become 2-column if long enough
           */
          if (block.type === "text") {
            return <div key={index}>{renderText(block.value, true)}</div>;
          }

          /**
           * List block rendering
           */
          if (block.type === "list") {
            return (
              <ul key={index} className="my-6 list-disc pl-6 text-lg">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}

        <LinkToSite href={t("hamchenko_project.link_to_site")} labelKey="button" />
      </div>
    </section>
  );
};

export default HamchenkoProject;
