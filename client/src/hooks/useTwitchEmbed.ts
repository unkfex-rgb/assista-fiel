import { useEffect } from "react";

export function useTwitchEmbed() {
  useEffect(() => {
    // Load Twitch Embed script
    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Twitch embed when script loads
    script.onload = () => {
      if (window.twttr) {
        window.twttr.embed.lib.render(document.getElementById("twitch-embed"));
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
}

// Extend Window type for Twitch
declare global {
  interface Window {
    twttr?: {
      embed: {
        lib: {
          render: (element: HTMLElement | null) => void;
        };
      };
    };
  }
}
