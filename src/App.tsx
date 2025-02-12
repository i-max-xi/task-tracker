import { motion, useScroll } from "framer-motion";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/shared/not_found";
import ScrollToTop from "./components/shared/scroll_to_top";
import MainLayout from "./layout/main_layout";
import About from "./pages/about";
import Help from "./pages/help";

const Home = lazy(() => import("./pages/home/home"));

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="w-full h-[100dvh] flex flex-col text-base font-roboto">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0"
      />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="about-us" element={<About />} />

          <Route path="help-center" element={<Help />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </main>
  );
}

export default App;
