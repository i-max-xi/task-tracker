// import { AcrossDomains } from "./components/across-domains";
import { FAQ } from "./components/FAQ";
import { UnitySavingsAccount } from "./components/unity-savings-account";
import { InfoSection } from "./components/info_section";
import { motion } from "framer-motion";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="lg:h-[90vh] pb-10 lg:pb-5  overflow-hidden flex flex-col lg:flex-row justify-between container items-center">
        <div className="my-auto flex-1 ">
          <motion.img
            src="/images/mobile.webp"
            loading="eager"
            className="w-full h-full object-cover "
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          // initial={{ opacity: 0, x: 50 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.5 }}
          className="flex flex-col gap-2  flex-1 justify-center items-center text-center lg:justify-start lg:items-start lg:text-left"
        >
          <h1 className="text-[#010101] text-2xl md:text-5xl font-extrabold lg:w-[85%]">
            Save Towards the Goals You Believe In With Susu Savings.
          </h1>
          <p className="text-[#575757] font-normal text-base md:text-lg">
            Tell us what you’re saving for, and we will help you set aside money
            to reach your goals with ease.
          </p>
          <p className="font-normal text-base md:text-lg text-[#FBBB16]">
            Download our Mobile Banking app
          </p>
          <div className="flex items-center gap-x-4">
            {[
              {
                title: "App Store",
                icon: "/icons/app-store.webp",
                link: "",
              },
              {
                title: "Google play",
                icon: "/icons/play-store.webp",
                link: "",
              },
            ].map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="md:w-[10rem] "
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto px-4 md:px-20 w-full  flex flex-col gap-10 md:gap-20  pt-16 pb-8 md:pt-16 md:pb-10 bg-[#F7F7F7]">
        <InfoSection />
      </div>

      <div className="mx-auto container flex flex-col gap-16 md:gap-20 my-8 md:my-16 bg-white">
        <UnitySavingsAccount />

        <FAQ />
      </div>
    </>
  );
};

export default Home;
