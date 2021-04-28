import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { TiendaProvider } from './context/TiendaProvider';

ReactDOM.render(
  <React.StrictMode>
    <TiendaProvider>
      <App />
    </TiendaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);