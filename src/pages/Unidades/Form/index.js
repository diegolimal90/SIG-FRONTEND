import React , {useState} from "react";
import {TextInput,Textarea, Select, Button, Icon} from "react-materialize";
import {Link} from "react-router-dom";
import OptionUF from "./options.js";
import api from "../../../service/api";

function UnidadeForm(){
  const [tipo,setTipo] = useState('');
  const [nome,setNome] = useState('');
  const [cep,setCep] = useState('');
  const [tipoLogradouro,setTipoLogradouro] = useState('');
  const [logradouro,setLogradouro] = useState('');
  const [numero,setNumero] = useState('');
  const [complemento,setComplemento] = useState('');
  const [estado,setEstado] = useState('');
  const [cidade,setCidade] = useState('');
  const [regiao,setRegiao] = useState('');
  const [bairro,setBairro] = useState('');
  const [referencia,setReferencia] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    let data = JSON.stringify({
      tipo: tipo,
      nome: nome,
      cep: cep,
      tipo_logradouro: tipoLogradouro,
      logradouro: logradouro,
      numero: numero,
      complemento: complemento,
      estado: estado,
      cidade: cidade,
      regiao: regiao,
      bairro: bairro,
      referencia: referencia,
      usuario_cadastro : 1
    })

    console.table(data);

    await api.post('/unidades/', data,{
      headers:{'Content-Type': 'application/json'}
    });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <p className="center titulo">Cadastro de Unidades</p>
        </div>
        
        <div className="row">
          <Select label="Tipo de Unidade" value={tipo} onChange={event => setTipo(event.target.value)} s={6} required>
            <option value="" disabled>Selecione...</option>
            <option value="base">Base</option>
            <option value="unidade">Unidade</option>
          </Select>
          <TextInput
            id="nome"
            name="nome"
            s={6}
            type="text"
            maxLength={65}            
            required
            validate={true}
            label="Nome Unidade"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
          <TextInput
            id="cep"
            name="cep"
            s={3}
            type="number"
            min="0"
            max="99999999"
            maxLength={8}           
            required
            validate={true}
            label="CEP"
            value={cep}
            onChange={event => setCep(event.target.value)}
          />
          <TextInput
            id="tipo_logradouro"
            name="tipo_logradouro"
            s={3}
            type="text"
            maxLength={12}            
            required
            validate={true}
            label="Tipo Logradouro"
            value={tipoLogradouro}
            onChange={event => setTipoLogradouro(event.target.value)}
          />
          <TextInput
            id="logradouro"
            name="logradouro"
            s={6}
            type="text"
            maxLength={50}            
            required
            validate={true}
            label="Logradouro"
            value={logradouro}
            onChange={event => setLogradouro(event.target.value)}
          />
          <TextInput
            id="numero"
            name="numero"
            s={3}
            type="number"
            maxLength={10}            
            min="0"
            max="9999999999"
            required
            validate={true}
            label="Número"
            value={numero}
            onChange={event => setNumero(event.target.value)}
          />
          <TextInput
            id="complemento"
            name="complemento"
            s={3}
            type="text"
            maxLength={50}            
            validate={true}
            label="Complemento"
            value={complemento}
            onChange={event => setComplemento(event.target.value)}
          />
          <Select label="Estado/UF" value={estado} onChange={event => setEstado(event.target.value)} s={6} required>
            <option value="" disabled>Selecione...</option>
            <OptionUF />
          </Select>
          <TextInput
            id="cidade"
            name="cidade"
            s={4}
            type="text"
            maxLength={50}           
            required
            validate={true}
            label="Cidade"
            value={cidade}
            onChange={event => setCidade(event.target.value)}
          />
          <TextInput
            id="regiao"
            name="regiao"
            s={4}
            type="text"
            maxLength={30}            
            required
            validate={true}
            label="Região"
            value={regiao}
            onChange={event => setRegiao(event.target.value)}
          />
          <TextInput
            id="bairro"
            name="bairro"
            s={4}
            type="text"
            maxLength={30}
            required
            validate={true}
            label="Bairro"
            value={bairro}
            onChange={event => setBairro(event.target.value)}
          />
          <Textarea 
            label="Ponto de Referência" 
            s={12}
            name="referencia"
            id="referencia"
            maxLength={200}
            value={referencia}
            onChange={event => setReferencia(event.target.value)}
          />
        </div>
        
      <div className="row btn-salvar">
        <Button
          node="button"
          type="submit"
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
          className="btn orange darken-4"
        >
          Limpar
        <Icon right>
          delete
        </Icon>
        </Button>
        <Link to="/dashboard">
          <Button
            waves="light"
            className="btn orange darken-4" 
          >
            Cancelar
            <Icon right>
              cancel
            </Icon>
          </Button>
        </Link>
      </div>
    </div>
  </form>
  );
}

export default UnidadeForm;