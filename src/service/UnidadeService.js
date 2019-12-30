import api from './api';

class UnidadeService{
    async cadastrarUnidade(data){
        await api.post('/unidades/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default UnidadeService;