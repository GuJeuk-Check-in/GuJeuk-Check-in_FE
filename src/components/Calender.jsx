/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';

const CalendarWrapper = styled.div`
  .react-calendar {
    border: none;
    font-family: 'Pretendard', sans-serif;
  }

  .react-calendar__tile--now {
    background: #6c63ff;
    color: white;
    border-radius: 8px;
  }

  .react-calendar__tile--active {
    background: #95d5f8 !important;
    color: white;
    border-radius: 8px;
  }

  .react-calendar__tile:enabled:hover {
    background: #f0f0f0;
    border-radius: 8px;
  }
`;
