// import { getOptions } from "@/i18n/settings";
// import { createInstance } from "i18next";
// import { initReactI18next } from "react-i18next/initReactI18next";

// const initI18next = async (lng, ns) => {
//   const i18nInstance = createInstance();
//   await i18nInstance.use(initReactI18next).init(getOptions(lng, ns));
//   return i18nInstance;
// };

// export async function useTranslation(lng, ns, options = {}) {
//   const i18nextInstance = await initI18next(lng, ns);
//   return {
//     t: i18nextInstance.getFixedT(
//       lng,
//       Array.isArray(ns) ? ns[0] : ns,
//       options.keyPrefix
//     ),
//     i18n: i18nextInstance,
//   };
// }
