import TelaPrincipal from "./pages/TelaPrincipal";
import PerfilEquipe from "./pages/PerfilEquipe";
import Viatura from "./pages/Viatura";

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
