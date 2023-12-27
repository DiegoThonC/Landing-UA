import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { I18nextProvider } from 'react-i18next';
import global_ua from './i18n/ua/global.json';
import global_en from './i18n/en/global.json';
import global_es from './i18n/es/global.json';
import i18next from 'i18next';

const lang = localStorage.getItem('lang') ?? localStorage.setItem('lang', 'ua');

i18next.init({
  interpolation: { escapeValue: false },
  lng: lang ?? 'ua',
  resources: {
    ua: {
      global: global_ua
    },
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
