# Guia de Integração com APIs de Dados Reais

Este documento descreve como integrar dados reais de futebol no site **Assista Fiel!**

## 1. Tabela do Brasileirão (Globo Esportes)

**Referência**: https://ge.globo.com/futebol/brasileirao-serie-a/

### Opções de Integração:

#### Opção A: Web Scraping (Recomendado para começar)
```javascript
// Usar biblioteca como cheerio ou puppeteer
// Para extrair dados em tempo real do site
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchBrazilianStandings() {
  const response = await axios.get('https://ge.globo.com/futebol/brasileirao-serie-a/');
  const $ = cheerio.load(response.data);
  // Extrair dados da tabela
}
```

#### Opção B: API-Football (Recomendado para produção)
```javascript
// https://www.api-football.com/
const API_KEY = 'seu_api_key_aqui';
const LEAGUE_ID = 71; // Brasileirão

async function fetchStandings() {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?league=${LEAGUE_ID}&season=2026`,
    {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }
  );
  return response.json();
}
```

---

## 2. Agenda do Corinthians (ESPN)

**Referência**: https://www.espn.com.br/futebol/time/calendario/_/id/874/corinthians

### Opções de Integração:

#### Opção A: Web Scraping
```javascript
async function fetchCorinthiansSchedule() {
  const response = await axios.get('https://www.espn.com.br/futebol/time/calendario/_/id/874/corinthians');
  const $ = cheerio.load(response.data);
  // Extrair dados dos próximos jogos
}
```

#### Opção B: API-Football
```javascript
const TEAM_ID = 45; // Corinthians

async function fetchTeamMatches() {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${TEAM_ID}&season=2026`,
    {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }
  );
  return response.json();
}
```

---

## 3. Implementação no React

### Exemplo de Hook Customizado

```typescript
// client/src/hooks/useFootballData.ts
import { useState, useEffect } from 'react';

export function useBrazilianStandings() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    try {
      setLoading(true);
      // Chamar API aqui
      const data = await fetch('/api/standings');
      const result = await data.json();
      setStandings(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { standings, loading, error, refetch: fetchStandings };
}
```

### Uso no Componente

```typescript
// client/src/components/BrazilianStandings.tsx
import { useBrazilianStandings } from '@/hooks/useFootballData';

export default function BrazilianStandings() {
  const { standings, loading } = useBrazilianStandings();

  if (loading) return <div>Carregando...</div>;

  return (
    <table>
      {/* Renderizar standings */}
    </table>
  );
}
```

---

## 4. Backend (Node.js + Express)

Se optar por criar um backend para cache e rate limiting:

```typescript
// server/routes/standings.ts
import express from 'express';

const router = express.Router();

router.get('/standings', async (req, res) => {
  try {
    // Buscar dados da API-Football ou fazer scraping
    const standings = await fetchStandingsFromAPI();
    res.json(standings);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

export default router;
```

---

## 5. Variáveis de Ambiente

Criar arquivo `.env.local`:

```env
VITE_API_FOOTBALL_KEY=sua_chave_aqui
VITE_API_FOOTBALL_HOST=api-football-v1.p.rapidapi.com
```

---

## 6. Próximos Passos

1. ✅ Escolher fonte de dados (API-Football recomendado)
2. ✅ Obter chave de API
3. ✅ Implementar hooks de dados
4. ✅ Adicionar cache para melhor performance
5. ✅ Configurar atualização automática (polling ou WebSocket)
6. ✅ Testar em produção na Vercel

---

## 7. Recursos Úteis

- **API-Football**: https://www.api-football.com/
- **TheSportsDB**: https://www.thesportsdb.com/api.php
- **Cheerio (Web Scraping)**: https://cheerio.js.org/
- **Puppeteer**: https://pptr.dev/

---

**Última atualização**: Abril 2026
