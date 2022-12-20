import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import DefaultErrorBoundary from './default-error-boundary';

import './styles.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>
);
