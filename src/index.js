import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import App from './App'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={() => <h1>SignIn</h1>} />
            <Route path="/forgot" component={() => <h1>Forgot</h1>} />
            <App />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    </Router>, document.getElementById('root'));