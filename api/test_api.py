import requests
import json
import time

def test_api():
    print("Testando API do Brasileirão e Corinthians...")
    
    try:
        print("\n1. Testando endpoint /tabela...")
        response = requests.get("http://localhost:8000/tabela")
        if response.status_code == 200:
            data = response.json()
            print(f"Sucesso! {len(data)} times encontrados.")
            print(json.dumps(data[:3], indent=2, ensure_ascii=False))
        else:
            print(f"Erro: {response.status_code}")
            
        print("\n2. Testando endpoint /corinthians/jogos...")
        response = requests.get("http://localhost:8000/corinthians/jogos")
        if response.status_code == 200:
            data = response.json()
            print(f"Sucesso! {len(data.get('resultados', []))} resultados e {len(data.get('agenda', []))} jogos agendados.")
            print("Último resultado:", json.dumps(data['resultados'][0] if data['resultados'] else {}, indent=2, ensure_ascii=False))
            print("Próximo jogo:", json.dumps(data['agenda'][0] if data['agenda'] else {}, indent=2, ensure_ascii=False))
        else:
            print(f"Erro: {response.status_code}")
            
    except Exception as e:
        print(f"Erro ao conectar na API: {e}")

if __name__ == "__main__":
    test_api()
