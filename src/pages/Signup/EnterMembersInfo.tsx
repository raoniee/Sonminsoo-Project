const EnterMembersInfo = () => {
  // useEffect(() => {
  //   if (email === "") {
  //     navigation("/signup");
  //   }
  // }, []);
  // const navigation = useNavigate();
  return (
    <div>
      <h1>개인정보 입력하기</h1>
      <h2>정의로운 손민수 이용을 위해 약관에 동의해주세요</h2>
      <h2>기본정보입력</h2>
      <form>
        <label htmlFor="email">이메일을 입력해 주세요.</label>
        <input type="text" id="email" placeholder="이메일을 입력해 주세요" />
        <label htmlFor="password">비밀번호를 입력해 주세요</label>
        <input
          type="text"
          id="password"
          placeholder="비밀번호를 입력해 주세요"
        />
        <label htmlFor="passwordConfirm">비밀번호를 다시 입력해 주세요</label>
        <input
          type="text"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해 주세요"
        />
        <h2>개인정보입력</h2>
      </form>
      <form>
        <label htmlFor="name">이름을 입력해 주세요.</label>
        <input type="text" id="name" placeholder="이름을 입력해 주세요." />
        <label htmlFor="birthDate">
          생년월일을 입력해 주세요 &#40;ex 991121&#41;
        </label>
        <input
          type="text"
          id="birthDate"
          placeholder="생년월일을 입력해 주세요 &#40;ex 991121&#41;"
        />
        <label htmlFor="phone">
          전화번호를 입력해 주세요 &#40;ex 01022222222&#41;
        </label>
        <input
          type="text"
          id="phone"
          placeholder="전화번호를 입력해 주세요 &#40;ex 01022222222&#41;"
        />
      </form>
    </div>
  );
};
export default EnterMembersInfo;
