import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from 'react-tabs-navigation'

class App extends Component {
  render() {
    return (

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Star World</h2>
      <div className="App">
            <Tabs
            banner={{
            children: 'Content over the tabs!'
            }}
            tabs={[
                   {
                   children: () => (
                                    <div >
                                     Admin
                                    </div>
                                    ),
                   displayName: 'StarWeb'
                   },
                   {
                   children: () => (
                                    <div>
                                    Reports
                                    </div>
                                    ),
                   displayName: 'StarWorld'
                   }
                   ]}
            />






        </div>
        <p className="App-intro">
            <h1>Hello Swathi :) </h1>


        </p>
      </div>
    );
  }
}

export default App;
