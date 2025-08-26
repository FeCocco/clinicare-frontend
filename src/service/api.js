import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getProfissionais = () => {
    return apiClient.get('/profissionais');
};

export const getAgendamentos = (profissionalId, ano, mes) => {
    return apiClient.get(`/agendamentos/profissional/${profissionalId}`, {
        params: { ano, mes }
    });
};

export const criarAgendamento = (agendamentoData) => {
    return apiClient.post('/agendamentos', agendamentoData);
};

export const deletarAgendamento = (agendamentoId) => {
    return apiClient.delete(`/agendamentos/${agendamentoId}`);
};