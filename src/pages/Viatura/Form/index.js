import React, { useState } from 'react';
import api from '../../../service/api';
import { TextInput, Button, Icon } from "react-materialize";
import '../../../assets/css/style.css';

function Viatura({ history }) {
    const [ano, setAno] = useState('');
    const [placa, setPlaca] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [quilometragemAtual, setQuilometragemAtual] = useState('');
    const [quilometragemInicial, setQuilometragemInicial] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        //const user_id = localStorage.getItem('user');

        data.append('ano', ano);
        data.append('placa', placa);
        data.append('fabricante', fabricante);
        data.append('quilometragemAtual', quilometragemAtual);
        data.append('quilometragemInicial', quilometragemInicial);


        let pacote = JSON.stringify({
            'ano': ano,
            'placa': placa,
            'fabricante': fabricante,
            'quilometragem_atual': quilometragemAtual,
            'quilometragem_inicial': quilometragemInicial
          })

        await api.post('/viaturas/', pacote, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // await api.post('/viaturas', data, {
        // headers: { user_id }
        // });
        
        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <p className="center titulo">Cadastro da Viatura</p>
                </div>
                <div className="row">
                    <TextInput
                        id="ano"
                        name="ano"
                        s="6"
                        type="number"
                        min="1900"
                        max="2100"
                        size="4"
                        required
                        validate="true"
                        placeholder="2013"
                        pattern="\[0-9]"
                        title="Digite o ano do veiculo"
                        label="Ano"
                        value={ano}
                        onChange={event => setAno(event.target.value)}
                    />
                    <TextInput
                        id="placa"
                        name="placa"
                        s="6"
                        type="text"
                        required
                        validate="true"
                        placeholder="API-1307"
                        pattern="\D{3}-\d{4}"
                        title="Digite a placa com traço, exemplo: API-1337"
                        label="Placa"
                        value={placa}
                        onChange={event => setPlaca(event.target.value)}
                    />
                    <TextInput
                        id="fabricante"
                        name="fabricante"
                        s="12"
                        type="text"
                        required
                        validate="true"
                        placeholder="Ford"
                        title="Digite a fabricante do veiculo"
                        label="Fabricante"
                        value={fabricante}
                        onChange={event => setFabricante(event.target.value)}
                    />
                    <TextInput
                        id="quilometragem_atual"
                        name="quilometragem_atual"
                        s="6"
                        type="number"
                        required
                        validate="true"
                        placeholder="1482"
                        pattern="\[0-9]"
                        title="Digite o quilometragem atual do veiculo"
                        label="Quilometragem Atual"
                        value={quilometragemAtual}
                        onChange={event => setQuilometragemAtual(event.target.value)}
                    />
                    <TextInput
                        id="quilometragem_inicial"
                        name="quilometragem_inicial"
                        s="6"
                        type="number"
                        required
                        validate="true"
                        placeholder="1023"
                        pattern="\[0-9]"
                        title="Digite o quilometragem inicial do veiculo"
                        label="Quilometragem Inicial"
                        value={quilometragemInicial}
                        onChange={event => setQuilometragemInicial(event.target.value)}
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

export default Viatura;