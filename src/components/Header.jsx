import styled from '@emotion/styled';

const Header = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #95d5f8;
  width: 100%;
  height: 165px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 50px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 44px;
  color: #2e2e32;
  margin: 0;
`;
