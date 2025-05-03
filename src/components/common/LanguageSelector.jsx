import styles from "../../assets/styles/LanguageSelector.module.css";
import { useLanguage } from "../../context/LanguageContext.jsx";

const LANGS = [
  "Arabic",
  "Bengali",
  "Chinese",
  "French",
  "German",
  "Greek",
  "Hindi",
  "Italian",
  "Japanese",
  "Kannada",
  "Latin",
  "Malayalam",
  "Marathi",
  "Portuguese",
  "Punjabi",
  "Russian",
  "Spanish",
  "Tamil",
  "Telugu",
  "Urdu",
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <select
      className={styles.select}
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      {LANGS.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
