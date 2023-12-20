import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraComponent } from './moduls/common/components/chakra/ChakraComponent.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraComponent >
        <App />
    </ChakraComponent>
  </React.StrictMode>
);
