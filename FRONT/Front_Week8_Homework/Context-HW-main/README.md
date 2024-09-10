# 💡 Context API 과제 소개

숙멋의 구성원을 소개하는 간단한 코드에요. 프론트, 백, 기획/디자인 세 가지 버튼 클릭을 통해 파트별 구성원을 렌더링합니다.

<br/>

### ⚙️ 컴포넌트 설명 및 구조

컴포넌트|구조
---|---|
<img src='https://github.com/user-attachments/assets/42f32ee4-1146-4cdb-9de4-03495a75b8e3' width=600px/>| <img width="226" alt="스크린샷 2024-09-02 오후 6 38 31" src="https://github.com/user-attachments/assets/b51002c9-0c67-48d2-a0ea-83aa6151f8ad">

- `Content` : Left, Right 컴포넌트를 좌우에 배치
- `Left` : 프론트엔드, 백엔드, 기획/디자인 버튼 렌더링과 클릭 이벤트 처리를 담당
- `Right` : 오른쪽 컴포넌트, Content와 MemberList를 이어주는 중간 컴포넌트
- `MemberList` : Left에서 클릭한 part의 구성원을 렌더링
- **`sookmut.js`** : 숙멋 구성원들의 이름, 파트, 역할을 담은 배열

<br/>

### 🚨 prop drilling 문제
App.js에서 `const [part, setPart] = useState("");`로 선택한 파트 상태를 관리합니다.<br/>
하위 컴포넌트에서 해당 상태를 변경하고 접근하기 위해 중간 컴포넌트들을 거쳐 prop을 전달해야하는 prop drilling 문제가 발생하죠 😥 <br/>
해당 문제를 분석해보고, `context`를 통해 문제를 해결해봅시다!

<br/>

### 🔎 과제 진행 순서
1. 본인 이름 레포지토리에서 과제 브랜치를 만든다.
2. 이 과제 레포를 clone 받는다.
3. 클론 받은 폴더에서 터미널을 열고 기존에 연결되어 있는 깃 저장소와의 연결을 끊는다.
  ```
   git remote rm origin
   rm -rf ./.git
  ```
5. 클론 받은 폴더를 본인 이름 레포 폴더로 옮긴다. (Context-HW → LeeYeji)
6. 그동안 했던 것처럼 과제 브랜치에서 과제를 진행하고 push 후 pr 작성!

<br/>

### 🦄 힌트
Provider로 context를 사용할 범위를 감싸준다고 했었죠? <br/>
App.js에서도 context 값을 사용하려면 App.js보다 더 큰 범위를 감싸주어야해요. 그곳이 어딜까..<br/>
`<App />`을 렌더링해주는 부분.. 어디서 봤더라? 
<br/>
직접 컴포넌트 구조를 분석해보고, context를 적용해보면서 전역상태관리에 대한 이해도를 높여봅시다 💪🏻

<br/>
<br/>
<br/>

# 과제 수행

📌 관련 이슈
closed #49 

## ✨ 과제 내용
![과제](https://github.com/user-attachments/assets/0b2c6d6c-73c4-4256-bc65-87d0647268aa)


## 🧐 과제 분석
![01](https://github.com/user-attachments/assets/3423649a-bb57-458e-941e-71929fbce2e7)


## 📸 완성된 화면 스크린샷
![캡처_1](https://github.com/user-attachments/assets/9a22ab8c-5354-41b5-97f1-6280f9e41705) |![캡처_2](https://github.com/user-attachments/assets/18dd5363-d201-43a5-9387-fac3201d7009)|![캡처_3](https://github.com/user-attachments/assets/ab9c7120-1da8-40c1-92f2-3bd679c1e28f)|![캡처_4](https://github.com/user-attachments/assets/8116af72-2b19-4394-95fa-7128bb6c64af)
--- | --- | --- | --- | 

## [중요]✔️ PartContext.js 생성
<img width="822" alt="스크린샷 2024-09-10 오후 3 17 10" src="https://github.com/user-attachments/assets/3954e2d6-c485-4cfd-8f16-ebf61023d9fb">

- 컴포넌트 트리 내에서 props를 통해 일일이 데이터를 전달하지 않고도 상태를 쉽게 공유할 수 있게 됨
- 데이터를 전역적으로 공유할 수 있게 해 주고, 컴포넌트와 훅을 사용

<br/>

## ⛔️ 어려웠던 점
생각보다 개념 자체의 이해가 잘 안 가는 느낌... 파일이 많아지면서 잠깐만 딴 생각을 하거나 다른 것하다가 오면 머리 속이 비워지는 기분이었어요... 단순히 과제에서만이 아니라 실제 프로젝트 등에서 사용해보면 확 와닿을 것 같은 느낌이 듭니다 근데 이해가 잘 안 가는 것들을 사용하려면 공부를 해야 하니... 아자아자 해 봐야지요

<br/>

## 💬 아기사자들과 함께 나누고 싶은 정보 등
생각보다 일부 문제는 Git 때문에 발생하는 경우가 많은 것 같습니다... 과제를 하면서 생긴 1/3의 문제는 모두 깃 때문이었어요... 클론 받을 때에 문제가 생긴다던지 갑자기 브랜치가 사라져버린다는 문제라든지... 다양한 방법들을 시도하는 것도 좋지만 역시 제일은 도르마무-! 그냥 처음부터 다시 천천히 해보는 겁니다^^ 이걸로 시간을 얼마나 소요한 건지 모르겠네요

<br/>

## 💦 해결을 위해서 했던 노력
브랜치나 다른 곳에 생성되는 래포 등의 이유 파악 및 오류 내용 디버깅을 위해 구글링 + 지피티 를 많이 했던 것 같습니다. 깃 문제일 경우에는 명령어를 사용하기 때문에 오타를 잘 봐야 한다는 걸 다시 한번 느끼게 된 것 같네요...

<br/>
