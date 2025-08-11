import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import GlobalStyle from "./styles/GlobalStyle";
import { useState, useCallback } from "react";
import { HomePage } from "./components/HomePage/HomePage";

export function App() {
  const [isDark, setIsDark] = useState(false);

  // memoriza a função para não criar uma nova a cada render
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HomePage onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
