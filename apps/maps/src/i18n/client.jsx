"use client";

import { getOptions, languages } from "@/i18n/settings";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const runsOnServerSide = typeof window === "undefined";

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
    interpolation: { escapeValue: false },
  });

// export function useTranslation(lng, ns, options) {
//   const ret = useTranslationOrg(ns, options)
//   const { i18n } = ret
//   if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
//     i18n.changeLanguage(lng)
//   } else {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//       if (activeLng === i18n.resolvedLanguage) return
//       setActiveLng(i18n.resolvedLanguage)
//     }, [activeLng, i18n.resolvedLanguage])
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//       if (!lng || i18n.resolvedLanguage === lng) return
//       i18n.changeLanguage(lng)
//     }, [lng, i18n])
//   }
//   return ret
// }
