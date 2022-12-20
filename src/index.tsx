import { createRoot } from 'react-dom/client';

import DefaultErrorBoundary from './default-error-boundary';
import { App } from './app';

import './styles.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>
);
