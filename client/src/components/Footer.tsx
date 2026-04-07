import { Youtube, Instagram, Twitter, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Produto",
    links: ["Transmissões", "Calendário", "Análises", "Comunidade"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Blog", "Carreiras", "Contato"],
  },
  {
    title: "Legal",
    links: ["Privacidade", "Termos", "Cookies", "Compliance"],
  },
];

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: MessageCircle, href: "https://twitch.tv/assistafiel", label: "Twitch" },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">AF</span>
              </div>
              <h3 className="text-lg font-bold text-white">Assista Fiel!</h3>
            </div>
            <p className="text-sm text-gray-400">
              Transmissões ao vivo, análises e comunidade de torcedores.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Assista Fiel! Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-colors text-gray-400 hover:text-accent"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
