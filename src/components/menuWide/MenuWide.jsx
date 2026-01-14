const MenuWide = ({ links = [] }) => {
  return (
    <div className="flex justify-between pt-10">
      <ul>
        {links[0].links.map((project, index) => {
          return (
            <li key={index} className="py-1">
              <a
                href={project.href}
                className="flex py-1 hover:bg-neutral-950 hover:text-white px-5 text-2xl lg:text-xl max-w-[260px] whitespace-normal break-words"
              >
                {project.name}
              </a>
            </li>
          );
        })}
      </ul>

      <ul>
        {links[1].links.map((archive, index) => {
          return (
            <li key={index} className="py-1">
              <a
                href={archive.href}
                className="flex py-1 hover:bg-neutral-950 hover:text-white px-5 text-2xl lg:text-xl"
              >
                {archive.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuWide;
