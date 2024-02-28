import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-0k6qlszkxhkmwlna.us.auth0.com"
    clientId="5JQrf3OPMEq6PDckf6OCgEjY2MlioKyS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <App />
    </Provider>
  
  </Auth0Provider>,
)
