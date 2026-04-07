# Assista Fiel! - Transmissão ao Vivo

Um site moderno de transmissão ao vivo com design minimalista em preto e branco, integração com chat da Twitch, calendário de jogos e análises em tempo real.

## 🎯 Características

- **Design Responsivo**: Layout adaptado para desktop, tablet e mobile
- **Transmissão ao Vivo**: Player integrado com suporte a Twitch embed
- **Chat em Tempo Real**: Integração com chat da Twitch (https://www.twitch.tv/assistafiel)
- **Calendário de Jogos**: Visualização de próximos jogos e eventos
- **Notícias e Análises**: Seção com conteúdo exclusivo
- **Design Moderno**: Paleta preto e branco com tipografia Bebas Neue e Inter

## 🚀 Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions

## 📋 Pré-requisitos

- Node.js 18+
- pnpm (gerenciador de pacotes)

## 🛠️ Instalação Local

```bash
# Clonar repositório
git clone https://github.com/unkfex-rgb/loud-multi.git
cd assista-fiel

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

## 📦 Build para Produção

```bash
# Build da aplicação
pnpm build

# Preview do build
pnpm preview
```

## 🔗 Integração Twitch

O site integra o chat da Twitch do canal `assistafiel`. A integração é feita através do script de embed da Twitch:

```typescript
// Carregado automaticamente via useTwitchEmbed hook
<div id="twitch-embed" data-channel="assistafiel" data-theme="dark" />
```

## 📁 Estrutura do Projeto

```
client/
├── public/           # Arquivos estáticos
├── src/
│   ├── components/   # Componentes React reutilizáveis
│   ├── pages/        # Páginas da aplicação
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Funções utilitárias
│   ├── contexts/     # React contexts
│   ├── App.tsx       # Componente raiz
│   ├── main.tsx      # Entry point
│   └── index.css     # Estilos globais
server/               # Placeholder para compatibilidade
shared/               # Tipos compartilhados
```

## 🎨 Design

- **Cores**: Preto (#000000), Branco (#ffffff), Cinza (#333333-#999999)
- **Tipografia**: 
  - Display: Bebas Neue (títulos)
  - Body: Inter (corpo de texto)
- **Componentes**: shadcn/ui com customizações

## 🚢 Deploy na Vercel

1. Conectar repositório GitHub à Vercel
2. Configurar variáveis de ambiente (se necessário)
3. Deploy automático em cada push para `main`

```bash
# Deploy manual
vercel deploy
```

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔄 Atualizações Futuras

- [ ] Integração com API de dados de jogos
- [ ] Sistema de login e autenticação
- [ ] Conteúdo exclusivo para membros
- [ ] Notificações push
- [ ] Análise de estatísticas

## 📝 Licença

MIT

## 👥 Suporte

Para dúvidas ou sugestões, entre em contato através do chat da Twitch: https://www.twitch.tv/assistafiel

---

**Desenvolvido com ❤️ para a comunidade de torcedores**
