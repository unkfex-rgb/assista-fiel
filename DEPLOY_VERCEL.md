# Guia de Deploy na Vercel

Instruções passo a passo para fazer deploy do site **Assista Fiel!** na Vercel.

## ✅ Pré-requisitos

- Conta no GitHub (repositório já conectado)
- Conta na Vercel (https://vercel.com)
- Git instalado localmente

## 🚀 Passo 1: Conectar Repositório ao Vercel

1. Acesse https://vercel.com/dashboard
2. Clique em **"Add New..."** → **"Project"**
3. Selecione **"Import Git Repository"**
4. Busque pelo repositório `unkfex-rgb/loud-multi`
5. Clique em **"Import"**

## ⚙️ Passo 2: Configurar Projeto

### Build Settings

- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Environment Variables

Adicionar as seguintes variáveis (se necessário):

```env
VITE_APP_TITLE=Assista Fiel!
VITE_API_FOOTBALL_KEY=sua_chave_aqui
```

## 🔗 Passo 3: Deploy Automático

1. Após conectar o repositório, o Vercel fará deploy automático a cada push
2. Cada commit em `main` acionará um novo build
3. Acessar URL gerada automaticamente (ex: `assista-fiel.vercel.app`)

## 📝 Passo 4: Domínio Customizado (Opcional)

1. No dashboard Vercel, vá para **"Settings"** → **"Domains"**
2. Clique em **"Add Domain"**
3. Digite seu domínio customizado
4. Siga as instruções para configurar DNS

## 🔄 Passo 5: Deploy Manual (Se Necessário)

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer deploy
vercel

# Deploy em produção
vercel --prod
```

## 📊 Monitoramento

- **Analytics**: Acessar em Vercel Dashboard → **"Analytics"**
- **Logs**: Vercel Dashboard → **"Deployments"** → Selecionar deploy
- **Performance**: Usar Vercel Analytics ou Google PageSpeed Insights

## 🐛 Troubleshooting

### Erro: "Build failed"

```bash
# Verificar build localmente
pnpm build

# Limpar cache
pnpm install --frozen-lockfile
pnpm build
```

### Erro: "Module not found"

```bash
# Reinstalar dependências
rm -rf node_modules
pnpm install
```

### Erro: "Port already in use"

```bash
# Usar porta diferente
pnpm dev -- --port 3001
```

## 📱 Testar Responsividade

Após deploy, testar em:
- Desktop (Chrome DevTools)
- Tablet (iPad, Android)
- Mobile (iPhone, Android)

## 🔒 Segurança

- ✅ HTTPS automático (Vercel)
- ✅ Certificado SSL gratuito
- ✅ Headers de segurança configurados
- ✅ Rate limiting recomendado para APIs

## 📈 Otimizações

1. **Compressão**: Vercel comprime automaticamente
2. **CDN**: Vercel distribui via CDN global
3. **Cache**: Configurar cache headers em `vercel.json`
4. **Imagens**: Usar Vercel Image Optimization

## 🎯 Checklist Final

- [ ] Repositório conectado ao Vercel
- [ ] Build configurado corretamente
- [ ] Variáveis de ambiente adicionadas
- [ ] Deploy bem-sucedido
- [ ] Site acessível via URL
- [ ] Chat Twitch funcionando
- [ ] Embed de transmissão carregando
- [ ] Responsividade testada
- [ ] Performance verificada

## 📞 Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **Community**: https://github.com/vercel/vercel/discussions
- **Status**: https://www.vercelstatus.com/

---

**Última atualização**: Abril 2026
