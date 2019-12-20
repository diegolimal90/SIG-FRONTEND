import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './assets/css/style.css';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>SignIn</h1>} />
            <Route path="/forgot" component={() => <h1>Forgot</h1>} />
            <App />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    </HashRouter>, document.getElementById('root'));