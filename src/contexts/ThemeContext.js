import { createContext } from "react";

export const themes = {
  dark: {
    backgroundColor: "#000000",
    canvas: "#1e1b34",
    color: "#ffffff",
  },
  light: {
    backgroundColor: "#ffffff",
    canvas: "#dddddd",
    color: "#000000",
  },
};

const ThemeContext = createContext({ theme: themes.dark, setTheme: () => {} });

export default ThemeContext;
