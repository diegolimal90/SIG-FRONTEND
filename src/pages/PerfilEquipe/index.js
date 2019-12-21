import React, { Component } from 'react';
import '../../assets/css/style.css';
import {Textarea, Select} from "react-materialize";

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

const names = [
    'Motorista',
    'Técnico em Enfermagem',
    'Enfermeiro',
    'Médico Generalista',
    'Médico Pediatra/Neonatal',
];

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
                <div className="col s8 input-field">
                    <input id="nomePerfil" type="text" class="validate" />
                    <label for="nomePerfil">Nome do perfil</label>
                </div>
                <div className="col s4 input-field">
                    <input id="siglaPerfil" type="text" class="validate" />
                    <label for="siglaPerfil">Sigla do perfil</label>
                </div>
                <div className="col s2 input-field">
                    <input id="qtdProfissional" type="number" class="validate" />
                    <label for="qtdProfissional">Qtd Profissionais</label>
                </div>
                <Select label="Tipo Profissional" onChange={function noRefCheck(){}} s={6} class="validate" >
                    <option value="1">Motorista</option>
                    <option value="2">Técnico em Enfermagem</option>
                    <option value="3">Enfermeiro</option>
                    <option value="4">Médico Generalista</option>
                    <option value="5">Médico Pediatra/Neonatal</option>
                </Select>
                <div className="col s4 input-field">
                    <input id="veiculo" type="text" class="validate" />
                    <label for="veiculo">Veículo</label>
                </div>
                <div className="col s2 input-field">
                    <input id="qtdEquipamentos" type="number" class="validate" />
                    <label for="qtdEquipamentos">Qtd equipamentos</label>
                </div>
                <div className="col s10 input-field">
                    <input id="equipamentos" type="text" class="validate" />
                    <label for="equipamentos">Equipamentos</label>
                </div>
            </div>
            <div className="row btn-salvar">
                <button class="btn waves-effect waves-light orange darken-4" type="submit" name="action">Salvar
    <i class="material-icons right">send</i>
                </button>
                <button class="btn waves-effect waves-light orange darken-4" type="reset">Limpar</button>
            </div>
        </div>
    );
}

export default PerfilEquipe;