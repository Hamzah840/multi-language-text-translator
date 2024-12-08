import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [text, setText] = useState("English");

  return (
    <LanguageContext.Provider value={{ text, setText }}>
      {children}
    </LanguageContext.Provider>
  );
};
