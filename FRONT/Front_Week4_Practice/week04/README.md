# ⭐️ props & state
- React.js는 컴포넌트 기반으로, 컴포넌트는 독립적이며 재사용 가능하게 만든 부품의 조각들
- 리액트로 만들어진 사이트 화면들은 컴포넌트의 조합임
- 이러한 컴포넌트 구조 내에서 데이터를 받거나 처리하고 관리하기 위해 props와 state를 사용

|props|state|
|:---:|:---:|
|서로 다른 컴포넌트 간의 데이터 전달|컴포넌트 내에서 동적인 데이터 관리|
|불변 데이터|가변 데이터|
|부모 컴포넌트 소유|컴포넌트 자신이 소유|
|읽기 전용이므로 데이터 일관성|변경 시 컴포넌트 렌더링|


## 💬 props? _ properties
- **컴포넌트 간의 데이터 전달을 위해 사용**
- 앱에서 데이터 흐름을 동적으로 만들고 싶을 때 유용함
- 부모 컴포넌트에서 자식 컴포넌트로 전달
- 읽기 전용 즉, 불변의 값
- 부모 컴포넌트의 소유


## 💬 state?
- **컴포넌트 내에서 동적인 데이터 관리**
- state 변경 시에 해당 컴포넌트는 다시 렌더링
- 입력, 네트워크 요청 결과 등으로 인해 변경되는 데이터
- 해당 컴포넌트의 소유
- **useState로 초기화, setState로 변경**

### 💡 UseState & Setstate
- react에서 state란 계속적으로 값이 변화하는, 동적인 데이터를 갖는 컴포넌트
- 일반 변수 (const, let, var 등등...) 와 다르게 **값이 변하면 렌더링이 일어남**
- 즉, 값이 변하면 연관된 컴포넌트들이 다시 렌더링 되어 **화면이 즉시 바뀌게 됨**
- 리렌더 (호출하여 return을 다시 받아 화면을 새로 그리는 것)

#### ✔️ UseState
- state를 변경할 때 사용하는 함수

#### ✔️ Setstate
- 리액트의 훅(Hook) 중 하나로, 함수 컴포넌트에서 상태를 관리하는 데 사용
- let [넣어줄 data, data에 적용할 함수] = useState(초기값)

# ⭐️ useEffect
- state에 변화가 있을 때에, 모든 컴포넌트가 자동으로 render 되는데, 이를 막기 위한 함수
- 리렌더를 막는 것이 아니라 모든 컴포넌트가 리렌더가 되는 것을 막는 것임
- API를 불러오거나, 중요한 정보를 불러올 때에는 매번 모든 컴포넌트를 리렌더링 하지 않아도 됨
- 프로그램이 커질수록 불필요한 반복적인 코드가 계속 리렌덜이되면 과부하가 발생할 수 있는데, 이를 막아주고 프로그램을 좀 더 효율적으로 돌릴 수 있게 된다.

- 
