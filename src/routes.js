import React from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/fragment/Header";
import Footer from "./components/fragment/Footer";
import TelaPrincipal from "./pages/TelaPrincipal";

const routes = [
    {
        path: "/painel",
        component: TelaPrincipal,
        routes: [
            {
                path: "/painel/viatura",
                component: "App"
            },
            {
                path: "/painel/exemple1",
                component: "App"
            }
        ],
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
            <div className="row m-0">
                <div className="col s6">
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RouteRender;