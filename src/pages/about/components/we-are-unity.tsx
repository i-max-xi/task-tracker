import InfoCardWithImage from "@/components/shared/info_card_with_image";
import { motion } from "framer-motion";

export const WeareunitySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" flex flex-col justify-center items-center"
    >
      <h2 className=" text-3xl md:text-5xl font-bold">
        <span className="text-black">We are</span>{" "}
        <span className="text-[#FBB603]">Unity</span>
      </h2>

      <p className="mt-5 md:mt-10 flex gap-4 md:gap-8">
        {infos.map((info, index) => (
          <InfoCardWithImage key={index} {...info} />
        ))}
      </p>
    </motion.section>
  );
};

const infos = [
  {
    title: "Nature of Business",
    description:
      "Unity Savings and Services aims at serving the people with partly Islamic support to the Muslims, the needy as well as non-Muslims. We adopt profit sharing policy as the sole core mandate.",
    img_src: "https://placehold.co/400",
  },
  {
    title: "Vision Statement",
    description:
      "To be the people’s backbone, harnessing the transformational power of job creation and all related businesses to improve lives.",
    img_src: "https://placehold.co/400",
  },
  {
    title: "Mission Statement",
    description:
      "Providing profitable and diversified for a sustained job creation, Islamic financial supports and legal services to the benefit of all especially the less privilege.",
    img_src: "https://placehold.co/400",
  },
];
