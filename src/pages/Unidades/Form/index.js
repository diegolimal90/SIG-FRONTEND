import React from "react";
import {TextInput,Textarea, Select, Button, Icon} from "react-materialize";
import OptionUF from "./options.js";
import '../../../assets/css/style.css';

function ViaturaForm(){

  return (
    <form method="POST">
      <div className="container">
        <div className="row">
          <p className="center titulo">Cadastro de Unidades</p>
        </div>
        
        <div className="row">
          <Select label="Tipo de Unidade" onChange={function noRefCheck(){}} s={6} required>
            <option value="1">Base</option>
            <option value="2">Unidade</option>
          </Select>
          <TextInput
            id="nome"
            name="nome"
            s="6"
            type="text"
            maxlength="65"
            required
            validate="true"
            label="Nome Unidade"
          />
          <TextInput
            id="cep"
            name="cep"
            s="3"
            type="number"
            min="0"
            max="99999999"
            maxlength="8"
            required
            validate="true"
            label="CEP"
          />
          <TextInput
            id="tipo_logradouro"
            name="tipo_logradouro"
            s="3"
            type="text"
            maxlength="12"
            required
            validate="true"
            label="Tipo Logradouro"
          />
          <TextInput
            id="logradouro"
            name="logradouro"
            s="6"
            type="text"
            maxlength="50"
            required
            validate="true"
            label="Logradouro"
          />
          <TextInput
            id="numero"
            name="numero"
            s="3"
            type="number"
            maxlength="10"
            min="0"
            max="9999999999"
            required
            validate="true"
            label="Número"
          />
          <TextInput
            id="complemento"
            name="complemento"
            s="3"
            type="text"
            maxlength="50"
            validate="true"
            label="Complemento"
          />
          <Select label="Estado/UF" onChange={function noRefCheck(){}} s="6" required>
            <OptionUF />
          </Select>
          <TextInput
            id="cidade"
            name="cidade"
            s="4"
            type="text"
            maxlength="50"
            required
            validate="true"
            label="Cidade"
          />
          <TextInput
            id="regiao"
            name="regiao"
            s="4"
            type="text"
            maxlength="30"
            required
            validate="true"
            label="Região"
          />
          <TextInput
            id="bairro"
            name="bairro"
            s="4"
            type="text"
            maxlength="30"
            required
            validate="true"
            label="Bairro"
          />
          <Textarea 
            label="Ponto de Referência" 
            s={12}
          />
        </div>
        
      <div className="row btn-salvar">
        <Button
          node="button"
          type="submit"
          waves="light"
          className="btn orange darken-4"
          name="action"
        >
          Salvar
        <Icon right>
          send
        </Icon>
        </Button>
          
        <Button
          node="button"
          type="reset"
          waves="light"
          className="btn orange darken-4"
        >
          Limpar
        <Icon right>
          delete
        </Icon>
        </Button>
      </div>
    </div>
  </form>
  );
}

export default ViaturaForm;