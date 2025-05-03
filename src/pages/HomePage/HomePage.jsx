import styles from "../../assets/styles/HomePage.module.css";
import LanguageSelector from "../../components/common/LanguageSelector.jsx";
import { useNavigate } from "react-router-dom";
import { heroBackgrounds } from "../../assets/data/heroBackgrounds.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import langportIcon from "../../assets/images/langport_icon_cp.png"; // Import the logo image
import { motion } from "framer-motion"; // Import framer-motion for animations

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function HomePage() {
  const nav = useNavigate();
  const { language } = useLanguage();
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <section
        className={styles.hero}
        style={{
          background: `url("${
            heroBackgrounds[language] ?? heroBackgrounds.Japanese
          }") center/cover no-repeat`,
        }}
      >
        <div className={styles.overlay} />
        <div className={styles.content}>
          <img src={langportIcon} alt="LangPort Logo" className={styles.logo} />{" "}
          {/* Add logo above the heading */}
          <h1>LangPort Flashcards</h1>
          <p>Learn essential conversation phrases before your next trip.</p>
          <LanguageSelector />
          <button onClick={() => nav("/train")} className={styles.btn}>
            Start Learning
          </button>
        </div>
      </section>
    </motion.div>
  );
}
