import { useState } from 'react';
import styled from '@emotion/styled';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const UseCard = ({ date, useName, maleCount, femaleCount }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  return (
    <Container>
      <Section>
        <Date>{date}</Date>
        <BottomLine>
          <UseName>{useName}</UseName>
          <VisitorCount>
            남: {maleCount} | 여: {femaleCount}
          </VisitorCount>
        </BottomLine>
      </Section>
      <DeleteIcon onClick={() => setAlertOpen(true)}>
        <RiDeleteBin5Line />
      </DeleteIcon>
    </Container>
  );
};

export default UseCard;

const Container = styled.div`
  background-color: #ffffff;
  width: 89%;
  height: auto;
  border-radius: 36px;
  border: 1px solid #2e2e32;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-left: 44px;
  margin-bottom: 20px;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomLine = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Date = styled.p`
  color: #969698;
  font-size: 20px;
`;

const UseName = styled.h2`
  color: #2e2e32;
  font-size: 32px;
  margin: 0;
  margin-right: 200px;
  margin-top: 0;
`;

const VisitorCount = styled.p`
  color: #2e2e32;
  font-size: 20px;
  margin: 0;
  margin-bottom: 30px;
`;

const DeleteIcon = styled.button`
  display: flex;
  color: #d88282;
  font-size: 28px;
  border: none;
  background: none;
  cursor: pointer;
`;
