import { ThemeProvider } from 'styled-components';
import { useTheme } from './themes/ThemeContext';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div style={{ padding: '2rem' }}>
        <h1>DevWords 🚀</h1>
        <button onClick={toggleTheme}>Alternar Tema</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
