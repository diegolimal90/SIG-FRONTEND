import React, { Component } from 'react';
import '../../assets/css/style.css';
import { Link } from "react-router-dom";
import montarEquipe from '../../assets/images/montarEquipe-icone.png';
import viatura from '../../assets/images/viatura.png';
import profissional from '../../assets/images/profissional.png';
import cliente from '../../assets/images/cliente.png';
import unidade from '../../assets/images/unidade.png';
import captacao from '../../assets/images/captacao.png';
import usuario from '../../assets/images/usuario.png';
import paciente from '../../assets/images/paciente.png';
import perfilEquipe from '../../assets/images/perfilEquipe.png';
import Horario from '../../components/fragment/Horario';

class TelaPrincipal extends Component {

  render() {
    return (
      <>
        <div className="row m-0">
                <div className="col s6">
                    <h6>Painel de Controle</h6>
                </div>
                <div className="col s6">
                    <p className="right">Olá, Usuário  <Horario /></p>
                </div>
            </div>
            <hr />
        <div className="row botoes-menu ">
          <div className="col s2 p-0 offset-s2">
            <Link to="/montar-equipe"><button>
              <img className="icone mEquipe" src={montarEquipe} alt="Icone de montar equipes"/>
              <p className="center">Montar equipe</p>
            </button></Link>
          </div>
          <div className="col s2 p-0 offset-s1">
            <Link to="/dashboard/viatura/cadastrar"><button>
              <img className="icone" src={viatura} alt="Icone de viatura"/>
              <p>Viatura</p>
            </button></Link>
          </div>
          <div className="col s2 p-0 offset-s1">
            <Link to="/profissionais"><button>
              <img className="icone" src={profissional} alt="Icone de profissionais"/>
              <p>Profissionais</p>
            </button></Link>
          </div>
        </div>
        <div className="row botoes-menu ">
          <div className="col s2 p-0 offset-s2">
            <Link to="/clientes"><button>
              <img className="icone" src={cliente} alt="Icone de clientes"/>
              <p>Clientes</p>
            </button></Link>
          </div>
          <div className="col s2 p-0 offset-s1">
            <Link to="/dashboard/bases-e-unidades/cadastrar"><button>
              <img className="icone" src={unidade} alt="Icone de bases e unidades"/>
              <p>Bases e unidades</p>
            </button></Link>
          </div>
          <div className="col s2 p-0 offset-s1">
            <Link to="/captacao-de-chamados"><button>
              <img className="icone" src={captacao} alt="Icone de captação de chamados"/>
              <p>Captação de chamados</p>
            </button></Link>
          </div>
        </div>
        <div className="row botoes-menu">
          <div className="col s2 p-0 offset-s2">
            <Link to="/usuarios"><button>
              <img className="icone" src={usuario} alt="Icone de usuários"/>
              <p>Usuários</p>
            </button></Link>
          </div>
          <div className="col s2 p-0 offset-s1">
            <Link to="/pacientes"> <button>
              <img className="icone" src={paciente} alt="Icone de pacientes"/>
              <p>Pacientes</p>
            </button></Link>
          </div>
          <div className="col s2 p-0 offset-s1">
            <Link to="/dashboard/perfil-equipes/cadastrar"><button>
              <img className="icone" src={perfilEquipe} alt="Icone de perfil de equipes"/>
              <p>Perfril de equipe</p>
            </button></Link>
          </div>
        </div>
      </>
    )
  }

}
export default TelaPrincipal;