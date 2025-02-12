import { CustomButton } from "@/components/shared/shared_customs";
import { motion } from "framer-motion";

export const UnitySavingsAccount = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" flex flex-col gap-5 md:gap-10 justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
        <h2 className="text-[#FBB603] font-bold text-2xl md:text-4xl ">
          Unity Savings Account
        </h2>
        <p className="text-black font-bold text-2xl md:text-4xl ">
          {" "}
          Deposit and Earn 2.50% p.a.
        </p>
      </div>

      <div className="my-5 md:my-10 grid grid-cols-3  gap-2 md:gap-8">
        {infos.map((info, index) => (
          <div
            key={index}
            className={`font-semibold text-xs md:text-base  flex flex-col justify-center items-center text-center ${
              index !== 0 ? "  md:pl-6" : ""
            }`}
          >
            <p className="flex whitespace-nowrap">{info.title}</p>
            <p className="flex whitespace-nowrap">{info.description}</p>
          </div>
        ))}
      </div>

      <div className="border-l border-r py-6 px-10 border-gray-300 flex flex-col justify-center items-center text-center">
        <CustomButton className="bg-[#FBB603] text-white rounded-full font-semibold ">
          Learn More
        </CustomButton>
      </div>
    </motion.section>
  );
};

const infos = [
  {
    title: "No minimum deposit",
    description: "required",
  },
  {
    title: "No salary crediting",
    description: "needed",
  },
  {
    title: "No minimum",
    description: "spending necessary",
  },
];
