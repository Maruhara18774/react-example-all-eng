import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/1HelloWorld';
import BounjourWorld from './components/2BounjourWorld';
import { HelloWorldAdv } from './components/3HelloWorldAdv';
import ClickedCount from './components/4Hook';
import MyName from './components/5Iam';
import Messeges from './components/6Messege';
import Subcribe from './components/6Subcribe';
import ChangeStatus from './components/7Bind';
import ObjParent from './components/8ParentComponent';
import AlienMessege from './components/9Condition';


function App() {
  return (
    <div className="App">
      <AlienMessege></AlienMessege>
      <AlienMessege alien="Kola"></AlienMessege>
      <AlienMessege></AlienMessege>
    </div>
  );
}

export default App;
