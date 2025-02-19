import { useState } from "react";
import { motion } from "framer-motion";
import TaskList from "@/components/ui/TaskList";
import TaskForm from "@/components/ui/TaskForm";
import SearchBar from "@/components/shared/searchbar";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="py-5 md:py-10 mx-auto bg-white w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center mb-4">Task Tracker</h1>

        <div className="w-[60%] mx-auto">
          <SearchBar />
        </div>

        <TaskList />
      </div>

      <motion.button
        onClick={() => setShowForm(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        Add Task
      </motion.button>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <TaskForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
};

export default Home;
