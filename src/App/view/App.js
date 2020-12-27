import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider, IntlContext } from 'react-intl';
import { zh_CN, en_US } from '../locale';
import logo from '../images/logo.svg';
import './app.css';

class App extends Component {

  static contextType = IntlContext;

  constructor(props, context) {
    super(props);
    this.locale = context.locale || 'zh';
    this.messages = this.locale === 'zh' ? zh_CN : en_US;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.messages['learn_react']}
          </a>
        </header>
      </div>
    )
  }
}

export default connect()(App);