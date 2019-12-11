import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/fragment/Header';
import Footer from './components/fragment/Footer';
import montarEquipe from './assets/images/montarEquipe-icone.png';
import viatura from './assets/images/viatura.png';
import profissional from './assets/images/profissional.png';
import cliente from './assets/images/cliente.png';
import unidade from './assets/images/unidade.png';
import captacao from './assets/images/captacao.png';
import usuario from './assets/images/usuario.png';
import paciente from './assets/images/paciente.png';
import perfilEquipe from './assets/images/perfilEquipe.png';

const routes = [
  {
    path: "/montar-equipe",
    component: montarEquipe
  },
  {
    path: "/viatura",
    component: viatura,
  },
  {
    path: "/profissionais",
    component: profissional,
  },
  {
    path: "/clientes",
    component: cliente,
  },
  {
    path: "/bases-e-unidades",
    component: unidade,
  },
  {
    path: "/captacao-de-chamados",
    component: captacao,
  },
  {
    path: "/usuarios",
    component: usuario,
  },
  {
    path: "/pacientes",
    component: paciente,
  },
  {
    path: "/perfil-de-equipes",
    component: perfilEquipe,
  },
];



function App() {
  return (
    <Router>
    <div>
      <Header />
      <div className="container">
        <div className="row m-0">
          <p className="center titulo">Painel administrativo</p>
        </div>
        <div className="row botoes-menu m-0">
          <div className="col s2 p-0 offset-s3 center">
            <Link to="/montar-equipe"><button>
              <img className="icone" src={montarEquipe} />
              <p className="center">Montar equipe</p>
            </button></Link>
          </div>
          <div className="col s2 p-0">
          <Link to="/viatura"><button>
            <img className="icone" src={viatura} />
              <p>Viatura</p>
            </button></Link>
          </div>
          <div className="col s2 p-0">
          <Link to="/profissionais"><button>
            <img className="icone" src={profissional} />
              <p>Profissionais</p>
            </button></Link>
          </div>
        </div>
        <div className="row botoes-menu m-0">
          <div className="col s2 p-0 offset-s3">
          <Link to="/clientes"><button>
              <img className="icone" src={cliente} />
              <p>Clientes</p>
            </button></Link>
          </div>
          <div className="col s2 p-0">
          <Link to="/bases-e-unidades"><button>
              <img className="icone" src={unidade} />
              <p>Bases e unidades</p>
            </button></Link>
          </div>
          <div className="col s2 p-0">
          <Link to="/captacao-de-chamados"><button>
              <img className="icone" src={captacao} />
              <p>Captação de chamados</p>
            </button></Link>
          </div>
        </div>
        <div className="row botoes-menu m-0">
          <div className="col s2 p-0 offset-s3">
          <Link to="/usuarios"><button>
              <img className="icone" src={usuario} />
              <p>Usuários</p>
            </button></Link>
          </div>
          <div className="col s2 p-0">
          <Link to="/pacientes"> <button>
              <img className="icone" src={paciente} />
              <p>Pacientes</p>
            </button></Link>
          </div>
          <div className="col s2 p-0">
          <Link to="/perfil-de-equipes"><button>
            <img className="icone" src={perfilEquipe} />
              <p>Perfril de equipe</p>
            </button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
