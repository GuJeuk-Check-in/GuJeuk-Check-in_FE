import { useState } from 'react';
import CalendarComponent from './Calender';
import styled from '@emotion/styled';

const VisitForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [purPose, setPurpose] = useState('');
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [consent, setConsent] = useState(false);
  // const [date, setDate] = useState('');
  const [date, setDate] = useState(new Date());

  const ageGroup = ['미취학아동', '초등학생', '중학생', '고등학생', '성인'];
  const purPoseGroup = [
    '게임',
    '독서',
    '동아리',
    '댄스',
    '노래방',
    '미디어',
    '그 외...',
  ];

  return (
    <Container>
      <FormRow>
        <Label>대표자 이름 :</Label>
        <Input
          type="text"
          placeholder="대표자이름을 입력하세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Label>연령대 :</Label>
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
      </FormRow>

      <FormRow>
        <Label>대표자 연락처 :</Label>
        <Input
          type="text"
          placeholder="연락처를 입력하세요. (010-0000-0000)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Label>방문 목적 :</Label>
        <Select value={purPose} onChange={(e) => setPurpose(e.target.value)}>
          <Option value="">선택하세요.</Option>
          {purPoseGroup.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </FormRow>

      <FormRow>
        <Label>방문 남성 수 :</Label>
        <CountWrapper>
          <CircleBtn onClick={() => setMaleCount(Math.max(0, maleCount - 1))}>
            -
          </CircleBtn>
          <Count>{maleCount} 명</Count>
          <CircleBtn onClick={() => setMaleCount(maleCount + 1)}>+</CircleBtn>
        </CountWrapper>
      </FormRow>

      <FormRow>
        <Label>방문 여성 수 :</Label>
        <CountWrapper>
          <CircleBtn
            onClick={() => setFemaleCount(Math.max(0, femaleCount - 1))}
          >
            -
          </CircleBtn>
          <Count>{femaleCount} 명</Count>
          <CircleBtn onClick={() => setFemaleCount(femaleCount + 1)}>
            +
          </CircleBtn>
        </CountWrapper>
      </FormRow>

      <FormRow>
        <Label>개인정보 수집 및 이용 동의 :</Label>
        <ConsentWrapper>
          <ConsentBtn selected={consent} onClick={() => setConsent(true)}>
            O
          </ConsentBtn>
          <ConsentBtn selected={!consent} onClick={() => setConsent(false)}>
            X
          </ConsentBtn>
        </ConsentWrapper>
      </FormRow>

      <FormRow>
        <Label>방문 날짜 :</Label>
        <CalendarComponent date={date} setDate={setDate} />
        {/* <Input
          type="date"
          placeholder="0000-00-00"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}
      </FormRow>

      <SubmitBtn>추가</SubmitBtn>
    </Container>
  );
};

export default VisitForm;

const Container = styled.div`
  width: 89%;
  height: 580px;
  background-color: #ffffff;
  border: 1px solid #2e2e32;
  border-radius: 36px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 52px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  width: 40%;
  font-weight: 600;
  text-align: right;
  font-size: 32px;
`;

const Input = styled.input`
  width: 550px;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 6px;
  font-size: 24px;
`;

const AgeGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const AgeButton = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 12px;
  background: ${({ selected }) => (selected ? '#6C63FF' : '#eee')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
  font-size: 24px;
`;

const Select = styled.select`
  width: 550px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 24px;
`;

const Option = styled.option`
  font-size: 24px;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CircleBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: #95d5f8;
  color: #2e2e32;
  font-size: 24px;
  cursor: pointer;
`;

const Count = styled.span`
  min-width: 50px;
  text-align: center;
  font-size: 24px;
`;

const ConsentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ConsentBtn = styled.button`
  width: 275px;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  background: ${({ selected }) => (selected ? '#6C63FF' : '#eee')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  width: 253px;
  align-self: center;
  padding: 10px 40px;
  background: #95d5f8;
  color: #2e2e32;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
`;
