import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="group relative h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            {/* Tooltip on hover */}
            <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="whitespace-nowrap rounded-lg border border-white/10 bg-tertiary/90 px-3 py-1.5 text-[13px] font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-md">
                {technology.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
