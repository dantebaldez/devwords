import React from 'react';
import ReactDOM from 'react-dom/client';
import { App}  from './App';
import { ThemeProviderCustom } from './themes/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <App />
    </ThemeProviderCustom>
  </React.StrictMode>,
);
