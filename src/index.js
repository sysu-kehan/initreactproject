import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import store from './store.js';
import { view as App } from './App';

import './index.css';

function Entry() {
  return (
    <Provider store={store}>
      <IntlProvider locale={'zh'}>
        <App />
      </IntlProvider>
    </Provider>
  );
}

ReactDOM.render(<Entry />, document.getElementById('root'));