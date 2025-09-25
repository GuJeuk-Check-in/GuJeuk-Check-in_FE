import LabeledInput from '../components/LabeledInput';
import Button from '../components/Button/Button';
import PasswordForm from '../components/PasswordForm';
import { useState } from 'react';
import styled from '@emotion/styled';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const [currentPW, setCurrentPW] = useState('');
  const [newPW, setNewPW] = useState('');
  const [confirmPW, setConfirmPW] = useState('');

  const navigate = useNavigate();

  const handleChangePasswordClick = () => {
    navigate('/');
  };

  return (
    <>
      <BackBtn onClick={() => navigate('/')}>
        <IoIosArrowBack />
      </BackBtn>
      <PasswordForm>
        <Title>관리자 비밀번호 변경</Title>
        <LabeledInput
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요."
          value={currentPW}
          onChange={(e) => setCurrentPW(e.target.value)}
        />
        <LabeledInput
          label="새로운 비밀번호"
          placeholder="변경할 비밀번호를 입력하세요."
          value={newPW}
          onChange={(e) => setNewPW(e.target.value)}
        />
        <LabeledInput
          label="새로운 비밀번호 확인"
          placeholder="변경할 비밀번호를 다시 입력하세요."
          value={confirmPW}
          onChange={(e) => setConfirmPW(e.target.value)}
        />
        <Button onClick={handleChangePasswordClick}>변경</Button>
      </PasswordForm>
    </>
  );
};

export default UpdatePassword;

const Title = styled.h2`
  color: #2e2e32;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
`;

const BackBtn = styled.button`
  position: absolute;
  left: 50px;
  top: 50px;
  font-size: 60px;
  background: none;
  border: none;
  cursor: pointer;
`;
