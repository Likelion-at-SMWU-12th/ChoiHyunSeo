## 📌 관련 이슈
closed #18 

## ✨ 과제 내용
![4주차 과제](https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/6e933c0d-bd86-4baa-975d-4c091d4204b9)

## 📸 스크린샷
### ✔️ 메인 화면
- [x] 2주차에 사용한 html, style 가져와서 구성하기
- [x] 일부 기능 / 스타일 수정하기 (색상, 다크/라이트 전환 모드 제거 등)
- [x] 취미를 설명하기 위한 html, url, template, view 추가하기 (하단에서 확인 가능)
- [x] 추가 개발 가능성을 열어둔 html, url, template, view 추가하기 (하단에서 확인 가능)
<img width="1062" alt="스크린샷 2024-04-08 오후 12 30 16" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/899ecb52-8c33-4e5d-9fab-2751788a7eed">

### ✔️ 메인 페이지에서 "취미 버튼" 클릭 시 취미에 대한 내용 확인 가능 (url 바뀜)
- [x] 메인으로 돌아갈 수 있는 버튼 생성하기
- [x] 취미를 설명하는 페이지로 내용 수정하기
- [x] 취미 나열하는 부분 구현하기
- [x] 취미인 이유 설명하는 부분 구현하기
- [x] 취미를 나눌 수 있는 버튼 구현하기 (링크 눌러보세용!)
<img width="1062" alt="스크린샷 2024-04-08 오후 12 37 49" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/acdea80a-4638-47ed-840f-f956c217c5d2">

### ✔️ 메인 페이지에서 "공사중 버튼" 클릭 시 현서의 잔망 확인 가능 (url 바뀜)
- [x] 공개 일자를 나타내는 부분 구현하기
- [x] 공개 일자까지 남은 기간을 카운트 해 주는 부분 구현하기 🚨
- [x] 공개 일자가 지나면 "이제 곧 공개됩니다!" 라는 문구로 전환되게 하기
<img width="1062" alt="스크린샷 2024-04-08 오후 12 50 28" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/8ae67d5a-d995-4fe7-876f-03d508f93e8f">
<img width="1062" alt="스크린샷 2024-04-08 오후 12 52 02" src="https://github.com/Likelion-at-SMWU-12th/ChoiHyunSeo/assets/80738573/97e60791-7474-4d17-abc3-97c95b0883be">

## 📚 레퍼런스 (또는 새로 알게 된 내용)
###  ✔️ 남은 일자를 계산해 주는 코드
```
<script>
    // 2099년 12월 31일까지의 한국 시간 기준 시간 계산
    const countDownDate = new Date("December 31, 2099 00:00:00 GMT+0900").getTime();

    // 1초마다 카운트다운 업데이트
    const x = setInterval(function() {
    // 현재 한국 시간 가져오기
    const now = new Date().getTime();

    // 남은 시간 계산
    const distance = countDownDate - now;

    // 일, 시간, 분, 초 계산
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 연도 계산
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;

    // 카운트다운 표시
    let countdownMessage = "";
    if (years > 0) {
        countdownMessage += years + "년 ";
    }
    countdownMessage += remainingDays + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초 남음";

    document.getElementById("countdown").innerHTML = countdownMessage;

    // 카운트다운이 끝나면 메시지 표시
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "이제 곧 공개됩니다!";
    }
    }, 1000);
</script>
