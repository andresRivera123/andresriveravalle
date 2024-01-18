import { toolsDetails } from "../utils/toolsDetails";

export const Toolbox = () => {
  return (
    <div className="about__toolbox">
      <div className="toolbox__texts">

        <p className="text">
          The skills, tools, and technologies I use to bring your ideas to life.
        </p>
      </div>
      <div className="tools__container">
        {toolsDetails.map((tool, index) => (
          <div className="tool" key={index}>
            <img
              src={tool.image}
              className=""
              alt={`${tool.name} image`}
              width="48"
              height="48"
            />
            <p className="text">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
