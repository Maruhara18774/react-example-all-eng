import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/1HelloWorld';
import BounjourWorld from './components/2BounjourWorld';
import {HelloWorldAdv} from './components/3HelloWorldAdv'



function App() {
  return (
    <div className="App">
      <HelloWorld></HelloWorld>
      <BounjourWorld></BounjourWorld>
      <HelloWorldAdv></HelloWorldAdv>
    </div>
  );
}

export default App;
