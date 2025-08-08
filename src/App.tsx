import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";
import { HomePage } from "./components/HomePage/HomePage";

export function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HomePage onToggleTheme={() => setIsDark(!isDark)} />
    </ThemeProvider>
  );
}
