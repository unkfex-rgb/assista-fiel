import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    category: "ANÁLISE",
    title: "Corinthians: A Evolução Tática de Dorival",
    excerpt:
      "Confira como o técnico tem adaptado a formação do time para melhor aproveitar o potencial ofensivo.",
    author: "Pedro Ferri",
    date: "2026-04-07",
    views: 1234,
  },
  {
    id: 2,
    category: "NOTÍCIA",
    title: "Novo Reforço: Entenda o Jogo de Jesse Lingard",
    excerpt:
      "O novo camisa 10 do Corinthians traz experiência e qualidade técnica para o meio-campo.",
    author: "Andrew Sousa",
    date: "2026-04-06",
    views: 2156,
  },
  {
    id: 3,
    category: "COLUNA",
    title: "Profundidade e Gols: As Carências do Elenco",
    excerpt:
      "Análise detalhada sobre os pontos que precisam ser melhorados para uma campanha mais competitiva.",
    author: "Base Corinthiana",
    date: "2026-04-05",
    views: 987,
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-secondary py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={28} className="text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">NOTÍCIAS E ANÁLISES</h2>
          </div>
          <div className="h-1 w-20 bg-accent" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-all group cursor-pointer"
            >
              {/* Header */}
              <div className="bg-primary border-b border-border px-6 py-3">
                <span className="text-xs font-bold text-accent uppercase">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      👁️ {item.views} visualizações
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-accent group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent/10"
          >
            Ver Todas as Notícias
          </Button>
        </div>
      </div>
    </section>
  );
}
