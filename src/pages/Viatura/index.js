import React from 'react';
import '../../assets/css/style.css';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


//TODO Substituir os campos com os componente TextField
function Viatura() {
    return (
        <form method="POST">
            <div className="container">
                <div className="row">
                    <p className="center titulo">Cadastro da Viatura</p>
                </div>
                <div className="row">
                    <div className="col s6 input-field">
                        <input id="ano" type="number" min="1900" max="2100" class="validate" />
                        <label for="ano">Ano</label>
                    </div>
                    <div className="col s6 input-field">
                        <input id="placa" type="text" class="validate" />
                        <label for="placa">Placa</label>
                    </div>
                    <div className="col s6 input-field">
                        <input id="quilometragem_atual" type="number" class="validate" />
                        <label for="quilometragem_atual">Quilometragem Atual</label>
                    </div>
                    <div className="col s6 input-field">
                        <input id="quilometragem_inicial" type="number" class="validate" />
                        <label for="quilometragem_inicial">Quilometragem Inicial</label>
                    </div>
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

export default Viatura;