import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LIVE_INDICATOR_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031828055/MpuhHg4LAq8w7NBGgVpY6A/live-indicator-bg-bw-J9gMjFPVRyTMXDFJj4Aua8.webp";

export default function StreamPlayer() {
  const [chatWidth, setChatWidth] = useState(350);
  const [isDragging, setIsDragging] = useState(false);

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
          className="flex gap-4 h-auto md:h-screen max-h-[600px] md:max-h-[800px]"
          style={{ cursor: isDragging ? "col-resize" : "default" }}
        >
          {/* Main Player Area */}
          <div className="flex-1 bg-secondary rounded-lg overflow-hidden border border-border relative group">
            {/* Embed de Transmissão */}
            <iframe
              src="https://esportesembed.com/corinthians-x-palmeiras-4"
              allow="encrypted-media"
              allowFullScreen
              frameBorder="0"
              width="100%"
              height="100%"
              className="w-full h-full"
            />
          </div>

          {/* Resize Handle */}
          <div
            className="w-1 bg-border hover:bg-accent cursor-col-resize transition-colors"
            onMouseDown={handleMouseDown}
          />

          {/* Chat Panel - Twitch */}
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

            {/* Twitch Chat Embed */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://www.twitch.tv/embed/assistafiel/chat?parent=localhost&parent=3000-ia1xhg7t2x7higwfw46b9-4610cc2d.us2.manus.computer"
                height="100%"
                width="100%"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
