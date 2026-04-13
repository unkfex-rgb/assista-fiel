# API Brasileirão & Corinthians 2026

Esta API fornece dados em tempo real sobre a tabela de classificação do Campeonato Brasileiro 2026 e o calendário completo de jogos do Corinthians (resultados e próximos jogos).

## Base URL
`https://8000-in83vb11di4kle9zxw5tn-712fb2a9.us1.manus.computer`

## Endpoints

### 1. Tabela do Brasileirão
Retorna a classificação atualizada do campeonato.

- **URL:** `/tabela`
- **Método:** `GET`
- **Resposta de Exemplo:**
```json
[
  {
    "posicao": "1°",
    "time": "Palmeiras",
    "pontos": "26",
    "jogos": "11",
    "vitorias": "8",
    "empates": "2",
    "derrotas": "1",
    "gols_pro": "21",
    "gols_contra": "10",
    "saldo_gols": "11",
    "aproveitamento": "79"
  },
  ...
]
```

### 2. Jogos do Corinthians
Retorna os resultados passados e a agenda de próximos jogos do Corinthians em 2026.

- **URL:** `/corinthians/jogos`
- **Método:** `GET`
- **Resposta de Exemplo:**
```json
{
  "resultados": [
    {
      "data": "12 Abr",
      "time_casa": "Corinthians",
      "placar_casa": "0",
      "time_fora": "Palmeiras",
      "placar_fora": "0",
      "competicao": "Brasileirão 2026",
      "local": "Neo Química Arena",
      "status": "Encerrado"
    }
  ],
  "agenda": [
    {
      "data": "15 Abr Quarta-feira",
      "time_casa": "Corinthians",
      "time_fora": "Independiente Santa Fe",
      "competicao": "Libertadores 2026",
      "local": "Neo Química Arena",
      "transmissao": "TV Globo, getv e Paramount",
      "status": "Agendado"
    }
  ]
}
```

## Tecnologias Utilizadas
- **Python 3.11**
- **FastAPI** (Framework Web)
- **BeautifulSoup4** (Scraping)
- **Uvicorn** (Servidor ASGI)

## Fonte dos Dados
Os dados são extraídos em tempo real de fontes confiáveis como o portal **Meu Timão**, garantindo precisão para o torcedor corinthiano.
