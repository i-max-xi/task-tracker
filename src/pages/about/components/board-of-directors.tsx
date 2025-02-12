import { motion } from "framer-motion";

export const BoardOfDirectors = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" flex flex-col justify-center items-center "
    >
      <h2 className=" text-2xl md:text-3xl font-semibold">
        <span className="text-black">Board of Directors</span>{" "}
      </h2>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8 w-full place-items-center">
        {infos.map((item) => (
          <p
            className="bg-[#D9D9D9] w-[10rem] h-[10rem] md:w-[15rem] md:h-[16rem]"
            key={item}
          ></p>
        ))}
      </div>
    </motion.section>
  );
};

const infos = ["1", "2", "3", "4"];
