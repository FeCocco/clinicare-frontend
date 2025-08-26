import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AgendaCalendario.css'
import { getAgendamentos, criarAgendamento } from '/src/service/api.js';

const locales = { 'pt-BR': ptBR };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });
const messages = { allDay: 'Dia Inteiro', previous: '<', next: '>', today: 'Hoje', month: 'Mês', week: 'Semana', day: 'Dia', agenda: 'Agenda', date: 'Data', time: 'Hora', event: 'Evento' };

const formatarDataParaAPI = (data) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const ano = data.getFullYear();
    const mes = pad(data.getMonth() + 1);
    const dia = pad(data.getDate());
    const hora = pad(data.getHours());
    const minuto = pad(data.getMinutes());
    const segundo = pad(data.getSeconds());
    return `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}`;
};

function AgendaCalendario({ profissional }) {
    const [eventos, setEventos] = useState([]);
    const [dataNavegacao, setDataNavegacao] = useState(new Date());
    const [view, setView] = useState('week');

    const fetchAgendamentos = useCallback(async () => {
        if (!profissional?.id) return;
        const ano = dataNavegacao.getFullYear();
        const mes = dataNavegacao.getMonth() + 1;
        try {
            const { data } = await getAgendamentos(profissional.id, ano, mes);
            const agendamentosFormatados = data.map(ag => ({
                title: `Cliente: ${ag.nomeCliente}`,
                start: new Date(ag.dataHoraInicio),
                end: new Date(ag.dataHoraFim),
                resource: ag
            }));
            setEventos(agendamentosFormatados);
        } catch (error) {
            console.error("Falha ao buscar agendamentos", error);
            setEventos([]);
        }
    }, [profissional?.id, dataNavegacao]);

    useEffect(() => {
        fetchAgendamentos();
    }, [fetchAgendamentos]);

    const handleSelectSlot = async ({ start, end }) => {
        const nomeCliente = window.prompt('Nome do Cliente:');
        if (nomeCliente) {
            const novoAgendamento = {
                profissional: { id: profissional.id },
                nomeCliente,
                dataHoraInicio: formatarDataParaAPI(start),
                dataHoraFim: formatarDataParaAPI(end),
            };
            try {
                await criarAgendamento(novoAgendamento);
                fetchAgendamentos();
            } catch (error) {
                // Melhorando a mensagem de erro
                const errorMsg = error.response?.data || 'Erro de rede. Verifique o console do backend.';
                console.error('Erro ao criar agendamento:', errorMsg);
                alert(`Não foi possível realizar o agendamento: ${errorMsg}`);
            }
        }
    };

    const handleNavigate = (newDate) => { setDataNavegacao(newDate); };
    const handleViewChange = (newView) => { setView(newView); };

    return (
        <div className="agenda-container">
            <h3 className="agenda-header">Agenda de {profissional.nome}</h3>
            <Calendar
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: '20px 0' }}
                messages={messages}
                culture='pt-BR'
                selectable
                onSelectSlot={handleSelectSlot}
                onNavigate={handleNavigate}
                date={dataNavegacao}
                view={view}
                onView={handleViewChange}
                views={['month', 'week', 'day']}
                min={new Date(0, 0, 0, 8, 0, 0)}
                max={new Date(0, 0, 0, 19, 0, 0)}
            />
        </div>
    );
} export default AgendaCalendario;