import React from 'react';
import { Link } from "react-router-dom";
import Horario from '../fragment/Horario';
import Header from '../fragment/Header';
import Footer from '../fragment/Footer';
import montarEquipe from '../../assets/images/montarEquipe-icone.png';
import viatura from '../../assets/images/viatura.png';
import profissional from '../../assets/images/profissional.png';
import cliente from '../../assets/images/cliente.png';
import unidade from '../../assets/images/unidade.png';
import captacao from '../../assets/images/captacao.png';
import usuario from '../../assets/images/usuario.png';
import paciente from '../../assets/images/paciente.png';
import perfilEquipe from '../../assets/images/perfilEquipe.png';


function Painel() {
    return (
        <div>
            <Header />
            <div className="row m-0">
                <div className="col s6">
                    <h6>Painel de Controle</h6>
                </div>
                <div className="col s6">
                    <p className="right">Olá, Usuário  <Horario /></p>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row botoes-menu">
                    <div className="col s2 p-0 offset-s2 ">
                        <Link to="/montar-equipe"><button>
                            <img className="icone" src={montarEquipe} />
                            <p className="center">Montar equipe</p>
                        </button></Link>
                    </div>
                    <div className="col s2 offset-s1 p-0">
                        <Link to="/viatura"><button>
                            <img className="icone" src={viatura} />
                            <p>Viatura</p>
                        </button></Link>
                    </div>
                    <div className="col s2 offset-s1 p-0">
                        <Link to="/profissionais"><button>
                            <img className="icone" src={profissional} />
                            <p>Profissionais</p>
                        </button></Link>
                    </div>
                </div>
                <div className="row botoes-menu">
                    <div className="col s2 p-0 offset-s2">
                        <Link to="/clientes"><button>
                            <img className="icone" src={cliente} />
                            <p>Clientes</p>
                        </button></Link>
                    </div>
                    <div className="col s2 offset-s1 p-0">
                        <Link to="/bases-e-unidades"><button>
                            <img className="icone" src={unidade} />
                            <p>Bases e unidades</p>
                        </button></Link>
                    </div>
                    <div className="col s2 offset-s1 p-0">
                        <Link to="/captacao-de-chamados"><button>
                            <img className="icone" src={captacao} />
                            <p>Captação de chamados</p>
                        </button></Link>
                    </div>
                </div>
                <div className="row botoes-menu">
                    <div className="col s2 p-0 offset-s2">
                        <Link to="/usuarios"><button>
                            <img className="icone" src={usuario} />
                            <p>Usuários</p>
                        </button></Link>
                    </div>
                    <div className="col s2 offset-s1 p-0">
                        <Link to="/pacientes"> <button>
                            <img className="icone" src={paciente} />
                            <p>Pacientes</p>
                        </button></Link>
                    </div>
                    <div className="col s2 offset-s1 p-0">
                        <Link to="/perfil-de-equipes"><button>
                            <img className="icone" src={perfilEquipe} />
                            <p>Perfril de equipe</p>
                        </button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
  

export default Painel;