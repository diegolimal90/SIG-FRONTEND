import React, {useState} from 'react';
import '../../assets/css/style.css';
import { Select, Button, Icon, TextInput } from "react-materialize";


function PerfilEquipe() {

    const [nomePerfil, setNomePerfil] = useState('');
    const [siglaPerfil, setSiglaPerfil] = useState('');
    const [qtdProfissional, setQtdProfissional] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [tipoProfissional, setTipoProfissional] = useState('');
    const [qtdEquipamentos, setQtdEquipamentos] = useState('');
    const [equipamentos, setEquipamentos] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        let data = JSON.stringify({
            nome: nomePerfil,
            sigla: siglaPerfil,
            veiculoId: veiculo,
            qtProfissionais: qtdProfissional,
            profissionaisId: tipoProfissional,
            descricaoEquipamentos: equipamentos,
            qtEquipamento: qtdEquipamentos
        });

        console.log(data);

        /*await api.post('/perfilequipes', data,{
            headers:{'Content-Type': 'application/json'}
        });*/
    }

    return (
        <div className="container">
            <div className="row">
                <p className="center titulo">Cadastro do tipo perfil de equipes</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <TextInput
                        id="nome"
                        name="nome"
                        s={8}
                        type="text"
                        maxLength="65"
                        required
                        validate={true}
                        label="Nome Perfil"
                        value={nomePerfil} onChange={event => setNomePerfil(event.target.value)}
                    />
                    <TextInput
                        id="sigla"
                        name="sigla"
                        s={4}
                        type="text"
                        maxLength="5"
                        required
                        validate={true}
                        label="Sigla Perfil"
                        value={siglaPerfil} onChange={event => setSiglaPerfil(event.target.value)}
                    />
                    <TextInput
                        id="qtdProfissional"
                        name="qtdProfissional"
                        s={2}
                        type="number"
                        maxLength="10"
                        min="0"
                        max="9999999999"
                        required
                        validate={true}
                        label="Qtd Profissionais"
                        value={qtdProfissional} onChange={event => setQtdProfissional(event.target.value)}
                    />
                    <Select label="Tipo Profissional" onChange={function noRefCheck() { }} s={10} validate={true}
                    onChange={event => setTipoProfissional(event.target.value)} value={tipoProfissional} required>
                        <option value="" disabled>Selecione o tipo do prossional</option>
                        <option value="1">Motorista</option>
                        <option value="2">Técnico em Enfermagem</option>
                        <option value="3">Enfermeiro</option>
                        <option value="4">Médico Generalista</option>
                        <option value="5">Médico Pediatra/Neonatal</option>
                    </Select>
                    <TextInput
                        id="qtdEquipamentos"
                        name="qtdEquipamentos"
                        s={2}
                        type="number"
                        maxLength="10"
                        min="0"
                        max="9999999999"
                        required
                        validate={true}
                        label="Qtd Equipamentos"
                        value={qtdEquipamentos} onChange={event => setQtdEquipamentos(event.target.value)}
                    />
                    <TextInput
                        id="equipamentos"
                        name="equipamentos"
                        s={8}
                        type="text"
                        maxLength="1000"
                        required
                        validate={true}
                        label="Equipamentos"
                        value={equipamentos} onChange={event => setEquipamentos(event.target.value)}
                    />
                    <TextInput
                        id="veiculo"
                        name="veiculo"
                        s={2}
                        type="text"
                        maxLength="50"
                        required
                        validate={true}
                        label="Veículo"
                        value={veiculo} onChange={event => setVeiculo(event.target.value)}
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
            </form>
        </div>
    );
}

export default PerfilEquipe;