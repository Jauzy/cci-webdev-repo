import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);