// Placeholder for more advanced logic – not strictly needed now
import { useMemo } from "react";
import { flashcardData } from "../assets/data/flashcardData.js";

export default function useFlashcards(language) {
  return useMemo(() => {
    const langData = flashcardData[language] || { categories: {} };
    return langData.categories;
  }, [language]);
}
