import { useState, useEffect } from "react";

interface Team {
  position: number;
  name: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  isCorinthians?: boolean;
}

export function useBrazileiraoStandings() {
  const [standings, setStandings] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    try {
      setLoading(true);
      setError(null);

      // Usar API-Football para dados reais
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/standings?league=71&season=2026",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "demo", // Usar chave real em produção
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao buscar dados da API");
      }

      const data = await response.json();

      if (data.response && data.response[0]) {
        const standings = data.response[0].standings[0].map(
          (team: any, index: number) => ({
            position: index + 1,
            name: team.team.name,
            played: team.all.played,
            wins: team.all.win,
            draws: team.all.draw,
            losses: team.all.lose,
            goalsFor: team.all.goals.for,
            goalsAgainst: team.all.goals.against,
            goalDifference: team.goalsDiff,
            points: team.points,
            isCorinthians: team.team.name.toLowerCase().includes("corinthians"),
          })
        );

        setStandings(standings);
      }
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setError("Erro ao carregar tabela. Usando dados simulados.");
      // Fallback para dados simulados
      setStandings(getMockStandings());
    } finally {
      setLoading(false);
    }
  };

  return { standings, loading, error, refetch: fetchStandings };
}

// Dados simulados para fallback
function getMockStandings(): Team[] {
  return [
    {
      position: 1,
      name: "Palmeiras",
      played: 15,
      wins: 10,
      draws: 2,
      losses: 3,
      goalsFor: 28,
      goalsAgainst: 12,
      goalDifference: 16,
      points: 32,
    },
    {
      position: 2,
      name: "Botafogo",
      played: 15,
      wins: 9,
      draws: 3,
      losses: 3,
      goalsFor: 24,
      goalsAgainst: 14,
      goalDifference: 10,
      points: 30,
    },
    {
      position: 3,
      name: "Flamengo",
      played: 15,
      wins: 8,
      draws: 3,
      losses: 4,
      goalsFor: 25,
      goalsAgainst: 16,
      goalDifference: 9,
      points: 27,
    },
    {
      position: 4,
      name: "Corinthians",
      played: 14,
      wins: 7,
      draws: 3,
      losses: 4,
      goalsFor: 20,
      goalsAgainst: 15,
      goalDifference: 5,
      points: 24,
      isCorinthians: true,
    },
    {
      position: 5,
      name: "São Paulo",
      played: 15,
      wins: 7,
      draws: 2,
      losses: 6,
      goalsFor: 21,
      goalsAgainst: 18,
      goalDifference: 3,
      points: 23,
    },
    {
      position: 6,
      name: "Internacional",
      played: 15,
      wins: 6,
      draws: 4,
      losses: 5,
      goalsFor: 18,
      goalsAgainst: 16,
      goalDifference: 2,
      points: 22,
    },
    {
      position: 7,
      name: "Grêmio",
      played: 15,
      wins: 6,
      draws: 3,
      losses: 6,
      goalsFor: 17,
      goalsAgainst: 18,
      goalDifference: -1,
      points: 21,
    },
    {
      position: 8,
      name: "Cruzeiro",
      played: 15,
      wins: 5,
      draws: 5,
      losses: 5,
      goalsFor: 16,
      goalsAgainst: 15,
      goalDifference: 1,
      points: 20,
    },
  ];
}
