import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'; 
import HomeComponent from './components/Home';
import CVComponent from './components/CV';
import NavigationBar from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
      
  );
}

export default App;
