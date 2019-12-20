import React from "react";
import {Textarea, Select} from "react-materialize";
import '../../../assets/css/style.css';

function ViaturaForm(){

  return (
    <form method="POST">
      <div className="container">
        <div className="row">
          <p className="center titulo">Cadastro de Unidades</p>
        </div>
        
        <div className="row">
          <Select label="Tipo de Unidade" onChange={function noRefCheck(){}} s={6}>
            <option value="1">Base</option>
            <option value="2">Unidade</option>
          </Select>
          <div className="col s6 input-field">
            <input id="nome" type="text" className="validate" />
            <label htmlFor="nome">Nome da Unidade</label>
          </div>
          <div className="col s3 input-field">
            <input id="cep" type="number" className="validate" />
            <label htmlFor="cep">CEP</label>
          </div>
          <div className="col s3 input-field">
            <input id="tipo_logradouro" type="number" className="validate" />
            <label htmlFor="tipo_logradouro">Tipo de Logradouro</label>
          </div>
          <div className="col s6 input-field">
            <input id="logradouro" type="text" className="validate" />
            <label htmlFor="logradouro">Logradouro</label>
          </div>
          <div className="col s3 input-field">
            <input id="numero" type="text" className="validate" />
            <label htmlFor="numero">Número</label>
          </div>
          <div className="col s3 input-field">
            <input id="complemento" type="text" className="validate" />
            <label htmlFor="complemento">Complemento</label>
          </div>
          <Select label="Estado/UF" onChange={function noRefCheck(){}} s={6}>
            <option>Estados</option>
          </Select>
          <div className="col s4 input-field">
            <input id="cidade" type="text" className="validate" />
            <label htmlFor="cidade">Cidade</label>
          </div>
          <div className="col s4 input-field">
            <input id="regiao" type="text" className="validate" />
            <label htmlFor="regiao">Região</label>
          </div>
          <div className="col s4 input-field">
            <input id="bairro" type="text" className="validate" />
            <label htmlFor="bairro">Bairro</label>
          </div>
          <Textarea label="Ponto de Referência" s={12}/>
        </div>
        
        <div className="row btn-salvar">
        <button class="btn waves-effect waves-light orange darken-4" type="submit" name="action">Salvar
          <i class="material-icons right">send</i>
        </button>

        <button class="btn waves-effect waves-light orange darken-4" type="reset">Limpar</button>
      </div>
    </div>
  </form>
  );
}

export default ViaturaForm;