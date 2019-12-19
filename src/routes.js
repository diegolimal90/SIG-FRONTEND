import React from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/fragment/Header";
import Footer from "./components/fragment/Footer";
import TelaPrincipal from "./pages/TelaPrincipal";
import PerfilEquipe from "./pages/PerfilEquipe";

const routes = [
    {
        path: "/painel",
        component: TelaPrincipal,
        routes: [
        ],
    },
    {
        path: "/perfil-de-equipe",
        component: PerfilEquipe
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}


function RouteRender() {
    return (
        <div>
            <Header />
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
            <Footer />
        </div>
    );
}

export default RouteRender;