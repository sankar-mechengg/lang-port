// src/components/flashcards/Flashcard.jsx

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import languageCodes from "../../assets/data/languageCodes.js";
import styles from "../../assets/styles/Flashcard.module.css";

export default function Flashcard({ card, testMode = false }) {
  const { language } = useLanguage();
  const code = languageCodes[language]; // e.g. 'jp', 'hi', 'fr', etc.

  const [flipped, setFlipped] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null); // null | true | false

  const handleCheck = (e) => {
    e.preventDefault();
    const ok = input.trim().toLowerCase() === card.en.toLowerCase();
    setResult(ok);
    setFlipped(true); // flip on check
  };

  const handleMouseEnter = () => {
    if (!testMode) setFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!testMode) setFlipped(false);
  };

  const cardClass = [
    styles.card,
    flipped ? styles.flipped : "",
    result === true ? styles.correct : result === false ? styles.wrong : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cardClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.inner}>
        {/* Front Side */}
        <div className={styles.front}>
          {/* Dynamic script field */}
          <p className={styles[code]}>{card[code]}</p>

          {/* Transliteration always uses .rm */}
          <p className={styles.rm}>{card.rm}</p>

          {testMode && (
            <form onSubmit={handleCheck} className={styles.form}>
              <input
                type="text"
                placeholder="English meaning"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <button type="submit">Check</button>
            </form>
          )}
        </div>

        {/* Back Side */}
        <div className={styles.back}>
          <p className={styles.en}>{card.en}</p>
        </div>
      </div>
    </div>
  );
}
