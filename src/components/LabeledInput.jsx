import styled from '@emotion/styled';
import { useId, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const LabeledInput = ({ label = '', placeholder, value, onChange }) => {
  const [showPW, setShowPW] = useState(false);
  const id = useId();

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <StyledInput
          id={id}
          type={showPW ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></StyledInput>
        <IconButton type="button" onClick={() => setShowPW(!showPW)}>
          {showPW ? <IoEyeSharp /> : <FaEyeSlash />}
        </IconButton>
      </InputWrapper>
    </InputContainer>
  );
};

export default LabeledInput;

const InputContainer = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #2e2e32;
  margin-bottom: 8px;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 1px solid #cccccc;
  border-radius: 16px;
  background-color: #ffffff;
  font-size: 18px;
`;

const IconButton = styled.button`
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;
