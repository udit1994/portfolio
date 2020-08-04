import React, { createContext } from "react";

export const themes = {
  dark: { backgroundColor: "black", color: "white" },
  light: { backgroundColor: "white", color: "black" },
};

const ThemeContext = createContext({ theme: themes.dark, setTheme: () => {} });

export default ThemeContext;
