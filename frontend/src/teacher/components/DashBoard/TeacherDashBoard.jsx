import React,{useState} from 'react';
import './TeacherDashBoard.css';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import TechCalendar from '../Calendar/TechCalendar';

export default function TeacherDashBoard() {
    const [show, setShow] = useState(true);
  
    return (
        <>
        <h1>DashBoard</h1>
        <div className='card'>
            <h1>Classes</h1>
            <div className='class-icon'>
            < ClassTwoToneIcon />
            </div>
         </div>
          <div className='card2'>
          <h1>Students</h1>
          <div className='class-icon'>
            <PeopleAltTwoToneIcon />
            </div>
      </div>
        <div className='card3'>
        <h1>Joining Date</h1>
        <div className='class-icon'>
            <CalendarTodayTwoToneIcon />
            </div>
    </div>
    <div className='card4'>
        <h1>Salary</h1>
        <div className='class-icon'>
            <CurrencyRupeeTwoToneIcon />
            </div>
    </div>
    <div className='notice-board'>
        <h1>Notice Board</h1>
    </div>
    <div className='calender'>
        <h1>Calender</h1>
        <div className='react-calender'><TechCalendar/></div>
        
    </div>
    </>
      );
  }
  