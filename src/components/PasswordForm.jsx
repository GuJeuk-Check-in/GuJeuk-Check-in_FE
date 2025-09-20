import styled from '@emotion/styled';

const PasswordForm = ({ children }) => {
  return <FormContainer>{children}</FormContainer>;
};
export default PasswordForm;

const FormContainer = styled.div`
  box-sizing: border-box;
  width: 499px;
  height: 600px;
  background-color: #95d5f8;
  border-radius: 36px;
  margin: 130px auto;
  padding: 70px;
`;
