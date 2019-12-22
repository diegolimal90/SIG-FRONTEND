import React, { useState } from 'react';
import api from '../../../service/api';
import { TextInput, Button, Icon, Toast } from "react-materialize";
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';

function Viatura({ history }) {
    const [ano, setAno] = useState('');
    const [placa, setPlaca] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [quilometragemAtual, setQuilometragemAtual] = useState('');
    const [quilometragemInicial, setQuilometragemInicial] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

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

        return (
            <Toast
            options={{
                html: 'Viatura cadastrada com sucesso!',
                completeCallback: history.push('/dashboard')
            }}
            >
                Toast
            </Toast>
        );
    }

    return (
        <form id="viatura" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <p className="center titulo">Cadastro da Viatura</p>
                </div>
                <div className="row">
                    <TextInput
                        id="ano"
                        name="ano"
                        s={12}
                        m={6}
                        type="number"
                        min="1900"
                        max="3000"
                        size="4"
                        required
                        validate={true}
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
                        s={12}
                        m={6}
                        type="text"
                        maxLength={8}
                        required
                        validate={true}
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
                        s={12}
                        m={12}
                        type="text"
                        required
                        validate={true}
                        placeholder="Ford"
                        title="Digite a fabricante do veiculo"
                        label="Fabricante"
                        value={fabricante}
                        onChange={event => setFabricante(event.target.value)}
                    />
                    <TextInput
                        id="quilometragem_atual"
                        name="quilometragem_atual"
                        s={12}
                        m={6}
                        type="number"
                        required
                        validate={true}
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
                        s={12}
                        m={6}
                        type="number"
                        required
                        validate={true}
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
                        className="btn orange darken-4"
                        name="action"
                    >
                    Salvar
                    <Icon right>
                        save
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
                            node="button"
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

export default Viatura;