import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

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

export default function BrazilianStandings() {
  const [standings, setStandings] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dados simulados da tabela do Brasileirão
    // Em produção, isso viria de uma API real
    const mockStandings: Team[] = [
      {
        position: 1,
        name: "Palmeiras",
        played: 10,
        wins: 7,
        draws: 2,
        losses: 1,
        goalsFor: 22,
        goalsAgainst: 8,
        goalDifference: 14,
        points: 23,
      },
      {
        position: 2,
        name: "Botafogo",
        played: 10,
        wins: 6,
        draws: 3,
        losses: 1,
        goalsFor: 18,
        goalsAgainst: 9,
        goalDifference: 9,
        points: 21,
      },
      {
        position: 3,
        name: "Flamengo",
        played: 10,
        wins: 6,
        draws: 2,
        losses: 2,
        goalsFor: 19,
        goalsAgainst: 11,
        goalDifference: 8,
        points: 20,
      },
      {
        position: 4,
        name: "Corinthians",
        played: 9,
        wins: 5,
        draws: 2,
        losses: 2,
        goalsFor: 15,
        goalsAgainst: 10,
        goalDifference: 5,
        points: 17,
        isCorinthians: true,
      },
      {
        position: 5,
        name: "São Paulo",
        played: 10,
        wins: 5,
        draws: 1,
        losses: 4,
        goalsFor: 16,
        goalsAgainst: 13,
        goalDifference: 3,
        points: 16,
      },
      {
        position: 6,
        name: "Internacional",
        played: 10,
        wins: 4,
        draws: 3,
        losses: 3,
        goalsFor: 14,
        goalsAgainst: 12,
        goalDifference: 2,
        points: 15,
      },
      {
        position: 7,
        name: "Grêmio",
        played: 10,
        wins: 4,
        draws: 2,
        losses: 4,
        goalsFor: 13,
        goalsAgainst: 14,
        goalDifference: -1,
        points: 14,
      },
      {
        position: 8,
        name: "Cruzeiro",
        played: 10,
        wins: 3,
        draws: 4,
        losses: 3,
        goalsFor: 12,
        goalsAgainst: 11,
        goalDifference: 1,
        points: 13,
      },
    ];

    setStandings(mockStandings);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="bg-secondary border border-border rounded-lg p-6">
        <div className="text-center text-gray-400">Carregando tabela...</div>
      </div>
    );
  }

  return (
    <div className="bg-secondary border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary border-b border-border px-6 py-4 flex items-center gap-3">
        <TrendingUp size={24} className="text-accent" />
        <h3 className="text-xl font-bold text-white">TABELA BRASILEIRÃO</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-primary/50">
              <th className="text-left px-4 py-3 text-gray-400 font-semibold">#</th>
              <th className="text-left px-4 py-3 text-gray-400 font-semibold">Time</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">J</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">V</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">E</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">D</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">GP</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">GC</th>
              <th className="text-center px-2 py-3 text-gray-400 font-semibold">SG</th>
              <th className="text-center px-4 py-3 text-gray-400 font-semibold">PTS</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr
                key={team.position}
                className={`border-b border-border hover:bg-primary/30 transition-colors ${
                  team.isCorinthians ? "bg-accent/10" : ""
                }`}
              >
                <td className="px-4 py-3 text-white font-bold">{team.position}</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {team.isCorinthians && <span className="text-accent mr-2">★</span>}
                  {team.name}
                </td>
                <td className="text-center px-2 py-3 text-gray-400">{team.played}</td>
                <td className="text-center px-2 py-3 text-green-400">{team.wins}</td>
                <td className="text-center px-2 py-3 text-yellow-400">{team.draws}</td>
                <td className="text-center px-2 py-3 text-red-400">{team.losses}</td>
                <td className="text-center px-2 py-3 text-gray-400">{team.goalsFor}</td>
                <td className="text-center px-2 py-3 text-gray-400">{team.goalsAgainst}</td>
                <td className="text-center px-2 py-3 text-gray-400">
                  {team.goalDifference > 0 ? "+" : ""}
                  {team.goalDifference}
                </td>
                <td className="text-center px-4 py-3 text-white font-bold">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="bg-primary/50 border-t border-border px-6 py-3 text-xs text-gray-400 space-y-1">
        <p>J = Jogos | V = Vitórias | E = Empates | D = Derrotas</p>
        <p>GP = Gols Pró | GC = Gols Contra | SG = Saldo de Gols | PTS = Pontos</p>
      </div>
    </div>
  );
}
