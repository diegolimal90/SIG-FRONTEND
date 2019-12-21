import React, { Component } from 'react';
import '../../assets/css/style.css';
import {Select, Button, Icon, TextInput} from "react-materialize";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function PerfilEquipe() {
    return (
        <div className="container">
            <div className="row">
                <p className="center titulo">Cadastro do tipo perfil de equipes</p>
            </div>
            <div className="row">
                <TextInput
                    id="nome"
                    name="nome"
                    s="8"
                    type="text"
                    maxlength="65"
                    required
                    validate="true"
                    label="Nome Perfil"
                />
                <TextInput
                    id="sigla"
                    name="sigla"
                    s="4"
                    type="text"
                    maxlength="5"
                    required
                    validate="true"
                    label="Sigla Perfil"
                />
                <TextInput
                    id="qtdProfissional"
                    name="qtdProfissional"
                    s="2"
                    type="number"
                    maxlength="10"
                    min="0"
                    max="9999999999"
                    required
                    validate="true"
                    label="Qtd Profissionais"
                />
                <Select multiple label="Tipo Profissional" onChange={function noRefCheck() { }} s={10} className="validate" >
                    <option value="Motorista">Motorista</option>
                    <option value="Técnico em Enfermagem">Técnico em Enfermagem</option>
                    <option value="Enfermeiro">Enfermeiro</option>
                    <option value="Médico Generalista">Médico Generalista</option>
                    <option value="Médico Pediatra/Neonatal">Médico Pediatra/Neonatal</option>
                </Select>
                <TextInput
                    id="qtdEquipamentos"
                    name="qtdEquipamentos"
                    s="2"
                    type="number"
                    maxlength="10"
                    min="0"
                    max="9999999999"
                    required
                    validate="true"
                    label="Qtd Equipamentos"
                />
                <TextInput
                    id="equipamentos"
                    name="equipamentos"
                    s="8"
                    type="text"
                    maxlength="1000"
                    required
                    validate="true"
                    label="Equipamentos"
                />
                <TextInput
                    id="veiculo"
                    name="veiculo"
                    s="2"
                    type="text"
                    maxlength="50"
                    required
                    validate="true"
                    label="Veículo"
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
            </div>
        </div>
    );
}

export default PerfilEquipe;