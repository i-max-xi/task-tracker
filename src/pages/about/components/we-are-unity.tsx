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
      <p className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
    img_src: "/images/cash.jpg",
  },
  {
    title: "Vision Statement",
    description:
      "To be the people’s backbone, harnessing the transformational power of job creation and all related businesses to improve lives.",
    img_src: "/images/magnifier.jpg",
  },
  {
    title: "Mission Statement",
    description:
      "Providing profitable and diversified for a sustained job creation, Islamic financial supports and legal services to the benefit of all especially the less privilege.",
    img_src: "/images/hands.jpg",
  },
];
