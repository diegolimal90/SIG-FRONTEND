import React from 'react';
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



function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row m-0">
          <p className="center titulo">Painel administrativo</p>
        </div>
        <div className="row botoes-menu m-0">
          <div className="col s2 p-0 offset-s3 center">
            <button>
              <img className="icone" src={montarEquipe} />
              <p className="center">Montar equipe</p>
            </button>
          </div>
          <div className="col s2 p-0">
            <button>
              <img className="icone" src={viatura} />
              <p>Viatura</p>
            </button>
          </div>
          <div className="col s2 p-0">
            <button>
              <img className="icone" src={profissional} />
              <p>Profissionais</p>
            </button>
          </div>
        </div>
        <div className="row botoes-menu m-0">
          <div className="col s2 p-0 offset-s3">
            <button>
              <img className="icone" src={cliente} />
              <p>Clientes</p>
            </button>
          </div>
          <div className="col s2 p-0">
            <button>
              <img className="icone" src={unidade} />
              <p>Bases e unidades</p>
            </button>
          </div>
          <div className="col s2 p-0">
            <button>
              <img className="icone" src={captacao} />
              <p>Captação de chamados</p>
            </button>
          </div>
        </div>
        <div className="row botoes-menu m-0">
          <div className="col s2 p-0 offset-s3">
            <button>
              <img className="icone" src={usuario} />
              <p>Usuários</p>
            </button>
          </div>
          <div className="col s2 p-0">
            <button>
              <img className="icone" src={paciente} />
              <p>Pacientes</p>
            </button>
          </div>
          <div className="col s2 p-0">
            <button>
            <img className="icone" src={perfilEquipe} />
              <p>Perfril de equipe</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
