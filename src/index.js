import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import onDeviceReady from './initializationUtils';
import 'semantic-ui-css/semantic.min.css';
import './css/SmsButton.css'

const renderReactDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
    onDeviceReady();
  }, false);
} else {
  renderReactDom();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();