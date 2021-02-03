import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/1HelloWorld';
import BounjourWorld from './components/2BounjourWorld';
import { HelloWorldAdv } from './components/3HelloWorldAdv';
import ClickedCount from './components/4Hook';
import MyName from './components/5Iam'
import Messeges from './components/6Messege'
import Subcribe from './components/6Subcribe'
import ChangeStatus from './components/7Bind';


function App() {
  return (
    <div className="App">
      <ChangeStatus></ChangeStatus>
    </div>
  );
}

export default App;
