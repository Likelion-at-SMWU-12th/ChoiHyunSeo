## 📌 관련 이슈
  closed #26 


## ✨ 과제 내용
나만의 게시판 만들기!
1. App.js에 삼항 연산자를 사용하여 컴포넌트 조건부 렌더링하기
2. 각 컴포넌트에 자바스크립트 표현식 (변수 호출) 사용해보기
3. styled-components를 button이 아닌 다른 요소에 적용해보기


## 📸 스크린샷
#### 메인화면 _ 암호를 입력하지 않으면 제 과제를 볼 수 없습니다 후후...
- 삼항연산자를 사용하여 제가 미리 설정해 둔 이름을 입력하여야 아래의 창이 나타나도록 설정해 보았습니다
<img width="950" alt="스크린샷 2024-07-01 오후 4 31 55" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/afa81d0c-71f2-4380-abf9-cecef4d38c7b">

#### 암호 입력 후 화면
- **고양이지대조아**를 입력하시면 제 과제를 확인하실 수 있습니다
<img width="950" alt="암호명 입력" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/2e59ae8f-2cba-4dd4-a854-75aac1c99f15">

#### 방명록 입력
- (간단해 보이지만 머리가 아팠던) 방명록을 간단하게 입력 가능합니다!
- 입력을 완료하면 페이지가 자동으로 **새로고침**되면서 유지가 안 되는 이슈가 있었는데 이때에, `event.preventDefault();`를 사용하여 이를 방지해주었습니다. 이것도 정말 머리가 아팠던 것 같아요
<img width="950" alt="방명록 입력" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/82163f9e-6ee3-4d78-951b-fa5491721e64">

#### 방명록 삭제 후 다시 입력
- 잘못 기입한 방명록을 삭제하고 다시 입력할 수 있습니다
- 맞습니다 이번의 테마는 파란색이에요... 
<img width="950" alt="방명록 삭제" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/fae508ab-afb2-4498-a3a9-0df686512fef">
<img width="950" alt="방명록 삭제 후 다시 입력" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/49496145-f0ec-4707-b197-fb276f93f4ff">

#### 투두 입력 및 완료 표시
- 오늘 해야 할 일들은 추가할 수 있습니다
- 이전 과제에서 사용했던 로직을 변형하는 방식으로 사용해보았는데, 아직 구조 자체를 100% 뇐에 넣지 못해서 아쉬움이 남는 것 같습니다... 그래도 일부 구현이 되었다는 거에 의의를 두고 좀 더 찾아보면서 디벨롭 해보고자 합니다!
- 뽀나쓰로,,, 아래에 나오는 고양이, 강아지, 햄스터는 과제 예시에 있던 친구들인데, 미리 코드에 해당 사진에 대한 답을 입력해두고 삼항연산자를 통해서 해당 아기들의 정체(?)를 알려주는 기능을 구현해보았습니다
<img width="950" alt="투두입력" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/ed422b10-0f40-4ce2-83ea-ac33c4dd572d">
<img width="950" alt="투두완료표시" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/21d01db2-1eed-44c0-ad5b-17ad00e9be36">

#### 후기
후기라고 하면 좀 웃기긴 하지만... 처음에는 구조가 머리에 안 하나도 안 들어와서 어렵긴 했지만, 컴포넌트 배치나 재사용 등은 코드를 사용하면 사용할수록 감이 조금씩 잡히는 것 같아서 꾸준함이 중요하구나... 느꼈습니다. 그리고 코드가 조금씩 길어지니까 이후에는 리팩토링도 적절하게 해주면서 진행해야 코드가 꼬이지 않을 것 같습니다

## 📚 레퍼런스 (또는 새로 알게 된 내용) 혹은 궁금한 사항들
**이전 hw에서 진행했던 js를 jsx로 바꿔보고 싶어서 호기롭게 도전해보았습니다… 흐음 네 쉽지만은 않았던 것 같습니다… 제가 원하는 모든 기능에 대해서 useState가 사용되는 것 같습니다. 이번 여기톤에서는 리액트를 사용하지는 않지만 시간이 될 때 useState에 대해서 빡세게 실습해보면 좋을 것 같아요… 이번에는 완벽하게 내 코드로 만들지 못한 것 같아 큰 아수움이 남습니다 ㅎㅎ...** 

### <이벤트 핸들링>
https://velog.io/@donggu/%EB%AC%B8%EA%B3%BC%EC%83%9D%EC%9D%B4-%EC%84%A4%EB%AA%85%ED%95%98%EB%8A%94-React-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%A7%81

### <useState>
https://react.vlpt.us/basic/07-useState.html

### <spread 연산자>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://velog.io/@tnstjd120/%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%97%B0%EC%82%B0%EC%9E%90spread-operator

### <setToDos 함수>
setToDos((currentArray)=> [toDo, ...currentArray])
https://velog.io/@angel_eugnen/React%EB%A1%9C-TodoList%EB%A7%8C%EB%93%A4%EA%B8%B0
https://yhs6148.tistory.com/18

### <filter_콜백함수>
https://velog.io/@pingu944/08.-filter-%EB%A9%94%EC%86%8C%EB%93%9C%EC%99%80-callback-%ED%95%A8%EC%88%98
https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-filter-%ED%95%A8%EC%88%98/
