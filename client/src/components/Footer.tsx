export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Assista Fiel! Todos os direitos reservados.
          </p>

          {/* Additional Info */}
          <p className="text-sm text-gray-500">
            Acompanhe os melhores momentos do Corinthians ao vivo
          </p>
        </div>
      </div>
    </footer>
  );
}
