import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import pt from "./languages/pt.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  debug: true,
  resources: {
    en: en,
    pt: pt,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
