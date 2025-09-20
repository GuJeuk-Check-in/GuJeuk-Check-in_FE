import LabeledInput from '../components/LabeledInput';
import PasswordForm from '../components/PasswordForm';
import styled from '@emotion/styled';

const EnterAdminPassword = () => {
  return (
    <PasswordForm>
      <Title>관리자 비밀번호 입력</Title>
      <LabeledInput
        label=""
        placeholder="현재 비밀번호를 입력하세요."
        value=""
        onChange={(e) => setCurrentPW(e.target.value)}
      />
    </PasswordForm>
  );
};

export default EnterAdminPassword;

const Title = styled.h2`
  text-align: center;
  color: #2e2e32;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
`;
