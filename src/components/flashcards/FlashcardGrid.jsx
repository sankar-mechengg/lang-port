import styles from "../../assets/styles/FlashcardGrid.module.css";
import Flashcard from "./Flashcard.jsx";

export default function FlashcardGrid({ cards, testMode }) {
  return (
    <div className={styles.grid}>
      {cards.map((card, idx) => (
        <Flashcard key={idx} card={card} testMode={testMode} />
      ))}
    </div>
  );
}
