import Header from '../components/Header';
import UseCard from '../components/UseCard';
import { useNavigate } from 'react-router-dom';

const UseList = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/user-detail');
  };
  return (
    <>
      <Header>이용 목록</Header>
      <UseCard
        date="2025년 11월 13일"
        useName="오혜민"
        maleCount="3"
        femaleCount="1"
        onClick={handleCardClick}
      ></UseCard>
      <UseCard
        date="2025년 11월 13일"
        useName="김정욱"
        maleCount="3"
        femaleCount="1"
        onClick={handleCardClick}
      ></UseCard>
      <UseCard
        date="2025년 11월 13일"
        useName="윤지원"
        maleCount="3"
        femaleCount="1"
        onClick={handleCardClick}
      ></UseCard>
      <UseCard
        date="2025년 11월 13일"
        useName="박태수"
        maleCount="3"
        femaleCount="1"
        onClick={handleCardClick}
      ></UseCard>
    </>
  );
};

export default UseList;
