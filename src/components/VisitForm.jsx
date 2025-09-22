import { useState } from 'react';
import styled from '@emotion/styled';

const VisitForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [purpose, setPurpose] = useState('');
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [consent, setConsent] = useState(false);
  const [date, setDate] = useState('');

  const ageGroup = ['미취학아동', '초등학생', '중학생', '고등학생', '성인'];
  const purposeGroup = [
    '게임',
    '독서',
    '동아리',
    '댄스',
    '노래방',
    '미디어',
    '그 외...',
  ];

  const handleSubmit = () => {
    const formData = {
      name,
      age,
      number,
      purpose,
      maleCount,
      femaleCount,
      consent,
      date,
    };
    console.log(formData);
    alert('방문 정보가 등록되었습니다!');
  };

  return (
    <Container>
      <Form>
        <Label>대표자 이름:</Label>
        <Input
          type="text"
          placeholder="대표자 이름을 입력하세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form>

      <Form>
        <Label>연령대:</Label>
        <AgeGroup>
          {ageGroup.map((item) => (
            <AgeButton
              key={item}
              selected={age === item}
              onClick={() => setAge(item)}
            >
              {item}
            </AgeButton>
          ))}
        </AgeGroup>
      </Form>

      <Form>
        <Label>대표자 연락처:</Label>
        <Input
          type="text"
          placeholder="연락처를 입력하세요 (010-0000-0000)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form>

      <Form>
        <Label>방문 목적:</Label>
        <Select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option value="">선택하세요.</option>
          {purposeGroup.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Form>

      <Form>
        <Label>방문 남성 수:</Label>
        <CountWrapper>
          <CountButton onClick={() => setMaleCount(Math.max(0, maleCount - 1))}>
            -
          </CountButton>
          <Count>{maleCount}명</Count>
          <CountButton onClick={() => setMaleCount(maleCount + 1)}>
            +
          </CountButton>
        </CountWrapper>
      </Form>

      <Form>
        <Label>방문 여성 수:</Label>
        <CountWrapper>
          <CountButton
            onClick={() => setFemaleCount(Math.max(0, femaleCount - 1))}
          >
            -
          </CountButton>
          <Count>{femaleCount}명</Count>
          <CountButton onClick={() => setFemaleCount(femaleCount + 1)}>
            +
          </CountButton>
        </CountWrapper>
      </Form>

      <Form>
        <Label>개인정보 수집 및 이용 동의:</Label>
        <ConsentWrapper>
          <ConsentButton selected={consent} onClick={() => setConsent(true)}>
            O
          </ConsentButton>
          <ConsentButton selected={!consent} onClick={() => setConsent(false)}>
            X
          </ConsentButton>
        </ConsentWrapper>
      </Form>

      <Form>
        <Label>방문 날짜:</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form>

      <SubmitButton onClick={handleSubmit}>추가</SubmitButton>
    </Container>
  );
};

export default VisitForm;

// Styled Components
const Container = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Pretendard', sans-serif;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 1;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
`;

const AgeGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const AgeButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: ${({ selected }) => (selected ? '#6C63FF' : '#ddd')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
`;

const Select = styled.select`
  flex: 2;
  padding: 5px 10px;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CountButton = styled.button`
  padding: 5px 10px;
  background: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Count = styled.span`
  min-width: 30px;
  text-align: center;
`;

const ConsentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ConsentButton = styled.button`
  flex: 1;
  padding: 5px 0;
  border: none;
  border-radius: 5px;
  background: ${({ selected }) => (selected ? '#6C63FF' : '#ddd')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background: #a0cfff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;
