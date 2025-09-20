import LabeledInput from '../components/LabeledInput';
import PasswordForm from '../components/PasswordForm';
import Button from '../components/Button';
import styled from '@emotion/styled';
import { useState } from 'react';

const EnterAdminPassword = () => {
  const [currentPW, setCurrentPW] = useState('');
  return (
    <PasswordForm width="499px" height="400px">
      <Title>관리자 비밀번호 입력</Title>
      <LabeledInput
        label=""
        placeholder="현재 비밀번호를 입력하세요."
        value={currentPW}
        onChange={(e) => setCurrentPW(e.target.value)}
      />
      <Button>확인</Button>
      <ChangePW>비밀번호 변경</ChangePW>
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

const ChangePW = styled.button`
  border: none;
  color: #434f5a;
  font-size: 16px;
  background: none;
  margin-top: 12px;
`;
