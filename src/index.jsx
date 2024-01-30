import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
