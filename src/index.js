// Helps connect our React Application to our /public/index.html
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
