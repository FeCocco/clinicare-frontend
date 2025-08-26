import React, { useState, useEffect } from 'react';
import AgendaCalendario from '../components/AgendaCalendario';
import { getProfissionais } from '/src/service/api.js';
import './Dashboard.css';

function Dashboard() {
    const [profissionais, setProfissionais] = useState([]);
    const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const carregarProfissionais = async () => {
            try {
                const response = await getProfissionais();
                setProfissionais(response.data);
                if (response.data.length > 0) {
                    setProfissionalSelecionado(response.data[0]);
                }
            } catch (err) {
                setError('Falha ao carregar os profissionais. Verifique se o backend está rodando.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        carregarProfissionais();
    }, []);

    if (loading) {
        return <div className="dashboard-page-container">Carregando...</div>;
    }

    if (error) {
        return <div className="dashboard-page-container" style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div className="dashboard-page-container">
            <div className="dashboard-content">
                <h1 className="dashboard-header">Painel de Agendamento</h1>

                <div className="selecao-profissional-container">
                    <h2>Selecione o Profissional</h2>
                    <select
                        onChange={(e) => {
                            const profId = parseInt(e.target.value, 10);
                            const selecionado = profissionais.find(p => p.id === profId);
                            setProfissionalSelecionado(selecionado);
                        }}
                        value={profissionalSelecionado?.id || ''}
                    >
                        {profissionais.map((prof) => (
                            <option key={prof.id} value={prof.id}>
                                {prof.nome}
                            </option>
                        ))}
                    </select>
                </div>

                {profissionalSelecionado ? (
                    <AgendaCalendario profissional={profissionalSelecionado} />
                ) : (
                    <p>Nenhum profissional disponível.</p>
                )}
            </div>
        </div>
    );
} export default Dashboard;