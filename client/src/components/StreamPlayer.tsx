import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTwitchEmbed } from "@/hooks/useTwitchEmbed";

const LIVE_INDICATOR_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031828055/MpuhHg4LAq8w7NBGgVpY6A/live-indicator-bg-bw-J9gMjFPVRyTMXDFJj4Aua8.webp";

export default function StreamPlayer() {
  const [chatWidth, setChatWidth] = useState(350);
  const [isDragging, setIsDragging] = useState(false);
  useTwitchEmbed();

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const newWidth = rect.right - e.clientX;

    // Constrain width between 250px and 600px
    if (newWidth >= 250 && newWidth <= 600) {
      setChatWidth(newWidth);
    }
  };

  return (
    <section
      className="relative w-full bg-background"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="container py-8">
        {/* Section Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">ÚLTIMA LIVE</h2>
          </div>
          <div className="h-1 w-20 bg-accent" />
        </div>

        {/* Player Container */}
        <div
          className="flex gap-4 h-96 md:h-screen max-h-[600px] md:max-h-[800px]"
          style={{ cursor: isDragging ? "col-resize" : "default" }}
        >
          {/* Main Player Area */}
          <div className="flex-1 bg-secondary rounded-lg overflow-hidden border border-border relative group">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('${LIVE_INDICATOR_BG}')`,
              }}
            />

            {/* Placeholder Player */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-16 h-16 bg-accent/40 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-accent border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                  </div>
                </div>
                <div>
                  <p className="text-white text-lg font-bold">Twitch Embed</p>
                  <p className="text-gray-400 text-sm">
                    Carregando transmissão ao vivo...
                  </p>
                </div>
              </div>

              {/* Live Badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">
                🔴 LIVE
              </div>

              {/* Viewers Count */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                👥 1.234 espectadores
              </div>
            </div>

            {/* Twitch Embed Container (hidden by default, ready for integration) */}
            <div
              id="twitch-embed"
              className="w-full h-full"
              data-channel="assistafiel"
              data-theme="dark"
            />
          </div>

          {/* Resize Handle */}
          <div
            className="w-1 bg-border hover:bg-accent cursor-col-resize transition-colors"
            onMouseDown={handleMouseDown}
          />

          {/* Chat Panel */}
          <div
            className="hidden md:flex flex-col bg-secondary rounded-lg overflow-hidden border border-border"
            style={{ width: `${chatWidth}px` }}
          >
            {/* Chat Header */}
            <div className="bg-primary border-b border-border px-4 py-3 flex items-center justify-between">
              <h3 className="font-bold text-white">Chat ao Vivo</h3>
              <button className="text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Placeholder Messages */}
              {[
                { user: "Torcedor123", msg: "Que jogo incrível!" },
                { user: "FielCorinthiano", msg: "Vamo Timão! 💪" },
                { user: "AnalisadorFut", msg: "Excelente análise!" },
                { user: "ComunidadeAF", msg: "Que transmissão top!" },
              ].map((msg, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-semibold text-accent">{msg.user}</span>
                  <p className="text-gray-300">{msg.msg}</p>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t border-border p-3">
              <input
                type="text"
                placeholder="Enviar mensagem..."
                className="w-full bg-input border border-border rounded px-3 py-2 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-secondary border border-border rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Transmissão</h4>
            <p className="text-sm text-gray-400">
              Acompanhe a análise completa do jogo com comentários ao vivo.
            </p>
          </div>
          <div className="bg-secondary border border-border rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Comunidade</h4>
            <p className="text-sm text-gray-400">
              Interaja com outros torcedores no chat em tempo real.
            </p>
          </div>
          <div className="bg-secondary border border-border rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Conteúdo</h4>
            <p className="text-sm text-gray-400">
              Acesso exclusivo a análises e conteúdos especiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
