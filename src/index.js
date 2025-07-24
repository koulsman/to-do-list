import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai'; 

const theme = createTheme({
  /** Put your mantine theme override here */
  Button : {
    color: "#00cccc", /* Αφαιρέθηκαν τα quotes */
    backgroundColor: 'black'
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider defaultColorScheme="dark">
    <React.StrictMode>
      <BrowserRouter> {/* Τοποθετούμε το App μέσα στο BrowserRouter */}
      <Provider >
        <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
