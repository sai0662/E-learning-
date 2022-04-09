import React, { useState } from 'react';
import Calender from 'react-calendar';
import "react-calendar/dist/Calendar.css"
import './TechCalendar.css';

export default function TechCalendar () {
    const [value, onChange] = useState(new Date());

  return (
   <div>
<Calender onChange={onChange} value={value}/>
   </div>
  )
}