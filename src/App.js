import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import Form from './components/Form'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}


export default App;
