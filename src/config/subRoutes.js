import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViaturaForm from '../pages/Viatura/Form';
import UnidadeForm from '../pages/Unidades/Form';
import TelaPrincipal from '../pages/TelaPrincipal';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => (
            <Component {...props} />
        )
        }
    />
)

const SubRoutes = () => (
    <PrivateRoute path="/dashboard" component={() => <h1>Principal</h1>}>
        <Switch>
            <PrivateRoute exact path="/dashboard/" component={TelaPrincipal} />
            <PrivateRoute exact path="/dashboard/viatura/cadastrar" component={ViaturaForm} />
            <PrivateRoute exact path="/dashboard/bases-e-unidades/cadastrar" component={UnidadeForm} />
        </Switch>
    </PrivateRoute>
)

export default SubRoutes;