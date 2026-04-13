import { Calendar, MapPin, Clock } from "lucide-react";
import { useCorinthiansJogos } from "@/hooks/useRealFootballData";

const CALENDAR_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031828055/MpuhHg4LAq8w7NBGgVpY6A/calendar-section-bg-bw-EeYqyA8BenKQtnDh69EibY.webp";

export default function RealGameCalendar() {
  const { jogos, loading } = useCorinthiansJogos();

  if (loading) {
    return (
      <section className="w-full bg-background py-16">
        <div className="container">
          <div className="text-center text-gray-400">Carregando jogos...</div>
        </div>
      </section>
    );
  }

  // Pegar apenas os próximos 5 jogos da agenda
  const proximosJogos = jogos.agenda.slice(0, 5);

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
          {proximosJogos.map((jogo, index) => (
            <div
              key={index}
              className="bg-secondary border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group"
            >
              {/* Header */}
              <div className="bg-primary border-b border-border px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-accent uppercase">
                    {jogo.competicao}
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    {jogo.data}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Teams */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-center">
                    <p className="font-bold text-lg text-white">{jogo.time_casa}</p>
                  </div>
                  <div className="px-4 text-gray-400">vs</div>
                  <div className="flex-1 text-center">
                    <p className="font-bold text-lg text-white">{jogo.time_fora}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Details */}
                <div className="space-y-2">
                  {jogo.transmissao && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={16} />
                      <span>{jogo.transmissao}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={16} />
                    <span>{jogo.local}</span>
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
