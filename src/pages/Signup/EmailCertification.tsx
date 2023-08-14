const EmailCertification = () => {
  return (
    <div>
      <h1>본인인증하기</h1>
      <h2>정의로운 손민수 이용을 위해 약관에 동의해주세요</h2>
      <form>
        <label htmlFor="email">이메일을 입력해 주세요.</label>
        <label htmlFor="emailCertificaton">
          이메일 인증 번호를 입력해 주세요
        </label>
        <button
          onClick={() => {
            alert("인증번호를 입력해주세요");
          }}
        >
          인증하기
        </button>
        <p>
          이메일 인증번호가 발송되지 않았나요?<span>재발송하기</span>
        </p>
      </form>
    </div>
  );
};
export default EmailCertification;
