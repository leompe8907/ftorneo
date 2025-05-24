import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorProvider } from './Components/ErrorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorProvider>
    <App />
  </ErrorProvider>
);
