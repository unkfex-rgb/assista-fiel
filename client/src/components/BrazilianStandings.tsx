import { TrendingUp } from "lucide-react";
import { useBrazileiraoStandings } from "@/hooks/useBrazileiraoData";

export default function BrazilianStandings() {
  const { standings, loading, error } = useBrazileiraoStandings();

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

      {/* Error Message */}
      {error && (
        <div className="bg-yellow-900/20 border-b border-yellow-700 px-6 py-2 text-xs text-yellow-400">
          {error}
        </div>
      )}

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
