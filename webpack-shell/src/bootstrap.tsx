import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

const rootApp = document.getElementById('root');

const root = createRoot(rootApp);
root.render(<App />);
