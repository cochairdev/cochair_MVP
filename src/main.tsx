import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './i18n/config.ts';
import {store} from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
