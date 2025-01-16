import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider theme={theme}>
    <ColorSchemeScript />
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
