import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "@nextui-org/react";
import { FAQ } from "./components/FAQ";

const SearchComponent = () => {
  return (
    <Input
      isClearable
      classNames={{
        base: "bg-transparent",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "bg-transparent",
          "border-2",
          "shadow-none",
          "rounded-full",
        ],
      }}
      // label="Search"
      placeholder="Type to search..."
      radius="lg"
      startContent={<Icon icon="bitcoin-icons:search-outline" />}
    />
  );
};

const Help = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto px-10 md:px-20 w-full   md:py-16 bg-[#F7F7F7]"
    >
      <h2 className="text-center text-black font-semibold text-2xl md:text-4xl">
        Hello! How can we help?
      </h2>
      <div className="container lg:w-[45%] mt-4 ">
        <SearchComponent />
      </div>
      <div className="mt-4 lg:mt-8">
        <FAQ />
      </div>
    </motion.section>
  );
};

export default Help;
