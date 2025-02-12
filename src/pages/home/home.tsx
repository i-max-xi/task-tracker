// import { AcrossDomains } from "./components/across-domains";
import { FAQ } from "./components/FAQ";
import { UnitySavingsAccount } from "./components/unity-savings-account";
import { InfoSection } from "./components/info_section";
import { motion } from "framer-motion";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="md:h-[100vh] overflow-hidden">
        <motion.img
          src="/images/hero.png"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />{" "}
      </div>

      <div className="mx-auto px-4 md:px-20 w-full  flex flex-col gap-10 md:gap-20  pt-16 pb-8 md:pt-16 md:pb-10 bg-[#F7F7F7]">
        <InfoSection />
      </div>

      <div className="mx-auto container flex flex-col gap-10 md:gap-20 my-8 md:my-16 bg-white">
        <UnitySavingsAccount />

        <FAQ />
      </div>
    </>
  );
};

export default Home;
