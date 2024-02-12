import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store/store.js';
import { Toaster } from 'react-hot-toast';

export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster
          position="top-right"
          containerStyle={{
            top: 80,
            zIndex: 9999999999999,
          }}
        />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
