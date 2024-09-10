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
<br/>
직접 컴포넌트 구조를 분석해보고, context를 적용해보면서 전역상태관리에 대한 이해도를 높여봅시다 💪🏻
