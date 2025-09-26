import styled from '@emotion/styled';

const Modal = ({ icon, title, subTitle, button }) => {
  <Container>
    <Icon>{icon}</Icon>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <Button>{button}</Button>
  </Container>;
};

export default Modal;

const Container = styled.div``;
