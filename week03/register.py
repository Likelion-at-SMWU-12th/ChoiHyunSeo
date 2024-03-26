print('====================================')
print('회원가입')
print('====================================')

while True:
    print('회원가입을 진행하시겠습니까?')
    print('   y: 진행        n: 취소')
    answer=input('>> ')
    # 입력된 문자 중 대문자를 소문자로 변경하는 함수
    answer=answer.lower()
    if answer == 'y':
        print('====================================')
        print('회원가입이 진행됩니다.')
        print('====================================')
        break
    elif answer == 'n':
        print('====================================')
        print('회원가입이 취소합니다.')
        print('====================================')
        exit()
    else:
        print("'y' 또는 'n'을 입력해주세요.")


users = []

while True:
    user = {}

    # 아아디 입력
    username= input('ID: ')

    # 비밀번호 입력
    while True:
        pwd = input('비밀번호: ')
        pwd2 = input('비밀번호 확인: ')
        if pwd == pwd2:
            break
        else:   #pwd != pwd2
            print('비밀번호가 일치하지 않습니다.')
    
    # 이름 입력
    name = input('이름: ')

    while True:
        birth=input('생년월일(6자리): ')
        if len(birth) == 6:
            break
        else:
            print('생년월일은 여섯 자리로 입력해주세요.')

    # 이메일 입력
    email = input('이메일: ')

    user['username']=username
    user['password']=pwd
    user['name']=name
    user['birth']=birth
    user['email']=email

    users.append(user)
    print(users)

    print('====================================')
    print(user['name'],'님 가입을 환영합니다!')
    print('====================================')
    print('회원가입을 추가로 진행하시겠습니까?')
    print('   y: 진행        n: 취소')
    answer=input('>> ')
    # 입력된 문자 중 대문자를 소문자로 변경하는 함수
    answer=answer.lower()

    if answer == 'y':
        pass
    elif answer == 'n':
        exit()
    else:
        exit()
