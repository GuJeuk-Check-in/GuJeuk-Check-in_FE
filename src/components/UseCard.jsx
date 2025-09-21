import styled from '@emotion/styled';

const UseCard = ({ date, usename, visitorount }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <UseName>{usename}</UseName>
      <VisitorCount>{visitorount}</VisitorCount>
      <DeleteIcon>삭제 아이콘</DeleteIcon>
    </Container>
  );
};

export default UseCard;

const Container = styled.div`
  background-color: #ffffff;
  width: 1200px;
  height: 161px;
  border-radius: 36px;
  border: 1px solid #2e2e32;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-left: 44px;
  gap: 20px;
  margin-bottom: 20px;
`;

const Date = styled.p`
  color: red;
`;

const UseName = styled.h2`
  color: black;
`;

const VisitorCount = styled.p`
  color: gray;
`;

const DeleteIcon = styled.div`
  color: brown;
`;
