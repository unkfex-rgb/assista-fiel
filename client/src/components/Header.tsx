export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-lg">AF</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            ASSISTA FIEL!
          </h1>
        </div>
      </div>
    </header>
  );
}
