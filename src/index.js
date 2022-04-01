import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './redux/store'
import { Provider } from 'react-redux'

console.log(createTheme());
const theme = createTheme({
  palette: {
    text: {
      disabled: '#e0e0e0'
    }
  }
})

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

