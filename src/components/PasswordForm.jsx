import styled from '@emotion/styled';

const PasswordForm = ({ children, width, height }) => {
  return (
    <FormContainer $width={width} $height={height}>
      {children}
    </FormContainer>
  );
};
export default PasswordForm;

const FormContainer = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.$width || '499px'};
  height: ${(props) => props.$height || '600px'};
  background-color: #95d5f8;
  border-radius: 36px;
  padding: 70px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
