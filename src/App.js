import React, { useState } from "react";

import Home from "components/Home";

import ThemeContext, { themes } from "context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
