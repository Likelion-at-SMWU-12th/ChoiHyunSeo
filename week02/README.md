## 📌 관련 이슈
<!-- 관련있는 이슈 번호(#10)을 적어주세요.
  해당 pull request merge와 함께 이슈를 닫으려면
  closed #Issue_number를 적어주세요 -->


## ✨ 과제 내용
2주 세미나에 진행한 코드에 html, css, js 코드를 추가하고 사용하지 않은 폰트를 설정해보는 실습을 진행


## 📸 스크린샷(선택)
- 사이트 접속 시 나타나는 alert()
<img width="905" alt="스크린샷 2024-03-24 오후 4 27 22" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/7571e5c8-8c15-4495-beec-8ecce66a8d0f">

- 사이트 접속 시 나타나는 confirm()
<img width="905" alt="스크린샷 2024-03-24 오후 4 27 23" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/0ba2d8a8-7b91-44d6-8d2e-7188c761c2eb">

- 사이트 접속 시 나타나는 prompt()
<img width="905" alt="스크린샷 2024-03-24 오후 4 27 29" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/b79a9c5b-ea9f-4698-8662-bc744ddeb77f">

- table을 통해서 시간표 추가 (라이트모드)
<img width="905" alt="스크린샷 2024-03-24 오후 4 27 32" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/cab72a88-b295-4d69-9180-c1e63b2eff25">

- table을 통해서 시간표 추가 (다크모드)
<img width="905" alt="스크린샷 2024-03-24 오후 4 36 16" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/faf7650b-1612-4b6c-b4a1-3099b9d21481">

- 시간표를 다크모드 설정 후 다시 라이트모드로 바꾸었을 때의 테이블의 테두리 색 변경 확인
<img width="905" alt="스크린샷 2024-03-24 오후 4 36 19" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/8ae5851b-2616-4ca5-88ee-98755af886e2">

## 📚 레퍼런스 (또는 새로 알게 된 내용) 
- 다크모드 선택 시에, 테이블의 선을 흰색으로 변경하는 코드
```
var table = document.getElementById('schedule');
    var allCells = table.querySelectorAll('td, th'); // 테이블의 모든 셀(td)과 헤더(th)를 가져옵니다.
    for (var i = 0; i < allCells.length; i++) {
        allCells[i].style.borderColor = 'white'; // 각 셀과 헤더의 선 색을 하얀색으로 변경합니다.
    }
```
- 라이트모드 선택 시에, 테이블의 선을 검정색으로 변경하는 코드
```
var table = document.getElementById('schedule');
    var allCells = table.querySelectorAll('td, th'); // 테이블의 모든 셀(td)과 헤더(th)를 가져옵니다.
    for (var i = 0; i < allCells.length; i++) {
        allCells[i].style.borderColor = 'black'; // 각 셀과 헤더의 선 색을 하얀색으로 변경합니다.
    }
```
