import { useLanguage } from "../../context/LanguageContext.jsx";
import useFlashcards from "../../hooks/useFlashcards.js";
import FlashcardGrid from "../../components/flashcards/FlashcardGrid.jsx";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function TestingPage() {
  const { language } = useLanguage();
  const categories = useFlashcards(language);
  const cards = Object.values(categories).flat();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Testing – {language}
        </h2>
        <FlashcardGrid cards={cards} testMode={true} />
      </div>
    </motion.div>
  );
}
