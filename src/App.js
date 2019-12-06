import React from 'react';
import Header from './components/fragment/Header';


function App() {
  return (
    <div>
    <Header/>
    <div className="container">
      <div className="row">
        <p className="center titulo">Painel administrativo</p>        
      </div>
      <div className="row botoes-menu">
        <div className="col s4">
          <button>

          </button>
        </div>
        <div className="col s4"></div>
        <div className="col s4"></div>
        <div className="col s4"></div>
        <div className="col s4"></div>
        <div className="col s4"></div>
      </div>
    </div>
    <footer>
      <div className="row">
          <p className="white-text right-align texto-sigma">SIGMA - Todos os direitos reservados</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
