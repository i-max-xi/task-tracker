import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <main className="w-full h-[100dvh] flex flex-col text-base font-roboto">
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Toaster position="top-center" />
    </main>
  );
}

export default App;
