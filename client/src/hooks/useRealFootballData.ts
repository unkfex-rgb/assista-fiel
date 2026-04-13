import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://8000-in83vb11di4kle9zxw5tn-712fb2a9.us1.manus.computer';

export interface TabelaTime {
  posicao: string;
  time: string;
  pontos: string;
  jogos: string;
  vitorias: string;
  empates: string;
  derrotas: string;
  gols_pro: string;
  gols_contra: string;
  saldo_gols: string;
  aproveitamento: string;
}

export interface Jogo {
  data: string;
  time_casa: string;
  time_fora: string;
  placar_casa?: string;
  placar_fora?: string;
  competicao: string;
  local: string;
  transmissao?: string;
  status: string;
}

export interface JogosResponse {
  resultados: Jogo[];
  agenda: Jogo[];
}

export function useBrazileiraoTabela() {
  const [tabela, setTabela] = useState<TabelaTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTabela = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/tabela`);
        if (!response.ok) throw new Error('Erro ao buscar tabela');
        const data = await response.json();
        setTabela(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar tabela:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        // Fallback para dados simulados
        setTabela([
          { posicao: '1°', time: 'Palmeiras', pontos: '26', jogos: '11', vitorias: '8', empates: '2', derrotas: '1', gols_pro: '21', gols_contra: '10', saldo_gols: '11', aproveitamento: '79' },
          { posicao: '2°', time: 'Flamengo', pontos: '20', jogos: '10', vitorias: '6', empates: '2', derrotas: '2', gols_pro: '18', gols_contra: '10', saldo_gols: '8', aproveitamento: '67' },
          { posicao: '16°', time: 'Corinthians', pontos: '11', jogos: '11', vitorias: '2', empates: '5', derrotas: '4', gols_pro: '8', gols_contra: '11', saldo_gols: '-3', aproveitamento: '33' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTabela();
  }, []);

  return { tabela, loading, error };
}

export function useCorinthiansJogos() {
  const [jogos, setJogos] = useState<JogosResponse>({ resultados: [], agenda: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/corinthians/jogos`);
        if (!response.ok) throw new Error('Erro ao buscar jogos');
        const data = await response.json();
        setJogos(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar jogos:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        // Fallback para dados simulados
        setJogos({
          resultados: [
            { data: '12 Abr', time_casa: 'Corinthians', placar_casa: '0', time_fora: 'Palmeiras', placar_fora: '0', competicao: 'Brasileirão 2026', local: 'Neo Química Arena', status: 'Encerrado' },
            { data: '09 Abr', time_casa: 'Platense', placar_casa: '0', time_fora: 'Corinthians', placar_fora: '2', competicao: 'Libertadores 2026', local: 'Vicente López', status: 'Encerrado' }
          ],
          agenda: [
            { data: '15 Abr Quarta-feira', time_casa: 'Corinthians', time_fora: 'Independiente Santa Fe', competicao: 'Libertadores 2026', local: 'Neo Química Arena', transmissao: 'TV Globo, getv e Paramount', status: 'Agendado' },
            { data: '18 Abr Sábado', time_casa: 'Vitória', time_fora: 'Corinthians', competicao: 'Brasileirão 2026', local: 'Barradão', transmissao: 'Premiere', status: 'Agendado' }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, []);

  return { jogos, loading, error };
}
