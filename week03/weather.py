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
    print("----------------------------------------------------------------------")
    print('날씨 검색기를 실행시키겠습니까?')
    print("----------------------------------------------------------------------")
    print('  y : 진행       n : 취소')
    answer = input('>>> ')
    answer = answer.lower()

    if answer == 'y' or answer == "진행":
        print("----------------------------------------------------------------------")
        print('⭐️ 날씨 검색기 프로그램이 실행됩니다. ⭐️')
        break
    elif answer == 'n' or answer == "취소":
        print("----------------------------------------------------------------------")
        print("🚨 해당 서비스를 이용해주셔서 감사합니다. 프로그램을 종료합니다. 🚨")
        print("----------------------------------------------------------------------")
        exit()
    else:
        print("'y', '진행' 또는 'n', '취소'을 입력해주세요.")

while True:
    print("----------------------------------------------------------------------")
    city = input("🌡️  날씨를 알고 싶은 국가의 이름을 영어로 작성하여 주세요: ")
    print("----------------------------------------------------------------------")
    print("💬 %s 의 날씨 정보를 불러오고 있습니다... 잠시만 기다려주세요 💬" % city)
    print("----------------------------------------------------------------------")

    weather_info = get_weather_info(city)

    if weather_info:
        print(">>> ", weather_info["name"] + " <<< 의 날씨입니다.\n")
        print("날씨는", weather_info["weather"][0]["description"], "입니다.\n")
        print("현재 온도는", weather_info["main"]["temp"], "입니다.")
        print("하지만 체감 온도는", weather_info["main"]["feels_like"], "입니다.\n")
        print("최저 기온은", weather_info["main"]["temp_min"], "입니다.")
        print("최고 기온은", weather_info["main"]["temp_max"], "입니다.\n")
        print("기압은", weather_info["main"]["pressure"], "입니다.")
        print("습도는", weather_info["main"]["humidity"], "입니다.\n")
        print("풍속는", weather_info["wind"]["speed"], "m/s 입니다.")

    else:
        print("해당 국가의 날씨 정보를 찾을 수 없습니다. 국가 이름을 다시 확인해주세요.")
        while True:
            print("다시 입력하시겠습니까?")
            print('  y : 재입력       n : 종료')
            retry_answer = input('>>> ')
            retry_answer = retry_answer.lower()

            if retry_answer == 'y' or retry_answer == "재입력":
                city = input("🌡️  날씨를 알고 싶은 국가의 이름을 영어로 다시 작성하여 주세요: ")
                weather_info = get_weather_info(city)
                if weather_info:
                    break
            elif retry_answer == 'n' or retry_answer == "종료":
                print("해당 서비스를 이용해주셔서 감사합니다. 프로그램을 종료합니다.")
                exit()
            else:
                print("'y', '진행' 또는 'n', '취소'을 입력해주세요.")
    print("----------------------------------------------------------------------")
    print("다른 국가의 날씨를 추가로 검색하시겠습니까?")
    print("----------------------------------------------------------------------")
    print('  y : 진행       n : 취소')
    answer = input('>>> ')
    answer = answer.lower()

    if answer == 'y' or answer == "진행":
        pass
    elif answer == 'n' or answer == "취소":
        print("🚨 해당 서비스를 이용해주셔서 감사합니다. 프로그램을 종료합니다. 🚨")
        exit()
    else:
        exit()