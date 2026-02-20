import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
