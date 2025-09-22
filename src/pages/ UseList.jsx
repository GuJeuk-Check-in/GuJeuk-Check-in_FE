import Header from '../components/Header';
import UseCard from '../components/UseCard';

const UseList = () => {
  return (
    <>
      <Header>이용 목록</Header>
      <UseCard
        date="2025년 11월 13일"
        useName="오혜민"
        maleCount="3"
        femaleCount="1"
      ></UseCard>
      <UseCard
        date="2025년 11월 13일"
        useName="김정욱"
        maleCount="3"
        femaleCount="1"
      ></UseCard>
      <UseCard
        date="2025년 11월 13일"
        useName="윤지원"
        maleCount="3"
        femaleCount="1"
      ></UseCard>
      <UseCard
        date="2025년 11월 13일"
        useName="박태수"
        maleCount="3"
        femaleCount="1"
      ></UseCard>
    </>
  );
};

export default UseList;
