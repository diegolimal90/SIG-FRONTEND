import React from 'react';
import './assets/css/style.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/ui/Login';
import Painel from './components/ui/Painel';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/painel" exact component={Painel}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
