# API 실습
import requests
import json

def get_weather_info(city):
    apikey = "5f871cad393b5ae63995e8cc6f95a5bb"
    lang = "kr"
    api = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units=metric"
    result = requests.get(api)
    # 응답이 성공적으로 받아졌을 경우 (status_code가 200일 경우) JSON 형식의 응답을 파싱하여 반환
    return json.loads(result.text) if result.status_code == 200 else None