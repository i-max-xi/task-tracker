import { useState } from "react";
import { motion } from "framer-motion";
import TaskList from "@/components/shared/ui/TaskList";
import TaskForm from "@/components/shared/ui/TaskForm";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className=" mx-auto bg-white w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Task Tracker</h1>

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
