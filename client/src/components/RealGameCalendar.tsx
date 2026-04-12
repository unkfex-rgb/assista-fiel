import { Calendar, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  competition: string;
  venue: string;
  status: "upcoming" | "live" | "finished";
  score?: { home: number; away: number };
}

const CALENDAR_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031828055/MpuhHg4LAq8w7NBGgVpY6A/calendar-section-bg-bw-EeYqyA8BenKQtnDh69EibY.webp";

export default function RealGameCalendar() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dados simulados de jogos do Corinthians
    // Em produção, isso viria de uma API real
    const mockGames: Game[] = [
      {
        id: "1",
        date: "2026-04-10",
        time: "19:30",
        homeTeam: "Corinthians",
        awayTeam: "Flamengo",
        competition: "Brasileirão",
        venue: "Arena Corinthians",
        status: "upcoming",
      },
      {
        id: "2",
        date: "2026-04-15",
        time: "20:00",
        homeTeam: "Corinthians",
        awayTeam: "Palmeiras",
        competition: "Brasileirão",
        venue: "Allianz Parque",
        status: "upcoming",
      },
      {
        id: "3",
        date: "2026-04-22",
        time: "18:00",
        homeTeam: "Corinthians",
        awayTeam: "São Paulo",
        competition: "Copa do Brasil",
        venue: "Arena Corinthians",
        status: "upcoming",
      },
      {
        id: "4",
        date: "2026-04-28",
        time: "21:00",
        homeTeam: "Corinthians",
        awayTeam: "Atlético Mineiro",
        competition: "Brasileirão",
        venue: "Mineirão",
        status: "upcoming",
      },
      {
        id: "5",
        date: "2026-05-05",
        time: "19:00",
        homeTeam: "Boca Juniors",
        awayTeam: "Corinthians",
        competition: "Libertadores",
        venue: "La Bombonera",
        status: "upcoming",
      },
    ];

    setGames(mockGames);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-background py-16">
        <div className="container">
          <div className="text-center text-gray-400">Carregando jogos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-background py-16">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('${CALENDAR_BG}')`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={28} className="text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">PRÓXIMOS JOGOS</h2>
          </div>
          <div className="h-1 w-20 bg-accent" />
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-secondary border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group"
            >
              {/* Header */}
              <div className="bg-primary border-b border-border px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-accent uppercase">
                    {game.competition}
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    {new Date(game.date).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Teams */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-center">
                    <p className="font-bold text-lg text-white">{game.homeTeam}</p>
                  </div>
                  <div className="px-4 text-gray-400">vs</div>
                  <div className="flex-1 text-center">
                    <p className="font-bold text-lg text-white">{game.awayTeam}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock size={16} />
                    <span>{game.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={16} />
                    <span>{game.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
