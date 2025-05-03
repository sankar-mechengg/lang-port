# LangPort

LangPort is a **React + Vite** language flashcards application designed for travelers to learn essential conversational phrases on the go. Pick from multiple languages, flip through flashcards in training mode, or test your recall—and enjoy smooth animations, themable backgrounds, and a premium glassmorphic UI.

---

## 🌟 Features

* **Multi-language support**: Japanese, Hindi, Tamil, French, Spanish, Latin, Greek, Kannada (easily extendable).
* **Training & Testing modes**: Hover or click to flip cards in training; type to test and get instant feedback in testing.
* **Dynamic backgrounds**: Language-specific hero images on the Home screen.
* **Glassmorphic UI**: Translucent header & footer with blur, custom font (Poppins), and yellow accent bars.
* **Smooth transitions**: Page animations powered by Framer Motion & `react-router-dom`.
* **Local page view counter**: Tracks views in the footer using `localStorage`.
* **CSS Modules** for scoped, maintainable styles.

---

## 🚀 Tech Stack

* [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* [React Router v6](https://reactrouter.com/)
* [Framer Motion](https://www.framer.com/motion/) for animations
* CSS Modules for styling
* Vanilla `localStorage` for local page view counts

---

## 📂 Project Structure

```
project-root/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   ├── flashcardData{languages}.js
│   │   │   └── languageCodes.js
│   │   └── styles/
│   │       ├── global.css
│   │       └── variables.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── LanguageSelector.jsx
│   │   └── flashcards/
│   │       ├── Flashcard.jsx
│   │       └── FlashcardGrid.jsx
│   ├── context/LanguageContext.jsx
│   ├── hooks/useFlashcards.js
│   ├── pages/
│   │   ├── HomePage/HomePage.jsx
│   │   ├── TrainingPage/TrainingPage.jsx
│   │   └── TestingPage/TestingPage.jsx
│   ├── routes/AppRoutes.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/sankar-mechengg/lang-port.git
   cd langport
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or yarn install
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   # opens http://localhost:5173
   ```

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

---

## 🔧 Customizing Flashcards

* Flashcard data lives in **`src/assets/data/`** as language-specific modules:

  * `flashcardDataJapanese.js` exports `japaneseFlashcards`
  * `flashcardDataTamil.js` exports `tamilFlashcards`
  * …
* The **master** `flashcardData` object in `src/assets/data/index.js` maps language names (e.g. `Japanese`) to their datasets.
* To **add a new language**:

  1. Create `flashcardDataXxx.js` with the same `{ categories: { Basic: [], Travel: [], … } }` shape.
  2. Add an entry in **`languageCodes.js`** mapping `LanguageName` → two-letter code.
  3. Import & compose it in the master `flashcardData`.

---

## 🎨 Theming & Styles

* **Global** CSS resets & variables in `src/assets/styles/global.css` & `variables.css`.
* **CSS Modules** scoped to each component (e.g., `Flashcard.module.css`).
* **Custom font**: Poppins loaded via `<link>` in `public/index.html`.
* **Glassmorphic** header & footer use `backdrop-filter: blur()`.

---

## 🔄 Animations

* **Page transitions**: Wrap `<Routes>` in `AnimatePresence` (Framer Motion).
* **Loader**: Optional spinner component in `components/common/Loader.jsx`.
* **Card flip**: CSS 3D transform on hover or test-mode click.

---

## 🔎 Analytics & Page Counts

* **Local counter**: increments `localStorage.pageViews` on each app mount.
* Displayed in footer as “Page Views (local): X”.
* To integrate a global counter, swap `localStorage` logic for API calls (e.g., Firebase, Supabase).

---

## 📄 License

MIT © Sankar Balasubramanian
LinkedIn: https://www.linkedin.com/in/sankar4/

---

*Enjoy using **LangPort** for your next adventure!*
