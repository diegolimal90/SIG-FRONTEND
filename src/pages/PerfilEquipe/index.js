import React, { Component } from 'react';
import '../../assets/css/style.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        position: "initial",
        margin: 10,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

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

    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = event => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (
        <div className="container">
            <div className="row">
                <p className="center titulo">Cadastro do tipo perfil de equipes</p>
            </div>
            <div className="row">
                <div className="col s4 input-field">
                    <input id="nomePerfil" type="text" class="validate" />
                    <label for="nomePerfil">Nome do perfil</label>
                </div>
                <div className="col s2 input-field">
                    <input id="siglaPerfil" type="text" class="validate" />
                    <label for="siglaPerfil">Sigla do perfil</label>
                </div>
                <div className="col s2 input-field">
                    <input id="qtdProfissional" type="number" class="validate" />
                    <label for="qtdProfissional">Qtd de profissionais</label>
                </div>
                <div className="col s4 input-field">
                    <input id="tipoProfissional" type="text" class="validate" />
                    <label for="tipoProfissional">Tipo de profissional</label>
                </div>
                <div className="col s3 input-field">
                    <input id="veiculo" type="text" class="validate" />
                    <label for="veiculo">Veículo</label>
                </div>
                <div className="col s2 input-field">
                    <input id="qtdEquipamentos" type="number" class="validate" />
                    <label for="qtdEquipamentos">Qtd de equipamentos</label>
                </div>
                <div className="col s7 input-field">
                    <input id="equipamentos" type="text" class="validate" />
                    <label for="equipamentos">Equipamentos</label>
                </div>
                <FormControl className="col s12">
                    <InputLabel id="demo-mutiple-chip-label">Tipo de funcionário</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="row btn-salvar">
                <button class="btn waves-effect waves-light orange darken-4" type="submit" name="action">Salvar
    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    );
}

export default PerfilEquipe;