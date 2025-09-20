import styled from '@emotion/styled';

const Button = ({ children }) => {
  return (
    <Container>
      <Btn>{children}</Btn>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Btn = styled.button`
  width: 110px;
  height: 48px;
  margin-top: 10px;
  padding: 12px 0;
  background-color: #7a81db;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #6a74cc;
  }
`;
