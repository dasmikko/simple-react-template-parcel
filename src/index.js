console.log("hello world");

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './css/index.scss';

const App = () => (
  <div className="App">
    <img className="logo" src={logo} alt="React Logo" />
    <h1 className="title">Welcome to the World of React and Parcel</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}