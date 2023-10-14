import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

//2. defination Area 
function ann(){
  return '#FFA500'
}
var clr = ann();

export const ThemeProvider2 = createContext();

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#E52626',
    },
    secondary: {
      main: '#008000', 
    },
    success: {
       main: '#7b1fa2'
    },
  },
});

let clr2 = '#0000ff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ThemeProvider theme={customTheme}>
      <ThemeProvider2.Provider value={clr2}>
        <App myclr={clr}/>
      </ThemeProvider2.Provider>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
