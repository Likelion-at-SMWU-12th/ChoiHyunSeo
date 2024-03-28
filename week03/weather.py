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

while True:
    print("======= 안녕하세요!~ 날씨 검색기입니다. =======")
    print('날씨 검색기를 실행시키겠습니까?')
    print('  y : 진행       n : 취소')
    answer = input('>>> ')
    answer = answer.lower()

    if answer == 'y' or answer == "진행":
        print("======================================================================")
        print('날씨 검색기 프로그램이 실행됩니다.')
        break
    elif answer == 'n' or answer == "취소":
        print("======================================================================")
        print('날씨 검색기 프로그램이 종료됩니다.')
        print("======================================================================")
        exit()
    else:
        print("'y', '진행' 또는 'n', '취소'을 입력해주세요.")