import React from 'react';
import { Route } from 'react-router-dom';
import ViaturaForm from '../pages/Viatura/Form';
import TelaPrincipal from '../pages/TelaPrincipal';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props => (
//             <Component {...props} />
//         )
//         }
//     />
// )

const SubRoutes = () => (
    <div>
        <Route path="/dashboard" component={TelaPrincipal} />
        <Route path="/dashboard/viatura/form" component={ViaturaForm} />
    </div>
)

export default SubRoutes;