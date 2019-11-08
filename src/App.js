import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/assets/css/style.css';
import Router from './router';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={Router}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
