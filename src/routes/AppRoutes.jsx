import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage/HomePage.jsx";
import TrainingPage from "../pages/TrainingPage/TrainingPage.jsx";
import TestingPage from "../pages/TestingPage/TestingPage.jsx";

export default function AppRoutes() {
  const location = useLocation(); // Get the current location

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/train" element={<TrainingPage />} />
        <Route path="/test" element={<TestingPage />} />
      </Routes>
    </AnimatePresence>
  );
}
