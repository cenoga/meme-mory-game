import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient } from 'react-query';
import App from './App';

const container = document.getElementById('root');
// const root = createRoot(container!);
const queryClient = new QueryClient();
ReactDOM.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>,
  document.getElementById("root")
);