import TelaPrincipal from "./pages/TelaPrincipal";
import ViaturaForm from "./pages/Viatura/Form";
import Main from "./pages/Main";

const routes = [
    {
        path: "/painel",
        component: TelaPrincipal
    },
    {
        path: "/",
        component: Main
    },
    {
        path: "/painel/viatura",
        component: ViaturaForm
    }
];

export default routes;