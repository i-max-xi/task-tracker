// import { BoardOfDirectors } from "./components/board-of-directors";
import { WeareunitySection } from "./components/we-are-unity";

const About = () => {
  return (
    <div className="my-5 md:my-10">
      <h1 className="text-[#010101] font-semibold text-xl md:text-2xl text-center">
        ABOUT US
      </h1>
      <div className="mt-5 md:mt-10 mx-auto container">
        <WeareunitySection />
      </div>
      {/* <div className="mt-10 md:mt-20 container mx-auto">
        <BoardOfDirectors />
      </div> */}
    </div>
  );
};

export default About;
