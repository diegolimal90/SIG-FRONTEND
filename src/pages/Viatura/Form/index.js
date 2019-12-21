import React from 'react';
import { TextInput, Button, Icon } from "react-materialize";
import '../../../assets/css/style.css';

function Viatura() {
    return (
        <form method="POST">
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
                        required
                        validate="true"
                        placeholder="2013"
                        label="Ano"
                    />
                    <TextInput
                        id="placa"
                        name="placa"
                        s="6"
                        type="text"
                        required
                        validate="true"
                        placeholder="API-1307"
                        pattern="\\d{3}-\d{4}"
                        title="Digite a placa com traço, exemplo: API-1337"
                        label="Placa"
                    />
                    <TextInput
                        id="quilometragem_atual"
                        name="quilometragem_atual"
                        s="6"
                        type="number"
                        required
                        validate="true"
                        placeholder="1482"
                        label="Quilometragem Atual"
                    />
                    <TextInput
                        id="quilometragem_inicial"
                        name="quilometragem_inicial"
                        s="6"
                        type="number"
                        required
                        validate="true"
                        placeholder="1023"
                        label="Quilometragem Inicial"
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