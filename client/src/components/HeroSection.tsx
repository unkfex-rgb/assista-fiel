import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031828055/MpuhHg4LAq8w7NBGgVpY6A/hero-stadium-bw-MnAUeVaN5tEXA5Pr4TMe7i.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm md:text-base font-medium px-4 py-2 bg-accent text-background rounded">
              🔴 AO VIVO AGORA
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transmissão ao Vivo
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Acompanhe os melhores momentos, análises e interações em tempo real com nossa comunidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 gap-2"
            >
              <Play size={20} />
              Assistir Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Ver Calendário
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
