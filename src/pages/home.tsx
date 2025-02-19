import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center justify-center w-full h-[100vh]"
      >
        <h1>Task Tracker</h1>
      </motion.div>
    </>
  );
};

export default Home;
