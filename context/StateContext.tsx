import { createContext } from "react";

interface ContextProps {
  language: string;
  
  //   methods
  changeLanguage: (lang: string) => void;
}
export const StateContext = createContext({} as ContextProps);
