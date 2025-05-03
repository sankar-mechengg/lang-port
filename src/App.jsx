import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
