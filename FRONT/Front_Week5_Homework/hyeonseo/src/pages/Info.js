const Info = ({ userInfo }) => {
  return (
    <div>
      <h2>입력된 정보</h2>
      <p>이름: {userInfo.name}</p>
      <p>이메일: {userInfo.email}</p>
    </div>
  );
};
