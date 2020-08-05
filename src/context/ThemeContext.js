import { createContext } from "react";

export const themes = {
  dark: { backgroundColor: "black", color: "white", type: "dark" },
  light: { backgroundColor: "white", color: "black", type: "light" },
};

const ThemeContext = createContext({ theme: themes.dark, setTheme: () => {} });

export default ThemeContext;
