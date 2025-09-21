import Header from '../components/Header';
import UseCard from '../components/UseCard';

const UseList = () => {
  return (
    <>
      <Header>이용 목록</Header>
      <UseCard
        date="2025년 5월 17일"
        usename="오혜민"
        visitorount="남 1 | 여 3"
      ></UseCard>
      <UseCard
        date="2025년 5월 17일"
        usename="오혜민"
        visitorount="남 1 | 여 3"
      ></UseCard>
    </>
  );
};

export default UseList;
