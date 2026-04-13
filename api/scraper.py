import requests
from bs4 import BeautifulSoup
import json

def get_brasileirao_table():
    url = "https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, "html.parser")
    
    table = soup.find("table", class_="classificacao_campeonato")
    if not table:
        return []
        
    table_rows = table.select("tr")[1:] # Pular o cabeçalho
    data = []
    
    for row in table_rows:
        cols = row.find_all("td")
        if len(cols) >= 10:
            team_data = {
                "posicao": cols[0].text.strip(),
                "time": cols[1].text.strip(),
                "pontos": cols[2].text.strip(),
                "jogos": cols[3].text.strip(),
                "vitorias": cols[4].text.strip(),
                "empates": cols[5].text.strip(),
                "derrotas": cols[6].text.strip(),
                "gols_pro": cols[7].text.strip(),
                "gols_contra": cols[8].text.strip(),
                "saldo_gols": cols[9].text.strip(),
                "aproveitamento": cols[10].text.strip()
            }
            data.append(team_data)
    return data

def get_corinthians_results():
    url = "https://www.meutimao.com.br/resultados-dos-jogos-do-corinthians/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, "html.parser")
    
    games = []
    game_elements = soup.select("li.jogo")
    
    for game in game_elements:
        date = game.select_one(".data").text.strip() if game.select_one(".data") else ""
        teams = game.select("h3 strong")
        if len(teams) >= 2:
            team_home = teams[0].text.strip()
            team_away = teams[1].text.strip()
            
            score_elements = game.select("h3 em")
            score_home = score_elements[0].text.strip() if len(score_elements) > 0 else ""
            score_away = score_elements[1].text.strip() if len(score_elements) > 1 else ""
            
            competition = game.select_one(".campeonato").text.strip() if game.select_one(".campeonato") else ""
            venue = game.select_one(".local").text.strip() if game.select_one(".local") else ""
            
            games.append({
                "data": date,
                "time_casa": team_home,
                "placar_casa": score_home,
                "time_fora": team_away,
                "placar_fora": score_away,
                "competicao": competition,
                "local": venue,
                "status": "Encerrado"
            })
    return games

def get_corinthians_schedule():
    url = "https://www.meutimao.com.br/proximos-jogos-do-corinthians"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, "html.parser")
    
    games = []
    game_elements = soup.select("li.jogo")
    
    for game in game_elements:
        date_info = game.select_one(".data").text.strip() if game.select_one(".data") else ""
        teams = game.select("h3 strong")
        if len(teams) >= 2:
            team_home = teams[0].text.strip()
            team_away = teams[1].text.strip()
            
            competition = game.select_one(".campeonato").text.strip() if game.select_one(".campeonato") else ""
            venue = game.select_one(".local").text.strip() if game.select_one(".local") else ""
            transmission = game.select_one(".transmissao").text.strip() if game.select_one(".transmissao") else "Não informada"
            
            games.append({
                "data": date_info,
                "time_casa": team_home,
                "time_fora": team_away,
                "competicao": competition,
                "local": venue,
                "transmissao": transmission.replace("Transmissão: ", ""),
                "status": "Agendado"
            })
    return games

if __name__ == "__main__":
    print("--- Tabela Brasileirão ---")
    print(json.dumps(get_brasileirao_table()[:2], indent=2, ensure_ascii=False))
    print("\n--- Resultados Corinthians ---")
    print(json.dumps(get_corinthians_results()[:2], indent=2, ensure_ascii=False))
    print("\n--- Agenda Corinthians ---")
    print(json.dumps(get_corinthians_schedule()[:2], indent=2, ensure_ascii=False))
