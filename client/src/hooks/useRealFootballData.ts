import { useState, useEffect } from 'react';

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

// Dados simulados da tabela do Brasileirão
const TABELA_SIMULADA: TabelaTime[] = [
  { posicao: '1°', time: 'Palmeiras', pontos: '26', jogos: '11', vitorias: '8', empates: '2', derrotas: '1', gols_pro: '21', gols_contra: '10', saldo_gols: '11', aproveitamento: '79' },
  { posicao: '2°', time: 'Flamengo', pontos: '20', jogos: '10', vitorias: '6', empates: '2', derrotas: '2', gols_pro: '18', gols_contra: '10', saldo_gols: '8', aproveitamento: '67' },
  { posicao: '3°', time: 'Botafogo', pontos: '19', jogos: '10', vitorias: '5', empates: '4', derrotas: '1', gols_pro: '16', gols_contra: '8', saldo_gols: '8', aproveitamento: '63' },
  { posicao: '4°', time: 'São Paulo', pontos: '18', jogos: '11', vitorias: '5', empates: '3', derrotas: '3', gols_pro: '15', gols_contra: '12', saldo_gols: '3', aproveitamento: '55' },
  { posicao: '5°', time: 'Internacional', pontos: '17', jogos: '11', vitorias: '5', empates: '2', derrotas: '4', gols_pro: '14', gols_contra: '11', saldo_gols: '3', aproveitamento: '52' },
  { posicao: '14°', time: 'Atlético Mineiro', pontos: '12', jogos: '11', vitorias: '3', empates: '3', derrotas: '5', gols_pro: '10', gols_contra: '13', saldo_gols: '-3', aproveitamento: '36' },
  { posicao: '15°', time: 'Vasco da Gama', pontos: '11', jogos: '11', vitorias: '3', empates: '2', derrotas: '6', gols_pro: '9', gols_contra: '14', saldo_gols: '-5', aproveitamento: '33' },
  { posicao: '16°', time: 'Corinthians', pontos: '11', jogos: '11', vitorias: '2', empates: '5', derrotas: '4', gols_pro: '8', gols_contra: '11', saldo_gols: '-3', aproveitamento: '33' },
  { posicao: '17°', time: 'Cruzeiro', pontos: '10', jogos: '11', vitorias: '2', empates: '4', derrotas: '5', gols_pro: '8', gols_contra: '12', saldo_gols: '-4', aproveitamento: '30' },
  { posicao: '18°', time: 'Cuiabá', pontos: '9', jogos: '11', vitorias: '2', empates: '3', derrotas: '6', gols_pro: '7', gols_contra: '15', saldo_gols: '-8', aproveitamento: '27' },
];

// Dados simulados de jogos do Corinthians
const JOGOS_SIMULADOS: JogosResponse = {
  resultados: [
    { data: '12 Abr', time_casa: 'Corinthians', placar_casa: '0', time_fora: 'Palmeiras', placar_fora: '0', competicao: 'Brasileirão 2026', local: 'Neo Química Arena', status: 'Encerrado' },
    { data: '09 Abr', time_casa: 'Platense', placar_casa: '0', time_fora: 'Corinthians', placar_fora: '2', competicao: 'Libertadores 2026', local: 'Vicente López', status: 'Encerrado' }
  ],
  agenda: [
    { data: '15 Abr Quarta-feira', time_casa: 'Corinthians', time_fora: 'Independiente Santa Fe', competicao: 'Libertadores 2026', local: 'Neo Química Arena', transmissao: 'TV Globo, getv e Paramount', status: 'Agendado' },
    { data: '18 Abr Sábado', time_casa: 'Vitória', time_fora: 'Corinthians', competicao: 'Brasileirão 2026', local: 'Barradão', transmissao: 'Premiere', status: 'Agendado' },
    { data: '22 Abr Quarta-feira', time_casa: 'Corinthians', time_fora: 'São Paulo', competicao: 'Copa do Brasil 2026', local: 'Neo Química Arena', transmissao: 'SporTV', status: 'Agendado' },
    { data: '25 Abr Sábado', time_casa: 'Flamengo', time_fora: 'Corinthians', competicao: 'Brasileirão 2026', local: 'Maracanã', transmissao: 'Globo', status: 'Agendado' },
    { data: '29 Abr Quarta-feira', time_casa: 'Corinthians', time_fora: 'Boca Juniors', competicao: 'Libertadores 2026', local: 'Neo Química Arena', transmissao: 'ESPN', status: 'Agendado' }
  ]
};

export function useBrazileiraoTabela() {
  const [tabela, setTabela] = useState<TabelaTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Usar apenas dados simulados
    setTabela(TABELA_SIMULADA);
    setError(null);
    setLoading(false);
  }, []);

  return { tabela, loading, error };
}

export function useCorinthiansJogos() {
  const [jogos, setJogos] = useState<JogosResponse>({ resultados: [], agenda: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Usar apenas dados simulados
    setJogos(JOGOS_SIMULADOS);
    setError(null);
    setLoading(false);
  }, []);

  return { jogos, loading, error };
}
