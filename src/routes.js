import TelaPrincipal from "./pages/TelaPrincipal";
import PerfilEquipe from "./pages/PerfilEquipe";
import ViaturaForm from "./pages/Viatura/Form";

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
