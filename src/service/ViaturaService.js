import api from './api';

class ViaturaService{
    async cadastrarViatura(pacote){
        await api.post('/viaturas/', pacote, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default ViaturaService;