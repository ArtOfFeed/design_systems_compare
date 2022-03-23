import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './issue-view/App';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
